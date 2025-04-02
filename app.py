from flask import Flask, request, jsonify
import joblib  # Or pickle, depending on how you saved your model

app = Flask(__name__)
model = joblib.load('model.pkl')  # Load your ML model

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        features = data['features']
        prediction = model.predict([features])
        return jsonify({'prediction': prediction.tolist()})
    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    #Do not use debug=true in production.
    app.run(debug=False)
