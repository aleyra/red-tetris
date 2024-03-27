import React from 'react'

//css
import './../../css/Presentation.css';

//images
import ReactLogo from '../../images/react.png';
import ReduxLogo from '../../images/redux.png';

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
						<a href='https://profile.intra.42.fr/users/mfunyu'>
							<div>
								<img
									src="https://cdn.intra.42.fr/users/8001a577e4bf55b9657b6ba129854c77/mfunyu.jpeg"
									alt={"mfunyu's avatar"}
									className='Presentation-avatar'></img>
							</div>
							<div className='Presentation-Name-status'>
								<div className='Presentation-name'>mfunyu</div>
							</div>
						</a>
					</div>
					<div className='Presentation-container-div'>
						<a href='https://profile.intra.42.fr/users/lburnet'>
							<div>
								<img
									src="https://cdn.intra.42.fr/users/554ea290ae9a8010d1b07010036acbce/lburnet.jpg"
									alt={"lburnet's avatar"}
									className='Presentation-avatar'
								></img>
							</div>
							<div className='Presentation-Name-status'>
								<div className='Presentation-name'>lburnet</div>
							</div>
						</a>
					</div>
				</div>
				<div>
					Les technologies utilisées sont :
				</div>
				<div className='techno-used'>
					<div className='one-techno'>
						<a href='https://react.dev/'>
							<div>
								<img 
									src={ReactLogo}
									alt='React Logo'
									className='presentation-logo'
								></img>
							</div>
							<div>
								React
							</div>
						</a>
					</div>
					<div className='one-techno'>
						<a href='https://redux.js.org/'>
							<div>
								<img
									src={ReduxLogo}
									alt='Redux Logo'
									className='presentation-logo'
								></img>
							</div>
							<div>
								Redux
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