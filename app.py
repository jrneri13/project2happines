import numpy as np
from flask import Flask, render_template, json, jsonify, Response, request
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

#home route for HTML template
@app.route('/')
def home():
    return render_template('map.html')

#provisional welcome page
# @app.route('/')
# def welcome():
#     return(
#         f'available Routes:<br/>'
#         f'/country<br/>'
#         f'/country/scores<br/>'
#         f'/countryRank<br/>'
#         f'/geoData<br/>'
#         f'/economy<br/>'
#         f'/family<br/>'
#         f'/freedom<br/>'
#         f'/economy<br/>'
#         f'/health<br/>'
#         f'/corruption'

#     )

#route for country list
@app.route('/country')
def country():
    results = session.query(happinessData.Country).all()

    all_countries = list(np.ravel(results))
    return jsonify(all_countries)

#Main Route
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
        countries_dic['rank'] = country.Rank
        countries_dic['country_code'] = country.CountryCode
        countries_dic['latitude'] = country.Latitude
        countries_dic['longitude'] = country.Longitude
        all_country_scores.append(countries_dic)
    return jsonify(all_country_scores)

#route for country rank
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

#bar chart routes
@app.route('/economy')
def economy():
    results = session.query(happinessData).all()

    economy_rank = []
    for country in results:
        economy_dic ={}
        economy_dic['country'] = country.Country
        economy_dic['gdp_score'] = country.GDP
        economy_rank.append(economy_dic)
    return jsonify(economy_rank) 

@app.route('/family')
def family():
    results = session.query(happinessData).all()

    family_rank = []
    for country in results:
        family_dic ={}
        family_dic['country'] = country.Country
        family_dic['family_score'] = country.Family
        family_rank.append(family_dic)
    return jsonify(family_rank)

@app.route('/health')
def health():
    results = session.query(happinessData).all()

    health_rank = []
    for country in results:
        health_dic ={}
        health_dic['country'] = country.Country
        health_dic['health_score'] = country.LifeExpectancy 
        health_rank.append(health_dic)
    return jsonify(health_rank)

@app.route('/freedom')
def freedom():
    results = session.query(happinessData).all()

    freedom_rank = []
    for country in results:
        freedom_dic ={}
        freedom_dic['country'] = country.Country
        freedom_dic['freedom_score'] = country.Freedom
        freedom_rank.append(freedom_dic)
    return jsonify(freedom_rank)

@app.route('/corruption')
def corruption():
    results = session.query(happinessData).all()

    corruption_rank = []
    for country in results:
        corruption_dic ={}
        corruption_dic['country'] = country.Country
        corruption_dic['corruption_score'] = country.Trust
        corruption_rank.append(corruption_dic)
    return jsonify(corruption_rank)

#Map route with geo data
@app.route('/geoData')
def geoData():
    results = session.query(happinessData).all()

    geoData = []
    for country in results:
        geoData_dic ={}
        geoData_dic['country'] = country.Country
        geoData_dic['country_code'] = country.CountryCode
        geoData_dic['latitude'] = country.Latitude
        geoData_dic['longitude'] = country.Longitude
        geoData.append(geoData_dic)
    return jsonify(geoData)

#blank routes
@app.route('/addMapData')
def addMapData():
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
        countries_dic['rank'] = country.Rank
        countries_dic['country_code'] = country.CountryCode
        countries_dic['latitude'] = country.Latitude
        countries_dic['longitude'] = country.Longitude
        all_country_scores.append(countries_dic)
    return jsonify(all_country_scores)

@app.route('/addMapData2')
def addMapData2():
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
        countries_dic['rank'] = country.Rank
        countries_dic['country_code'] = country.CountryCode
        countries_dic['latitude'] = country.Latitude
        countries_dic['longitude'] = country.Longitude
        all_country_scores.append(countries_dic)
    return jsonify(all_country_scores)

if __name__ == '__main__':
    app.run(debug=True)
