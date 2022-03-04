import Wormy from './Wormy-Brown.gif';
import './App.css';

export default function AddDisplay() {
	return (
		<div className='App'>
			<header className='App-header'>
				<p>Welcome to the Are We There Yet App!</p>
				<img src={Wormy} className='App-logo' alt='Wormy' />
				<button type='submit' id='startButton'>
					Let's Begin
				</button>
			</header>
		</div>
	);
}
