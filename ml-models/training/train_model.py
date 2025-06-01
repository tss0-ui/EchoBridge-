import tensorflow as tf
from model_architecture import build_model
import numpy as np
import os
import cv2

IMG_SIZE = 64
DATA_DIR = '../data/collected_data'
labels = os.listdir(DATA_DIR)
label_map = {label: idx for idx, label in enumerate(labels)}

X, y = [], []
for label in labels:
    for img_file in os.listdir(os.path.join(DATA_DIR, label)):
        img_path = os.path.join(DATA_DIR, label, img_file)
        img = cv2.imread(img_path)
        img = cv2.resize(img, (IMG_SIZE, IMG_SIZE))
        X.append(img)
        y.append(label_map[label])

X = np.array(X) / 255.0
y = np.array(y)

model = build_model((IMG_SIZE, IMG_SIZE, 3), len(labels))
model.fit(X, y, epochs=10, validation_split=0.1)
model.save('gesture_model.h5')
