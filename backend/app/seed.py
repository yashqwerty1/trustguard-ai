from .database import SessionLocal
from .models import User

db = SessionLocal()

user = User(
    name="Yash",
    email="yash@test.com",
    trust_score=95,
    risk_level="LOW"
)

db.add(user)
db.commit()

print("User Added")