import express from 'express';
import { engine } from 'express-handlebars';

const app = express();

app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', 'views');
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.render('index', {
		layout: 'default',
		title: 'Головна',
		active_home: true,
	});
});

app.get('/express', (req, res) => {
	res.render('express', {
		layout: 'default',
		title: 'Про Express',
		active_express: true,
	});
});

app.get('/graphics', (req, res) => {
	res.render('graphics', {
		layout: 'default',
		title: 'Про графіку',
		active_graphics: true,
	});
});


app.get('/bootstrap', (req, res) => {
	res.render('bootstrap', {
		layout: 'default',
		title: 'Про Bootstrap',
		active_bootstrap: true,
	});
});


app.get('/about', (req, res) => {
	res.render('about', {
		layout: 'default',
		title: 'Про мене',
		active_about: true,
	});
});


let port = process.env.PORT || 8080;

app.listen(port, () => {
	console.log(`Listening on http://localhost:${port}`);
})


