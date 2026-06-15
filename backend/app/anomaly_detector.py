import numpy as np

from sklearn.ensemble import IsolationForest


model = IsolationForest(
    contamination=0.1,
    random_state=42
)

X_train = np.array([
    [10,0,0,0,20],
    [12,0,0,1,30],
    [15,0,1,0,25],
    [18,0,0,0,40],
    [20,0,0,0,35]
])

model.fit(X_train)


def detect_anomaly(features):

    prediction = model.predict([features])

    return prediction[0]