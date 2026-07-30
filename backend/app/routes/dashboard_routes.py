from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.auth.dependencies import get_current_user

from app.models.vehicle import Vehicle
from app.models.purchase import Purchase
from app.models.user import User

router = APIRouter(
    prefix="/api/dashboard",
    tags=["Dashboard"]
)


@router.get("")
def dashboard(
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):

    vehicles = db.query(Vehicle).all()
    purchases = db.query(Purchase).all()

    total_vehicles = len(vehicles)
    total_purchases = len(purchases)
    total_stock = sum(vehicle.quantity for vehicle in vehicles)
    total_value = sum(
    vehicle.price * vehicle.quantity
    for vehicle in vehicles
)

    total_revenue = 0

    recent_purchases = []

    low_stock = []

    for vehicle in vehicles:

        if vehicle.quantity <= 2:

            low_stock.append({
                "make": vehicle.make,
                "model": vehicle.model,
                "quantity": vehicle.quantity
            })

    for purchase in reversed(purchases):

        vehicle = db.query(Vehicle).filter(
            Vehicle.id == purchase.vehicle_id
        ).first()

        user = db.query(User).filter(
            User.id == purchase.user_id
        ).first()

        if vehicle:

            total_revenue += vehicle.price

            if len(recent_purchases) < 5:

                recent_purchases.append({

                    "vehicle": f"{vehicle.make} {vehicle.model}",
                    "buyer": user.email,
                    "price": vehicle.price

                })

    return {

        "total_vehicles": total_vehicles,

        "total_purchases": total_purchases,

        "total_stock": total_stock,

        "total_value": total_value,

        "low_stock": len(low_stock),

        "low_stock_vehicles": low_stock,

        "total_revenue": total_revenue,

        "recent_purchases": recent_purchases,

        "vehicles": [

            {
                "make": v.make,
                "category": v.category,
                "quantity": v.quantity
            }

            for v in vehicles

        ]

    }