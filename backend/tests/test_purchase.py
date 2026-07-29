from conftest import client


def test_purchase_history():

    # Register
    client.post(
        "/api/auth/register",
        json={
            "username": "admin",
            "email": "admin@example.com",
            "password": "password123"
        }
    )

    # Login
    login = client.post(
        "/api/auth/login",
        json={
            "email": "admin@example.com",
            "password": "password123"
        }
    )

    token = login.json()["access_token"]

    # Add Vehicle
    add_response = client.post(
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

    vehicle_id = add_response.json()["id"]

    # Purchase Vehicle
    client.post(
        f"/api/vehicles/{vehicle_id}/purchase",
        headers={
            "Authorization": f"Bearer {token}"
        }
    )

    # Get Purchase History
    response = client.get(
        "/api/purchases",
        headers={
            "Authorization": f"Bearer {token}"
        }
    )

    assert response.status_code == 200

    purchases = response.json()

    assert len(purchases) >= 1
    assert purchases[0]["vehicle_id"] == vehicle_id