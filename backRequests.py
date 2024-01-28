from flask import Flask, request
from flask import jsonify, json
from googleapiclient import discovery
from PIL import Image, ImageDraw, ImageFont
import textwrap
import csv


app = Flask(__name__)

API_KEY = 'AIzaSyAUmBLtiJOelw6Dh3wdH3D6pp1-_Naz1R4'

client = discovery.build( #Service Object Creation
  "commentanalyzer", #API NAME
  "v1alpha1",
  developerKey=API_KEY,
  discoveryServiceUrl="https://commentanalyzer.googleapis.com/$discovery/rest?version=v1alpha1",
  static_discovery=False,
)

def update_csv():
    data = request.json  # assuming JSON data is sent in the request body
    print(data)
    inputText = data['name']
    inputText = inputText.replace("\n", "")
    print(inputText)
    write_data_to_csv(inputText)
    return ('Data successfully written to CSV', 200) 

def write_data_to_csv(data):
    with open('confessions.csv', 'a', newline='') as csvfile:
        print(type(data))
        writer = csv.writer(csvfile)
        writer.writerow([data])

def create_image_with_text(text, image_width, image_height, margin, counter, font_size=50):
    # Create an image with background
    background_color = (34, 152, 211)
    img = Image.new("RGB", (image_width, image_height), background_color)
    draw = ImageDraw.Draw(img)

    # Load a font
    my_font = ImageFont.truetype("arial.ttf", font_size)

    # Add counter
    draw.text((10, 10), f"{counter}", font=my_font, fill=(5, 44, 143))

    # Add name of app
    draw.text((210, 150), "ZOT Confessions", font=my_font, fill=(5, 44, 143))

    # Wrap text and adjust font size dynamically
    wrapped_text = textwrap.fill(text, width=50)
    lines = wrapped_text.split('\n')

    y = (image_height - draw.textbbox((0, 0), lines[0], font=my_font)[1] * len(lines)) // 2

    for line in lines:
        # Calculate text size to fit within the image width
        while draw.textbbox((0, 0), line, font=my_font)[2] > (image_width - 2 * margin):
            font_size -= 2
            my_font = ImageFont.truetype("arial.ttf", font_size)

        # Calculate text position to center it within the image
        text_bbox = draw.textbbox((0, 0), line, font=my_font)
        x = (image_width - (text_bbox[2] - text_bbox[0])) // 2

        # Draw the text on the image
        text_color = (243, 243, 31)
        draw.text((x, y), line, font=my_font, fill=text_color)

        # Move the y-coordinate down for the next line
        y += text_bbox[3] - text_bbox[0]

    # Save or display the image
    img.save("text_image.png")
    img.show()

def save(counter, text):
    try:
        with open("data.json", "r") as file:
            data = json.load(file)
            data[counter] = text
    except FileNotFoundError:
        open("data.json", "x")
        data = {counter: text}
    with open("data.json", "w") as file:
        json.dump(data, file, indent=4)


@app.route('/', methods = ["GET", "POST"]) #get request is for the actual website, post request is for inputs
def getInfo():
    if request.method == "GET":
        return jsonify({'Hello' : 'World'})
    elif request.method == "POST":  
        info = request.get_json()
        print(update_csv())
        counter = 1
        userInput = info['name']      
        analyze_request = {
          'comment': { 'text': userInput },
          'requestedAttributes': 
          {'THREAT': {}, 
          'TOXICITY': {}}
        }

        response = client.comments().analyze(body=analyze_request).execute()
        prob1 = response["attributeScores"]["TOXICITY"]["spanScores"][0]["score"]["value"]
        prob2 = response["attributeScores"]["THREAT"]["spanScores"][0]["score"]["value"]

        if prob1 < 0.8765: #this statement checks if there is a high probability that the statement matches the attribute
            print("Toxicity:", prob1) #if it the probability is high enough, the comment will not be added
            print("Threat:" , prob2)
            # Image dimensions and margin
            image_width = 800
            image_height = 600
            margin = 40

            create_image_with_text(userInput, image_width, image_height, margin, counter)
            save(counter, userInput)
        else:
            print("Toxicity:" , prob1) #otherwise, if the probability does not meet the threshold, then the comment should be added to our database.
            print("Threat:" , prob2)
            print("Too Inapproriate!")
        print(json.dumps(response, indent=2))

        
        return info



if __name__ == "__main__":
    app.run(debug=True)

# python -m flask --app backRequests run | to run dev server
# python backRequests.py
# C:\Users\imasi\Downloads\ngrok-v3-stable-windows-amd64\ngrok.exe http 5000 | to run main server
# remember to change server url code