from fastapi import APIRouter

from .schemas import AnalyzeRequest
from .risk_engine import calculate_risk
from .mock_data import threats
from .anomaly_detector import detect_anomaly

router = APIRouter()


@router.get("/health")
def health_check():
    return {
        "status": "healthy"
    }


@router.get("/dashboard")
def dashboard():

    return {
    "trust_score": 92,
    "risk_level": "LOW",
    "active_threats": 4,
    "trusted_devices": 3,
    "decision": "ALLOW"
}


@router.get("/threats")
def get_threats():
    return threats


@router.post("/analyze")
def analyze_user(data: AnalyzeRequest):

    result = calculate_risk(data)

    return result

@router.post("/anomaly")

def anomaly_check():

    sample = [
        2,
        1,
        1,
        8,
        15
    ]

    result = detect_anomaly(sample)

    return {
        "prediction": int(result)
    }