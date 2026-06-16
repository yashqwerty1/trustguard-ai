# 🛡️ TrustGuard AI

> AI-Powered Identity Threat Detection & Risk Intelligence Platform

TrustGuard AI is an intelligent Security Operations Center (SOC) platform designed to detect, investigate, explain, and mitigate identity-based cyber threats in real time.

The platform combines AI-driven trust scoring, behavioral risk analysis, global threat intelligence, MITRE ATT&CK mapping, and executive security reporting into a single interactive dashboard.


LIVE PROJECT: https://trustguard-ai-hazel.vercel.app/
---

# 🚀 Problem Statement

Traditional authentication systems rely heavily on passwords, OTPs, and static rules.

Modern cyberattacks such as:

- Account Takeovers (ATO)
- Impossible Travel Attacks
- Recovery Fraud
- Credential Stuffing
- Password Spraying
- Device Spoofing

can bypass traditional security mechanisms.

TrustGuard AI introduces an adaptive Identity Trust Engine that continuously evaluates user behavior and risk signals before granting access.

---

# 🎯 Solution

TrustGuard AI analyzes multiple identity signals and generates:

- Identity Trust Scores
- AI-driven Security Decisions
- Behavioral Risk Assessments
- Real-time Threat Detection
- Automated Incident Investigations
- Executive Security Reporting

The platform helps security teams detect attacks before compromise occurs.

---

# ✨ Core Features

## 🧠 AI Identity Trust Engine

Calculates dynamic trust scores using:

- Device Intelligence
- Geolocation Analysis
- Behavioral Biometrics
- Login Patterns
- Historical Activity
- Risk Signals

### Trust Decisions

| Trust Score | Decision |
|------------|------------|
| 80-100 | ALLOW |
| 50-79 | OTP REQUIRED |
| 30-49 | MANUAL REVIEW |
| 0-29 | BLOCK |

---

## 🌍 Global Risk Intelligence

Interactive 3D Globe Visualization displaying:

- Login Origin
- Login Destination
- Travel Velocity
- Impossible Travel Detection
- Risk Score Analysis
- AI Decision Outcomes

---

## ⚔️ Attack Simulator

Simulate real-world identity attacks:

### Normal Login

- Trusted device
- Known location
- Low risk

### New Device Login

- Device fingerprint mismatch
- Additional verification required

### Impossible Travel

- Physically impossible location changes
- Account takeover indicators

### Recovery Fraud

- Suspicious password recovery attempts
- Identity mismatch detection

---

## 📊 AI Decision Engine

Provides explainable AI decisions including:

- Confidence Scores
- Risk Contributors
- Threat Attribution
- Decision Reasoning
- MITRE ATT&CK Mapping

---

## 🗺️ MITRE ATT&CK Integration

Threats are mapped against:

- T1078 - Valid Accounts
- T1098 - Account Manipulation
- T1110 - Credential Access

Helping SOC analysts understand attacker behavior.

---

## 🚨 Live Threat Feed

Real-time threat monitoring displaying:

- Severity Levels
- Threat Types
- Affected Users
- Investigation Access

---

## 🔔 Live Alert Notifications

Automatic SOC alerts for:

- Impossible Travel
- Recovery Fraud
- Device Anomalies
- Credential Abuse

---

## 🔍 Incident Investigation Center

Detailed threat investigation workflows including:

- Threat Analysis
- Risk Breakdown
- Device Intelligence
- Travel Analysis
- VPN Detection
- AI Recommendations

---

## 📄 Automated Investigation Reports

Generate downloadable incident reports containing:

- Incident ID
- Threat Information
- Risk Scores
- AI Decisions
- Risk Contributors
- Fraud Prevention Impact

---

## 👤 User Risk Profiles

Analyze user-level risk posture:

- Trust Scores
- Known Devices
- Login History
- Previous Incidents
- AI Recommendations

---

## 🤖 AI Security Copilot

Built-in AI assistant that provides:

- Threat Summaries
- Investigation Guidance
- Security Recommendations
- Context-Aware Analysis

---

## 📈 Trust Score Analytics

Track trust evolution over time through:

- Historical Trends
- Identity Risk Changes
- Threat Impact Analysis

---

## 📊 Threat Distribution Dashboard

Visual threat analytics for:

- High Risk Events
- Medium Risk Events
- Low Risk Events

---

## 💼 Executive Board View

CISO-level dashboard displaying:

- Total Incidents
- Fraud Prevented
- Security ROI
- Risk Trends
- Business Impact Metrics

---

# 🏗️ Architecture

```text
User Activity
      │
      ▼
Identity Trust Engine
      │
      ▼
Risk Analysis Layer
      │
      ▼
AI Decision Engine
      │
      ├────────► ALLOW
      ├────────► OTP REQUIRED
      ├────────► MANUAL REVIEW
      └────────► BLOCK
      │
      ▼
SOC Dashboard
      │
      ▼
Investigation & Reporting
```

