import numpy as np
from flask import Flask, render_template, jsonify
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

engine = create_engine('sqlite:///happinessdata.sqlite')
Base = automap_base()
Base.prepare(engine, reflect=True)

happinessData = Base.classes.happiness 

session = Session(engine)

app = Flask(__name__)

# @app.route('/')
# def home():
#     return render_template('index.htm')

@app.route('/')
def welcome():
    return(
        f'available Routes:<br/>'
        f'/country<br/>'
        f'/country/scores<br/>'
        f'/countryRank'
    )

@app.route('/country')
def country():
    results = session.query(happinessData.Country).all()

    all_countries = list(np.ravel(results))
    return jsonify(all_countries)

@app.route('/country/scores')
def countryScores():
    results = session.query(happinessData).all()

    all_country_scores = []
    for country in results:
        countries_dic = {}
        countries_dic['country'] = country.Country
        countries_dic['happiness_score'] = country.Score 
        countries_dic['GDP'] = country.GDP 
        countries_dic['Family'] = country.Family
        countries_dic['life_expectancy'] = country.LifeExpectancy 
        countries_dic['freedom'] = country.Freedom
        countries_dic['generosity'] = country.Generosity
        countries_dic['trust'] = country.Trust
        all_country_scores.append(countries_dic)
    return jsonify(all_country_scores)

@app.route('/countryRank')
def countryRank():
    results = session.query(happinessData).all()

    country_rank = []
    for country in results:
        ranking_dic = {}
        ranking_dic['country'] = country.Country
        ranking_dic['rank'] = country.Rank 
        ranking_dic['happiness_score']= country.Score 
        country_rank.append(ranking_dic)
    return jsonify(country_rank)





if __name__ == '__main__':
    app.run(debug=True)
