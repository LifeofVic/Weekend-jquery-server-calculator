let express = require('expresss');
app = express();

const port = 5000;

let bodyParser = require('body-Parser');

app.use(bodyParser.urlencoded({ extended: true }));

//will look in the 'public' folder for the files needed to display in the client side (DOM).
app.use(express.static('public'));

app.get


















app.listen(port, () => {
	console.log('Listening on port: ', port);
});