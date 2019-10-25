// import + inisialisasi
let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let app = express();

let apiRoutes = require('./apiRoutes');
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

app.use(bodyParser.json());
mongoose.connect('mongodb://localhost/restAPI', {
	useNewUrlParser: true,
});
var db = mongoose.connection;

if (!db) console.log('Error connecting db');
else console.log('Db connected successfully');

mongoose.connect('mongodb://localhost/restAPI');

app.get('/', (req, res) => res.send('Hello World with Express'));
app.use('/api', apiRoutes);

const port = 3000;
app.listen(port, () => console.log(`Localhost udah jalan di port ${port}`));
