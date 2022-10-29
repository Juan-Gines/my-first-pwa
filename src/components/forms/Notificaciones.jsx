import React, { useState, useRef } from 'react';

import axios from 'axios';

const Notificaciones = () => {
	const titleRef = useRef('');
	const messageRef = useRef('');

	const onSubmit = async (e) => {
		e.preventDefault();
		const newNotification = {
			title: titleRef.current.value,
			message: messageRef.current.value,
		};
		await axios.post('http://localhost:8000/notification', newNotification);
	};
	return (
		<form onSubmit={onSubmit}>
			<h1>** Formulario crear Notificaciones **</h1>
			<input
				type='text'
				ref={titleRef}
				placeholder='Título'
			/>
			<input
				type='text'
				ref={messageRef}
				placeholder='Mensaje'
			/>
			<button type='submit'>Enviar notificación</button>
		</form>
	);
};

export default Notificaciones;
