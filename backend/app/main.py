from fastapi import FastAPI

from app.database import Base, engine
from app.models import user, vehicle
from app.routes.auth_routes import router as auth_router
from app.routes import vehicle_routes

#Look at all SQLAlchemy models and create their tables in the database
Base.metadata.create_all(bind=engine)


app = FastAPI(
    title="Car Dealership Inventory API"
)

#Without this, FastAPI doesn't know your registration endpoint exists.
app.include_router(auth_router)
app.include_router(vehicle_routes.router)

@app.get("/")
def home():
    return {
        "message": "Car Dealership Inventory API"
    }