import oldFifaData from './fifaData.json';

const fifaData = [];
const fifaDataByYear = {};
const fifaDataByStadium = {};

oldFifaData.forEach((match) => {
    fifaData.push({
        "cityName": match.cityName,
        "countryName":match.countryName,
        "keyId": match.keyId,
        "matchDate": match.matchDate,
        "score": match.score,
        "stadium": match.stadiumName,
        "tournamentYear": match.tournamentId,
        "matchName": match.matchName
    });

    if (fifaDataByYear[match.tournamentId]) {
        fifaDataByYear[match.tournamentId].push({
            "keyId": match.keyId,
            "cityName": match.cityName,
            "countryName":match.countryName,
            "matchDate": match.matchDate,
            "score": match.score,
            "stadium": match.stadiumName,
            "tournamentYear": match.tournamentId,
            "matchName": match.matchName
        });
    } else {
        fifaDataByYear[match.tournamentId] = [{
            "keyId": match.keyId,
            "cityName": match.cityName,
            "matchDate": match.matchDate,
            "countryName":match.countryName,
            "score": match.score,
            "stadium": match.stadiumName,
            "tournamentYear": match.tournamentId,
            "matchName": match.matchName
        }];
    }

    if (fifaDataByStadium[match.stadiumName]) {
        fifaDataByStadium[match.stadiumName].push({
            "keyId": match.keyId,
            "matchDate": match.matchDate,
            "countryName":match.countryName,
            "cityName": match.cityName,
            "score": match.score,
            "stadium": match.stadiumName,
            "tournamentYear": match.tournamentId,
            "matchName": match.matchName
        });
    } else {
        fifaDataByStadium[match.stadiumName] = [{
            "keyId": match.keyId,
            "matchDate": match.matchDate,
            "countryName":match.countryName,
            "cityName": match.cityName,
            "score": match.score,
            "stadium": match.stadiumName,
            "tournamentYear": match.tournamentId,
            "matchName": match.matchName
        }];
    }
});

export { fifaData, fifaDataByYear, fifaDataByStadium };
