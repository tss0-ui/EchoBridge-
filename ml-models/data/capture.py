import cv2
import os

DATA_DIR = './collected_data'
GESTURES = ['hello', 'yes', 'no', 'thanks', 'love']
NUM_SAMPLES = 300

for gesture in GESTURES:
    os.makedirs(os.path.join(DATA_DIR, gesture), exist_ok=True)

cap = cv2.VideoCapture(0)
for gesture in GESTURES:
    print(f"Capturing {gesture}...")
    for i in range(NUM_SAMPLES):
        ret, frame = cap.read()
        if not ret:
            continue
        img_path = os.path.join(DATA_DIR, gesture, f"{i}.jpg")
        cv2.imwrite(img_path, frame)
        cv2.imshow("Collecting", frame)
        if cv2.waitKey(1) == ord('q'):
            break
cap.release()
cv2.destroyAllWindows()
