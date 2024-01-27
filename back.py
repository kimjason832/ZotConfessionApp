from googleapiclient import discovery
import json

API_KEY = 'AIzaSyAUmBLtiJOelw6Dh3wdH3D6pp1-_Naz1R4'

client = discovery.build( #Service Object Creation
  "commentanalyzer", #API NAME
  "v1alpha1",
  developerKey=API_KEY,
  discoveryServiceUrl="https://commentanalyzer.googleapis.com/$discovery/rest?version=v1alpha1",
  static_discovery=False,
)
userInput = input('Confess your sins:')
analyze_request = {
  'comment': { 'text': userInput },
  'requestedAttributes': 
  {'PROFANITY': {}, 
   'TOXICITY': {}}
}

response = client.comments().analyze(body=analyze_request).execute()
prob1 = response["attributeScores"]["TOXICITY"]["spanScores"][0]["score"]["value"]
prob2 = response["attributeScores"]["PROFANITY"]["spanScores"][0]["score"]["value"]

if prob1 > 0.9: #this statement checks if there is a high probability that the statement matches the attribute
    print(prob1) #if it the probability is high enough, the comment will not be added
    print("scrap")    #this indicates that the comment would most likely break guidelines we set
else:
    print(prob1) #otherwise, if the probability does not meet the threshold, then the comment should be added to our database.
    print("leave in")
print(json.dumps(response, indent=2))