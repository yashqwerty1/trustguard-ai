from pydantic import BaseModel


class AnalyzeRequest(BaseModel):
    user_id: int
    login_hour: int
    device_changed: bool
    location_changed: bool
    browser_changed: bool
    failed_logins: int
    recovery_attempt: bool
    session_duration: int


class AnalyzeResponse(BaseModel):
    trust_score: int
    risk_score: int
    decision: str


class ThreatResponse(BaseModel):
    type: str
    severity: str