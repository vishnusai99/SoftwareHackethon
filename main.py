
# server.py
import pandas as pd
from flask import Flask, jsonify, request
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

app = Flask(__name__)

courses_data = pd.read_csv('Coursera.csv')
# Feature extraction using TF-IDF Vectorizer for course descriptions
tfidf_vectorizer = TfidfVectorizer(stop_words='english')
tfidf_matrix_description = tfidf_vectorizer.fit_transform(courses_data['Skills'])
# Modify the recommend function to accept parameters
def recommend(keywords,course_level,):
    query = ' '.join(keywords)
    print(query)
    query_vector = tfidf_vectorizer.transform([query])
    similarity_scores = cosine_similarity(query_vector, tfidf_matrix_description).flatten()

    # Get indices of top recommendations
    top_indices = similarity_scores.argsort()

    # Extract recommended course names
    recommended_courses = []
    for index in top_indices:
        row = courses_data.loc[index]
        course_level_match = courses_data.loc[index, 'Difficulty Level'] == course_level

        if course_level_match:
            recommended_courses.append(row.to_dict())
    recommended_courses = recommended_courses[-7:-1]
    
    # print(len(k),len(courses_data))
    # Filter recommendations based on course level
    # print(len(recommended_courses),'second')
    # if course_level:
    #     recommended_courses = list(filter(lambda x:courses_data[]['Difficulty Level'] == course_level, recommended_courses))

    # Filter recommendations based on course duration
    # if course_duration:
    #     # Assuming course duration is given in hours, you can modify this based on your data
    #     max_duration = int(course_duration)
    #     recommended_courses = courses_data[courses_data[''] <= max_duration]['Course Name'].tolist()

    # Calculate weighted similarity based on different features
    
    # TF-IDF similarity based on course descriptions

    return recommended_courses

@app.route('/recommendation', methods=['POST'])
def get_recommendation():
    data = request.get_json()
    keywords = data.get('keywords', '')
    course_level = data.get('course_level', '')  # Add course level to the payload
    print(keywords)
    # course_duration = data.get('course_duration', '')  # Add course duration to the payload
    recommended_courses = recommend(keywords,course_level)
    return jsonify({'recommendations': recommended_courses})


if __name__ == '__main__':
    app.run(port=5000)
