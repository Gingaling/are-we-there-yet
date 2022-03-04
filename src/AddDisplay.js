import Wormy from './Wormy-Brown.gif';
import './App.css';

export default function AddDisplay() {
	return (
		<div className='App'>
			<header className='App-header'>
				<p>Are We There Yet, <span>Worm</span>?</p>
				<img src={Wormy} className='App-logo' alt='Wormy' />
				<button type='submit' id='startButton'>
					Let's Begin
				</button>
			</header>
		</div>
	);
}
