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
def test_login_user():

    response = client.post(
        "/api/auth/login",
        json={
            "email": "rikita@example.com",
            "password": "password123"
        }
    )

    assert response.status_code == 200

    data = response.json()

    assert "access_token" in data
    assert data["token_type"] == "bearer"   