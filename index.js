const express = require('express');
var cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
	res.send('Wow! I am Learning Node with express');
});

const users = [
	{
		id: 1,
		name: 'shahriar',
		email: 'rahi@gmail.com',
		phone: '012346789',
	},
	{
		id: 2,
		name: 'shahriar2',
		email: 'rahi2@gmail.com',
		phone: '01444346789',
	},
	{
		id: 3,
		name: 'shahriar3',
		email: 'rahi3@gmail.com',
		phone: '0123446789',
	},
	{
		id: 4,
		name: 'shahriar4',
		email: 'rahi4@gmail.com',
		phone: '0123456789',
	},
	{
		id: 5,
		name: 'shahriar5',
		email: 'rahi5@gmail.com',
		phone: '012546789',
	},
	{
		id: 6,
		name: 'abid',
		email: 'abid@gmail.com',
		phone: '012546789',
	},
	{
		id: 7,
		name: 'nehal',
		email: 'nehal@gmail.com',
		phone: '012546789',
	},
	{
		id: 8,
		name: 'razu',
		email: 'razu@gmail.com',
		phone: '012546789',
	},
	{
		id: 9,
		name: 'roni',
		email: 'roni@gmail.com',
		phone: '012546789',
	},
];

app.get('/users', (req, res) => {
	const search = req.query.search;
	if (search) {
		const searchResult = users.filter((user) =>
			user.name.toLocaleLowerCase().includes(search)
		);
		res.send(searchResult);
	} else {
		res.send(users);
	}
});

app.post('/users', (req, res) => {
	console.log('hitting the post', req.body);

	const newUser = req.body;
	newUser.id = users.length + 1;
	users.push(newUser);

	res.json(newUser);
});

app.get('/users/:id', (req, res) => {
	const index = req.params.id;
	const user = users[index - 1] || 'Not Found ';
	// console.log(req.params.id);
	res.send(user);
});

app.get('/fruits', (req, res) => {
	res.send(['mangoes', 'oranges', 'banana', 'apple']);
});

app.get('/fruits/mangoes/fazli', (req, res) => {
	res.send('Yummy Yammy tok marka fazli');
});

app.listen(port, () => {
	console.log('listening to port', port);
});
