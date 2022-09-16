import React from 'react';
import IconButton from './IconButton';

const Controller = ({controls, isPlaying, frameCount, firstFrame, lastFrame}) => {
	return (
			<div id="controller" className="db white pa3 flex items-center justify-start bg-black-80">
				{
					!isPlaying ?
							(<IconButton className="controllerBtn" name="play" onClick={controls.play}/>) :
							(<IconButton className="controllerBtn" name="pause" onClick={controls.pause}/>)
				}
				<IconButton className="controllerBtn" name="skip-backward" onClick={controls.prev}/>
				<IconButton className="controllerBtn" name="skip-forward" onClick={controls.next}/>
				<input
						name="first-frame"
						className="controllerInput"
						onInput={controls.setFirst}
						value={firstFrame}
				/>
				<input
						name="last-frame"
						className="controllerInput"
						onInput={controls.setLast}
						value={lastFrame}
				/>
				<div style={{flex: '100%'}} className="f4 tr pr3">
					{frameCount}
				</div>
			</div>

	);
}

export default Controller;
