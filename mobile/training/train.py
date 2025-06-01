import os
import yaml
import tensorflow as tf
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from tensorflow.keras.applications import MobileNetV2
from tensorflow.keras.models import Model
from tensorflow.keras.layers import Dense, GlobalAveragePooling2D
from tensorflow.keras.optimizers import Adam

# Load config
with open("config.yaml") as file:
    config = yaml.safe_load(file)

# Image augmentation
train_datagen = ImageDataGenerator(
    rescale=1./255,
    rotation_range=20 if config["augmentation"]["rotate"] else 0,
    zoom_range=0.2 if config["augmentation"]["zoom"] else 0,
    horizontal_flip=config["augmentation"]["flip"],
    validation_split=0.2
)

train_generator = train_datagen.flow_from_directory(
    config["dataset_path"],
    target_size=(config["image_size"], config["image_size"]),
    batch_size=config["batch_size"],
    class_mode='categorical',
    subset='training'
)

val_generator = train_datagen.flow_from_directory(
    config["dataset_path"],
    target_size=(config["image_size"], config["image_size"]),
    batch_size=config["batch_size"],
    class_mode='categorical',
    subset='validation'
)

# Load MobileNetV2 base
base_model = MobileNetV2(include_top=False, weights='imagenet', input_shape=(config["image_size"], config["image_size"], 3))
base_model.trainable = False

# Add classification head
x = base_model.output
x = GlobalAveragePooling2D()(x)
x = Dense(128, activation='relu')(x)
predictions = Dense(len(config["classes"]), activation='softmax')(x)

model = Model(inputs=base_model.input, outputs=predictions)
model.compile(optimizer=Adam(learning_rate=0.0001), loss='categorical_crossentropy', metrics=['accuracy'])

# Train the model
model.fit(train_generator, validation_data=val_generator, epochs=config["epochs"])

# Save the model
os.makedirs(config["model_output"], exist_ok=True)
model.save(config["model_output"])
