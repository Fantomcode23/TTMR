from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def aadhar_verification():
    return render_template("fantamcode.html")

@app.route("/symptoms", methods=["GET", "POST"])
def symptoms():
    if request.method == "GET":
        return render_template("fc.html")
    else:
        fever_severity = request.form["dropdown1"]
        cough_severity = request.form["dropdown2"]
        breathing_severity = request.form["dropdown3"]

        moderate_count = 0
        severe_count = 0

        if fever_severity == "moderate":
            moderate_count += 1
        elif fever_severity == "severe":
            severe_count += 1

        if cough_severity == "moderate":
            moderate_count += 1
        elif cough_severity == "severe":
            severe_count += 1

        if breathing_severity == "moderate":
            moderate_count += 1
        elif breathing_severity == "severe":
            severe_count += 1

        if moderate_count >= 2 and severe_count == 0:
            return render_template("fc1.html")
        elif severe_count >= 2:
            return render_template("fc2.html")
        else:
            return """
            <p>Thank you for using Nan Vaithiyan. Based on your symptoms, it appears you may not require immediate medical attention. Please continue monitoring your condition and consult a doctor if necessary.</p>
            """

@app.route("/prescription")
def prescription():
    return render_template("fc1.html")

@app.route("/doctor_connect")
def doctor_connect():
    return render_template("fc2.html")

if __name__ == "__main__":
    app.run(debug=True)
