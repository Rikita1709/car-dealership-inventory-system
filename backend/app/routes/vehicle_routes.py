from fastapi import APIRouter, Depends, status, Query
from sqlalchemy.orm import Session

from app.database import get_db
from app.schemas.vehicle import VehicleCreate, VehicleResponse
from app.models.vehicle import Vehicle
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