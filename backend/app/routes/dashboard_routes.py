from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.auth.dependencies import get_current_user
from app.models.vehicle import Vehicle

router = APIRouter(
    prefix="/api/dashboard",
    tags=["Dashboard"]
)


@router.get("")
def dashboard(
    db: Session = Depends(get_db),
    current_user: dict = Depends(get_current_user)
):
    vehicles = db.query(Vehicle).all()

    total_vehicles = len(vehicles)

    total_stock = sum(vehicle.quantity for vehicle in vehicles)

    total_value = sum(
        vehicle.price * vehicle.quantity
        for vehicle in vehicles
    )

    return {
        "total_vehicles": total_vehicles,
        "total_stock": total_stock,
        "total_value": total_value
    }