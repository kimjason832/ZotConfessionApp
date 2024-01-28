from flask import Flask, request
from flask import jsonify, json
from googleapiclient import discovery
import json
import csv
import requests
from waitress import serve

#from flask import render_template

app = Flask(__name__)



def update_csv():
    # try:
    data = request.json  # assuming JSON data is sent in the request body
    print(data)
    inputText = data['name']
    inputText = inputText.replace("\n", "")
    print(inputText)
    
    write_data_to_csv(inputText)
    return ('Data successfully written to CSV', 200) 


def write_data_to_csv(data):
    with open('confessions.csv', 'a', newline='') as csvfile:
          # replace with your field names
        print(type(data))
        writer = csv.writer(csvfile)


        
        writer.writerow([data])


@app.route('/', methods = ["GET", "POST"]) #get request is for the actual website, post request is for inputs
def getInfo():
    if request.method == "GET":
        return jsonify({'Hello' : 'World'})
    elif request.method == "POST":
        print("hello")
        info = request.get_json()
        print(update_csv())
        return info



API_KEY = 'AIzaSyAUmBLtiJOelw6Dh3wdH3D6pp1-_Naz1R4'

client = discovery.build( #Service Object Creation
  "commentanalyzer", #API NAME
  "v1alpha1",
  developerKey=API_KEY,
  discoveryServiceUrl="https://commentanalyzer.googleapis.com/$discovery/rest?version=v1alpha1",
  static_discovery=False,
)



if __name__ == "__main__":
    app.run(debug=True)

# python -m flask --app zot run | to run dev server
# C:\Users\imasi\Downloads\ngrok-v3-stable-windows-amd64\ngrok.exe http 5000 | to run main server