from fastapi import FastAPI

#creates the application 
app = FastAPI() 


@app.get("/")
def home():
    return {
        "message": "Car Dealership Inventory API"
    }