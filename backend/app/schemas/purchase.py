from pydantic import BaseModel


class PurchaseResponse(BaseModel):
    id: int
    vehicle_id: int
    user_id: int

    class Config:
        from_attributes = True