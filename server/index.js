const express = require('express');
const cors = require('cors');
const webpush = require('web-push');

// Middlewares
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Constantes
const subscription = {
	endpoint:
		'https://fcm.googleapis.com/fcm/send/eorWIqlBYbk:APA91bE2faPeAWeESQXMgX-0XcljVfnST1II_32kKf6HmfPL6KwDB6e-cu0TOAR8HN0fwXqKKc7tWbbvWJWgoXtyajMIDRP7wpzw0ZbU1k7zSADRLk_1PudCU_lq9qwCM8QZBoDWGN0r',
	expirationTime: null,
	keys: {
		p256dh:
			'BEXHcmrj70o_dz0qf4DaAHAf95So2wAFT4sS6WzWDKoIzoif1sNYRNU_VSpHkKEoXTlb4cm24jU7ZOiJg2cLUc8',
		auth: '4O1mJClenNgeNNoF8yMG5g',
	},
};

const vapidkeys = {
	publicKey:
		'BF1iaRzBXo-m-NN2S5EvnD6B12BmoxRd1EktAPmskL7ftU_gCP69aoYEEbd7VIzgAq1vatfTchuswlzNLoJGG_w',
	privateKey: 'qt6MvoPMXl4Q_vPNQzj498c6s7UDC2xr2L4Eusyaokk',
};

webpush.setVapidDetails('mailto:juangalenta@mail.org', vapidkeys.publicKey, vapidkeys.privateKey);

// Routes
app.get('/', (req, res) => {
	//res.sendStatus(200).json();
	const payload = JSON.stringify({
		title: 'Título de Notificación',
		message: 'Mensaje de la Notificación',
	});
	webpush.sendNotification(subscription, payload);
	res.send('Enviado');
});

app.post('/subscription', (req, res) => {
	console.log(req.body);
	const { pushSubscription } = req.body;
	console.log(pushSubscription);
	res.sendStatus(200);
});

app.post('/notification', (req, res) => {
	const payload = JSON.stringify(req.body);
	webpush.sendNotification(subscription, payload);
	res.send('Todo ok, custom notification enviada');
});

app.listen(8000, () => console.log('Server listening on port 8000'));
