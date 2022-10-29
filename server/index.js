const express = require('express');
const cors = require('cors');
const webpush = require('web-push');

// Middlewares
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Constantes
const pushSubscription = {
	endpoint:
		'https://fcm.googleapis.com/fcm/send/eFJy0MSn9YY:APA91bHRSwSB-zJCaVylPO_n4E76SzBl0tj9B06WFsJnDUur4n6WFbBAXs0pQx2umKdW7Ewi4MpKNSelnH4gXuxodC6KWJiaNHQkRuLkziL8jarb6fnXHnwVsymH2hdps7sizVpwChM5',
	expirationTime: null,
	keys: {
		p256dh:
			'BC6IcVbOBfzb4Adr8x7k587XiMluqWec13-1PaQmHDy2pOxqM8J0Z3yi2FOpomFkVpvg9wRfIrxmze1yNoU3KcY',
		auth: 'MnEkKKv3leHR4wwH53CFaw',
	},
};

const vapidkeys = {
	publickey:
		'BHMmNWbYjqGuMC2hYSfnJKiP8QR2d6YFxRPo89bCSXcnpbBVI5c5iBEgWxmMC85EPo2dIshhmkSyO0JZHqLk2mw',
	privatekey: 'nJbqt3MtQznUdrj9fBVg_LhzqvHZg1ygxJMEs52tiQ4',
};

webpush.setVapidDetails('mailto:juangalenta@mail.org', vapidkeys.publickey, vapidkeys.privatekey);

// Routes
app.get('/', async (req, res) => {
	//res.sendStatus(200).json();
	const payload = JSON.stringify({
		title: 'Título de Notificación',
		message: 'Mensaje de la Notificación',
	});
	try {
		await webpush.sendNotification(pushSubscription, payload);
		await res.send('Enviado');
	} catch (e) {
		console.log(e);
	}
});

app.post('/subscription', (req, res) => {
	console.log(req.body);
	res.sendStatus(200).json();
});

app.post('/notification', async (req, res) => {
	console.log(req.body);
	const payload = JSON.stringify(req.body);
	try {
		await webpush.sendNotification(pushSubscription, payload);
		await res.send('Enviado');
	} catch (e) {
		console.log(e);
	}
});

app.listen(8000, () => console.log('Server listening on port 8000'));
