from flask import Flask
from flask import render_template
app = Flask(__name__)
@app.route("/")
def home():
	return  render_template("home.html")
@app.route('/favicon.ico')
def favicon():
    return app.send_static_file('favicon.ico')
@app.route("/<ip>")
def search(ip):
   print(ip)
   return render_template("search.html", prompt=ip)
app.run()