from conftest import client


def test_dashboard():

    client.post(
        "/api/auth/register",
        json={
            "username": "admin",
            "email": "admin@example.com",
            "password": "password123"
        }
    )

    login = client.post(
        "/api/auth/login",
        json={
            "email": "admin@example.com",
            "password": "password123"
        }
    )

    token = login.json()["access_token"]

    client.post(
        "/api/vehicles",
        json={
            "make": "Toyota",
            "model": "Fortuner",
            "category": "SUV",
            "price": 45000,
            "quantity": 5
        },
        headers={
            "Authorization": f"Bearer {token}"
        }
    )

    response = client.get(
        "/api/dashboard",
        headers={
            "Authorization": f"Bearer {token}"
        }
    )

    assert response.status_code == 200

    data = response.json()

    assert data["total_vehicles"] == 1
    assert data["total_stock"] == 5
    assert data["total_value"] == 225000