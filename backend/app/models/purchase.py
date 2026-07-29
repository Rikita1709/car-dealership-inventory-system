from sqlalchemy import Column, Integer, ForeignKey

from app.database import Base


class Purchase(Base):
    __tablename__ = "purchases"

    id = Column(Integer, primary_key=True, index=True)

    vehicle_id = Column(Integer, ForeignKey("vehicles.id"))

    user_id = Column(Integer, ForeignKey("users.id"))