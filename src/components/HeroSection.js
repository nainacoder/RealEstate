import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';
function HeroSection() {
	return (
		<div className="hero-container">
			<video src="/videos/video-1.mp4" autoPlay loop muted />
			<h1>YOUR COMFORT IS OUR PROMISE</h1>
			<p>FIND YOUR COMFORT HERE...!</p>
			<div className="hero-btns">
				<Button className="btns" buttonstyle="btn--outline" buttonSize="btn--large">
					GET STARTED
				</Button>
			</div>
		</div>
	);
}

export default HeroSection;
