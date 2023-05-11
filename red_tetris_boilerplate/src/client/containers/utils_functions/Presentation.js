import React from 'react'

//css
import css from './../../css/Presentation.css';

export function Presentation(){
	return(
		<div>
			<div className='Presentation'>
				<div>
					Bienvenue sur notre projet Red Tetris.
					<br></br>
					Ce projet a été réalisé par :
					<br></br>
				</div>
				<div className='Presentation-container'>
					<div className='Presentation-container-div'>
						<a href='https://profile.intra.42.fr/users/tmilon'>
							<div>
								<img src="https://cdn.intra.42.fr/users/0db64d827e57902861c104f0955ae742/tmilon.jpg" alt={"tlafay's avatar"} className='Presentation-avatar'></img>
							</div>
							<div className='Presentation-Name-status'>
								<div className='Presentation-name'>tmilon</div>
							</div>
						</a>
					</div>
					<div className='Presentation-container-div'>
						<a href='https://profile.intra.42.fr/users/lburnet'>
							<div>
								<img src="https://cdn.intra.42.fr/users/554ea290ae9a8010d1b07010036acbce/lburnet.jpg" alt={"lburnet's avatar"} className='Presentation-avatar'></img>
							</div>
							<div className='Presentation-Name-status'>
								<div className='Presentation-name'>lburnet</div>
							</div>
						</a>
					</div>
				</div>
				<div>
					HF pendant cette correction.
				</div>
			</div>
		</div>
	);
}