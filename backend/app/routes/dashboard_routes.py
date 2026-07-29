from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.auth.dependencies import get_current_user
from app.models.vehicle import Vehicle
from app.models.purchase import Purchase

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
    purchases = db.query(Purchase).all()

    total_vehicles = len(vehicles)

    total_purchases = len(purchases)

    low_stock = len(
        [vehicle for vehicle in vehicles if vehicle.quantity <= 2]
    )

    return {
        "total_vehicles": total_vehicles,
        "total_purchases": total_purchases,
        "low_stock": low_stock,
        "total_revenue": 0
    }