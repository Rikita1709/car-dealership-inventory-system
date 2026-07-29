from fastapi import (
    APIRouter,
    Depends,
    HTTPException,
    Query,
    status,
)
from sqlalchemy.orm import Session

from app.database import get_db
from app.schemas.vehicle import (
    VehicleCreate,
    VehicleUpdate,
    VehicleResponse,
)
from app.models.vehicle import Vehicle
from app.models.purchase import Purchase
from app.models.user import User
from app.auth.dependencies import get_current_user
from typing import List

router = APIRouter(
    prefix="/api/vehicles",
    tags=["Vehicles"]
)


@router.post(
    "",
    response_model=VehicleResponse,
    status_code=status.HTTP_201_CREATED
)
def add_vehicle(
    vehicle: VehicleCreate,
    db: Session = Depends(get_db),
    user=Depends(get_current_user)
):

    new_vehicle = Vehicle(**vehicle.model_dump())

    db.add(new_vehicle)

    db.commit()

    db.refresh(new_vehicle)

    return new_vehicle
@router.get(
    "",
    response_model=List[VehicleResponse]
)
def get_all_vehicles(
    db: Session = Depends(get_db),
    user=Depends(get_current_user)
):
    vehicles = db.query(Vehicle).all()
    return vehicles
@router.get(
    "/search",
    response_model=list[VehicleResponse]
)
def search_vehicles(
    make: str | None = Query(default=None),
    model: str | None = Query(default=None),
    category: str | None = Query(default=None),
    min_price: float | None = Query(default=None),
    max_price: float | None = Query(default=None),
    db: Session = Depends(get_db),
    user=Depends(get_current_user)
):

    query = db.query(Vehicle)

    if make:
        query = query.filter(Vehicle.make == make)

    if model:
        query = query.filter(Vehicle.model == model)

    if category:
        query = query.filter(Vehicle.category == category)

    if min_price is not None:
        query = query.filter(Vehicle.price >= min_price)

    if max_price is not None:
        query = query.filter(Vehicle.price <= max_price)

    return query.all()
@router.get(
    "/low-stock",
    response_model=list[VehicleResponse]
)
def low_stock_vehicles(
    db: Session = Depends(get_db),
    user=Depends(get_current_user)
):
    vehicles = (
        db.query(Vehicle)
        .filter(Vehicle.quantity <= 2)
        .all()
    )

    return vehicles
@router.put(
    "/{vehicle_id}",
    response_model=VehicleResponse
)
def update_vehicle(
    vehicle_id: int,
    vehicle: VehicleUpdate,
    db: Session = Depends(get_db),
    user=Depends(get_current_user)
):

    db_vehicle = db.query(Vehicle).filter(
        Vehicle.id == vehicle_id
    ).first()

    if not db_vehicle:
        raise HTTPException(
            status_code=404,
            detail="Vehicle not found"
        )

    db_vehicle.make = vehicle.make
    db_vehicle.model = vehicle.model
    db_vehicle.category = vehicle.category
    db_vehicle.price = vehicle.price
    db_vehicle.quantity = vehicle.quantity

    db.commit()
    db.refresh(db_vehicle)

    return db_vehicle
@router.delete("/{vehicle_id}")
def delete_vehicle(
    vehicle_id: int,
    db: Session = Depends(get_db),
    user=Depends(get_current_user)
):

    db_vehicle = (
        db.query(Vehicle)
        .filter(Vehicle.id == vehicle_id)
        .first()
    )

    if not db_vehicle:
        raise HTTPException(
            status_code=404,
            detail="Vehicle not found"
        )

    db.delete(db_vehicle)
    db.commit()

    return {
        "message": "Vehicle deleted successfully"
    }
@router.post("/{vehicle_id}/purchase")
def purchase_vehicle(
    vehicle_id: int,
    db: Session = Depends(get_db),
    current_user: dict = Depends(get_current_user)
):
    vehicle = db.query(Vehicle).filter(
        Vehicle.id == vehicle_id
    ).first()

    if not vehicle:
        raise HTTPException(
            status_code=404,
            detail="Vehicle not found"
        )

    if vehicle.quantity <= 0:
        raise HTTPException(
            status_code=400,
            detail="Vehicle is out of stock"
        )

    vehicle.quantity -= 1

    user = db.query(User).filter(
    User.email == current_user["sub"]
).first()

    purchase = Purchase(
    vehicle_id=vehicle.id,
    user_id=user.id
)

    db.add(purchase)

    db.commit()

    db.refresh(vehicle)

    return vehicle
@router.put(
    "/{vehicle_id}/restock",
    response_model=VehicleResponse
)
def restock_vehicle(
    vehicle_id: int,
    quantity: int,
    db: Session = Depends(get_db),
    current_user: dict = Depends(get_current_user)
):
    vehicle = db.query(Vehicle).filter(
        Vehicle.id == vehicle_id
    ).first()

    if not vehicle:
        raise HTTPException(
            status_code=404,
            detail="Vehicle not found"
        )

    vehicle.quantity += quantity

    db.commit()
    db.refresh(vehicle)

    return vehicle