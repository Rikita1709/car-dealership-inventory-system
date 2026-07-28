from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_home():
    response = client.get("/")

    assert response.status_code == 200

    assert response.json() == {
        "message": "Car Dealership Inventory API"
    }
def test_register_user():
    response = client.post(
        "/api/auth/register",
        json={
            "username": "rikita",
            "email": "rikita@example.com",
            "password": "password123"
        }
    )

    assert response.status_code == 201   