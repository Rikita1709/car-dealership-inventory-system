from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database import Base, engine
from app.models import user, vehicle
from app.models.purchase import Purchase

from app.routes.auth_routes import router as auth_router
from app.routes import vehicle_routes
from app.routes import purchase_routes
from app.routes import dashboard_routes

# Create all database tables
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Car Dealership Inventory API"
)

# Allow React frontend to access the API
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register routes
app.include_router(auth_router)
app.include_router(vehicle_routes.router)
app.include_router(purchase_routes.router)
app.include_router(dashboard_routes.router)


@app.get("/")
def home():
    return {
        "message": "Car Dealership Inventory API"
    }