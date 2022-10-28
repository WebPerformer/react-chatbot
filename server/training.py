import nltk
from nltk.stem import WordNetLemmatizer

lemmatizer = WordNetLemmatizer()
import json
import pickle
import numpy as np
from keras.models import Sequential
from keras.layers import Dense, Activation, Dropout
from tensorflow.keras.optimizers import SGD
import random

words = []
classes = []
documents = []
ignore_words = ['?', '!']
data_file = open('data.json').read()
intents = json.loads(data_file)
for intent in intents['intents']:
    for pattern in intent['patterns']:
        #tokenizar cada palavra
        w = nltk.word_tokenize(pattern)
        words.extend(w)
        # adicionar documentos no corpus
        documents.append((w, intent['tag']))
        # adicionar à nossa lista de aulas
        if intent['tag'] not in classes:
            classes.append(intent['tag'])
# remova duplicatas
words = [lemmatizer.lemmatize(w.lower()) for w in words if w not in ignore_words]
words = sorted(list(set(words)))
# classificar classes
classes = sorted(list(set(classes)))
# combinação de documentos entre padrões e intenções
print(len(documents), "documents")

print(len(classes), "classes", classes)
# todas as palavras
print(len(words), "unique lemmatized words", words)
pickle.dump(words, open('texts.pkl', 'wb'))
pickle.dump(classes, open('labels.pkl', 'wb'))
# criar nossos dados de treinamento
training = []
# crie um array vazio para nossa saída
output_empty = [0] * len(classes)
# conjunto de treinamento, saco de palavras para cada frase
for doc in documents:
    # inicialize nosso pacote de palavras
    bag = []
    # lista de palavras tokenizadas para o padrão
    pattern_words = doc[0]

    pattern_words = [lemmatizer.lemmatize(word.lower()) for word in pattern_words]

    for w in words:
        bag.append(1) if w in pattern_words else bag.append(0)


    output_row = list(output_empty)
    output_row[classes.index(doc[1])] = 1

    training.append([bag, output_row])

random.shuffle(training)
training = np.array(training)

train_x = list(training[:, 0])
train_y = list(training[:, 1])
print("Training data created")

model = Sequential()
model.add(Dense(128, input_shape=(len(train_x[0]),), activation='relu'))
model.add(Dropout(0.5))
model.add(Dense(64, activation='relu'))
model.add(Dropout(0.5))
model.add(Dense(len(train_y[0]), activation='softmax'))

sgd = SGD(lr=0.01, decay=1e-6, momentum=0.9, nesterov=True)
model.compile(loss='categorical_crossentropy', optimizer=sgd, metrics=['accuracy'])
# ajustando e salvando o modelo
hist = model.fit(np.array(train_x), np.array(train_y), epochs=200, batch_size=5, verbose=1)
model.save('model.h5', hist)
print("model created")