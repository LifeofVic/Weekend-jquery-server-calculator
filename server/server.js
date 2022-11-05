let express = require('expresss');
app = express();

const port = 5000;

let bodyParser = require('body-Parser');

let resultCompiler = [];

app.use(bodyParser.urlencoded({ extended: true }));

//will look in the 'public' folder for the files needed to display in the client side (DOM).
app.use(express.static('public'));

app.post('/result', (req,res) => {
	
})


















app.listen(port, () => {
	console.log('Listening on port: ', port);
});