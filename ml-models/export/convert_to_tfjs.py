import tensorflowjs as tfjs
import tensorflow as tf

model = tf.keras.models.load_model('gesture_model.h5')
tfjs.converters.save_keras_model(model, './sign-gesture-model')
