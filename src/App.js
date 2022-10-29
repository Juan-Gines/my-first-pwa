import React, { useState } from 'react';
import './App.css';
import Notificaciones from './components/forms/Notificaciones';

function App() {
	const [newItem, setNewItem] = useState('');
	const [items, setItems] = useState([]);

	const addNewItem = () => {
		setItems([...items, newItem]);
		setNewItem('');
	};
	return (
		<div className='App'>
			<header className='App-header'>
				<h1>** Proyecto PWA - Lista de la compra v5 **</h1>
				<input
					style={{ fontSize: 24 }}
					type='text'
					onKeyDown={(e) => e.key === 'Enter' && addNewItem()}
					onChange={(e) => setNewItem(e.target.value)}
					value={newItem}
				/>
				<button
					style={{ fontSize: 24 }}
					onClick={addNewItem}
				>
					Añadir
				</button>
				<ul>
					{items.map((item, key) => (
						<li key={key}>{item}</li>
					))}
				</ul>
				<Notificaciones />
			</header>
			<section></section>
		</div>
	);
}

export default App;
