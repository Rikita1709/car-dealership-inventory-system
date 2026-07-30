from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.auth.dependencies import get_current_user

from app.models.purchase import Purchase
from app.models.vehicle import Vehicle
from app.models.user import User

router = APIRouter(
    prefix="/api/purchases",
    tags=["Purchases"]
)


@router.get("")
def get_purchase_history(
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):

    purchases = db.query(Purchase).all()

    data = []

    for purchase in purchases:

        vehicle = db.query(Vehicle).filter(
            Vehicle.id == purchase.vehicle_id
        ).first()

        user = db.query(User).filter(
            User.id == purchase.user_id
        ).first()

        data.append({
            "id": purchase.id,
            "make": vehicle.make,
            "model": vehicle.model,
            "category": vehicle.category,
            "price": vehicle.price,
            "buyer": user.email,
        })

    return data