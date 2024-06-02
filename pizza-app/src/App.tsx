import { MouseEvent, useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import { Menu } from './components/pages/Menu/Menu';
import { Cart } from './components/pages/Cart/Cart';
import { Error } from './components/pages/Error/Error';



function App() {
	const [counter, setCounter] = useState<number>(0);

	const addCounter = (e: MouseEvent) => {
		console.log(e);
	};

	return (
		<>
			<Button onClick={addCounter}>Кнопка</Button>
			<Button appearence='big' onClick={addCounter}>Кнопка</Button>
			<Input />
			<Input placeholder='Email' />
		</>
	);
}

export default App;