# 🛠️ Technology Stack

## Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- Three.js
- React Globe GL

## Backend

- FastAPI
- Python
- SQLite

## Security Frameworks

- MITRE ATT&CK
- Identity Risk Analytics
- Behavioral Security Models

---

# 📸 Platform Modules

### Security Operations Center

- Identity Trust Core
- Global Risk Intelligence
- AI Decision Engine
- Threat Feed

### Investigation

- Incident Investigation Drawer
- User Risk Profiles
- AI Copilot

### Executive

- Executive Board View
- Security Metrics
- Fraud Prevention Analytics

---

# 💰 Business Impact

TrustGuard AI demonstrates how AI-driven identity security can:

- Reduce Account Takeovers
- Prevent Fraud Losses
- Improve User Experience
- Minimize False Positives
- Accelerate Security Investigations

Example simulated fraud prevention:

| Attack Type | Fraud Prevented |
|------------|------------|
| New Device Login | ₹25,000 |
| Impossible Travel | ₹8,50,000 |
| Recovery Fraud | ₹10,00,000 |

---

# 🚀 Running Locally

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/trustguard-ai.git
```

```bash
cd trustguard-ai
```

---

## Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend:

```text
http://localhost:3000
```

---

## Backend

```bash
cd backend
pip install -r requirements.txt
```

```bash
uvicorn main:app --reload
```

Backend:

```text
http://localhost:8000
```

---

# 🎬 Demo Flow

**1. Launch Security Center**


<img width="1920" height="931" alt="image" src="https://github.com/user-attachments/assets/51ceca2b-9ab4-4fa5-8d2e-f91405507317" />

   
**2. Login to Platform**


<img width="1920" height="930" alt="image" src="https://github.com/user-attachments/assets/e65ac6d6-558f-4051-8630-845f40d98ef8" />


**NOTE :Just press Login or lauch DEMO Enviroment (Do not enter any other Credentials it wont work.)**

   
**3. View Identity Trust Dashboard**

<img width="1920" height="932" alt="image" src="https://github.com/user-attachments/assets/ba97695f-5da6-4075-a31b-a31d0ea94e35" />


<img width="1920" height="931" alt="image" src="https://github.com/user-attachments/assets/5b392b51-789e-4dcd-a7e6-45488a57a8df" />

   
**4. Simulate Attack Scenarios**

<img width="1920" height="930" alt="image" src="https://github.com/user-attachments/assets/57d1c9a9-cb6f-4f7d-8e0f-5b7b1d825a36" />


**5. Observe Trust Score Changes**


<img width="1861" height="626" alt="image" src="https://github.com/user-attachments/assets/48c09099-25e2-401d-bdfb-93da524d0302" />


<img width="929" height="487" alt="image" src="https://github.com/user-attachments/assets/bc660973-42f8-4c5d-bdb7-09e730028f6a" />

   
**6. Analyze AI Decisions**

<img width="906" height="930" alt="image" src="https://github.com/user-attachments/assets/f45a6194-43d2-4d94-b843-1b97a80a99c8" />


**7. Open Investigation Center**

<img width="1884" height="931" alt="image" src="https://github.com/user-attachments/assets/b5f5746a-c5d6-4571-9b9a-3cd31298f909" />


**8. Generate Investigation Report**

<img width="1884" height="984" alt="image" src="https://github.com/user-attachments/assets/d6fbc824-32d8-4dc4-86c0-cae24fba519e" />

**9. View User Risk Profiles**

<img width="564" height="930" alt="image" src="https://github.com/user-attachments/assets/63eb58fe-8797-4e2c-b047-e5cc9bc971a4" />

**NOTE: Click on Any Email in the "Live Threat Feed" to access this.**
    
**10. Present Executive Board View**

<img width="1920" height="932" alt="image" src="https://github.com/user-attachments/assets/3d572e10-f01f-4067-bff1-d83599f44fcf" />


---

# 🌟 Future Enhancements

- Real LLM Integration
- SIEM Integration
- Threat Intelligence Feeds
- Adaptive MFA
- Risk-Based Authentication
- Fraud Detection Models
- SOC Automation Playbooks
- Multi-Tenant Enterprise Support

---

# 👨‍💻 Author

**Yash Upadhye**

Data Science | AI/ML | Cybersecurity | Identity Security

- LinkedIn: https://www.linkedin.com/in/yash-upadhye-440778188
- GitHub: https://github.com/yashqwerty1

---

# 🏆 Hackathon Project

TrustGuard AI was developed as an AI-powered cybersecurity and identity protection platform demonstrating next-generation Identity Threat Detection, Risk Intelligence, and Security Operations automation.
