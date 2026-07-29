from conftest import client


def test_add_vehicle():

    # Register a user
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

    response = client.post(
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

    assert response.status_code == 201
def test_get_all_vehicles():

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

    # Fetch Vehicles
    response = client.get(
        "/api/vehicles",
        headers={
            "Authorization": f"Bearer {token}"
        }
    )

    assert response.status_code == 200

    data = response.json()

    assert len(data) == 1

    assert data[0]["make"] == "Toyota"  
def test_search_vehicle():

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

    # Vehicle 1
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

    # Vehicle 2
    client.post(
        "/api/vehicles",
        json={
            "make": "Honda",
            "model": "City",
            "category": "Sedan",
            "price": 25000,
            "quantity": 10
        },
        headers={
            "Authorization": f"Bearer {token}"
        }
    )

    response = client.get(
        "/api/vehicles/search?make=Toyota",
        headers={
            "Authorization": f"Bearer {token}"
        }
    )

    assert response.status_code == 200

    data = response.json()

    assert len(data) == 1

    assert data[0]["make"] == "Toyota"    
def test_update_vehicle():

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

    # Add vehicle
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

    # Update vehicle
    response = client.put(
        f"/api/vehicles/{vehicle_id}",
        json={
            "make": "Toyota",
            "model": "Fortuner Legender",
            "category": "SUV",
            "price": 50000,
            "quantity": 8
        },
        headers={
            "Authorization": f"Bearer {token}"
        }
    )

    assert response.status_code == 200

    data = response.json()

    assert data["model"] == "Fortuner Legender"
    assert data["price"] == 50000
    assert data["quantity"] == 8  
def test_delete_vehicle():

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

    # Delete Vehicle
    response = client.delete(
        f"/api/vehicles/{vehicle_id}",
        headers={
            "Authorization": f"Bearer {token}"
        }
    )

    assert response.status_code == 200

    assert response.json() == {
        "message": "Vehicle deleted successfully"
    }  
def test_purchase_vehicle():

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

    # Purchase
    response = client.post(
        f"/api/vehicles/{vehicle_id}/purchase",
        headers={
            "Authorization": f"Bearer {token}"
        }
    )

    assert response.status_code == 200

    data = response.json()

    assert data["quantity"] == 4   
def test_restock_vehicle():

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

    # Restock
    response = client.put(
        f"/api/vehicles/{vehicle_id}/restock?quantity=10",
        headers={
            "Authorization": f"Bearer {token}"
        }
    )

    assert response.status_code == 200

    data = response.json()

    assert data["quantity"] == 15           