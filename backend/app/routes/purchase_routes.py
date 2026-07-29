from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.auth.dependencies import get_current_user
from app.models.purchase import Purchase
from app.schemas.purchase import PurchaseResponse
from app.models.user import User

router = APIRouter(
    prefix="/api/purchases",
    tags=["Purchases"]
)


@router.get("/", response_model=list[PurchaseResponse])
def get_purchases(
    db: Session = Depends(get_db),
    current_user: dict = Depends(get_current_user)
):
    user = db.query(User).filter(
        User.email == current_user["sub"]
    ).first()

    purchases = db.query(Purchase).filter(
        Purchase.user_id == user.id
    ).all()

    return purchases