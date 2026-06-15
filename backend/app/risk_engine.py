def calculate_risk(data):

    risk_score = 0

    if data.device_changed:
        risk_score += 25

    if data.location_changed:
        risk_score += 25

    if data.browser_changed:
        risk_score += 10

    if data.failed_logins > 3:
        risk_score += 15

    if data.failed_logins > 5:
        risk_score += 15

    if data.recovery_attempt:
        risk_score += 20

    if data.login_hour <= 4:
        risk_score += 10

    if risk_score > 100:
        risk_score = 100

    trust_score = 100 - risk_score

    if risk_score <= 30:
        decision = "ALLOW"

    elif risk_score <= 70:
        decision = "OTP_REQUIRED"

    else:
        decision = "BLOCK"

    return {
        "risk_score": risk_score,
        "trust_score": trust_score,
        "decision": decision
    }