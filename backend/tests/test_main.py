from app.main import app
from fastapi.testclient import TestClient

client = TestClient(app)

def test_health_check():
    response = client.get("/api/health")
    assert response.status_code == 200
    assert response.json() == {
        "status": "healthy",
        "message": "Backend is running successfully"
    }

def test_get_message():
    response = client.get("/api/message")
    assert response.status_code == 200
    assert response.json()["message"] == "You've successfully integrated the backend!"
