const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const Palindrome = require('./src/Palindrome');
const Files = require('./src/SaveFile');

app.use(express.static(__dirname));

app.get('/', function (req, res) {
	res.render('index.html');
});

app.get('/api/getScores', function (req, res) {
	const scores = Files().ReadScores();
	const sortedScores = scores.sort((a, b) => b.points - a.points).splice(0, 5);

	res.json(sortedScores);
});

app.post('/api/submitEntry', function (req, res) {
	const { name, word } = req.body;
	const { length, isValid } = Palindrome(word).validate();
	if (isValid) {
		Files().SaveScores({ name: name, points: length });
	}
	res.json(length);
});


var port = 3000;
app.listen(port, function () {
	console.log('Server', process.pid, 'listening on port', port);
});
