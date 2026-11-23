import spacy

nlp = spacy.load("en_core_web_sm")

doc =nlp("Merrily we roll along, roll along, roll along")

for token in doc:
    print(token.text)