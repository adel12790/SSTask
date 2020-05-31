const fs = require('fs');

function Files() {
    function SaveScores(score) {
        let scores = ReadScores();
        scores.push(score);

        fs.writeFileSync('./src/files/scores.json', JSON.stringify({ scores: scores }));
        return true;
    }

    function ReadScores() {
        let rawData = fs.readFileSync('./src/files/scores.json');
        let scores = JSON.parse(rawData).scores;
        return scores;
    }

    return { SaveScores, ReadScores };
}

module.exports = Files;