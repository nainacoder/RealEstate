import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
	return (
		<div className="cards">
			<h1>Explore Your Comfort Zone To Be!</h1>
			<div className="cards__container">
				<div className="cards__wrapper">
					<ul className="cards__items">
						<CardItem src="images/images4.jpg" text="Your Happy Place" label="DreamHOME" path="/meeting" />
						<CardItem src="images/images5.jpg" text="Feel the luxury" label="DreamHOME" path="/meeting" />
						<CardItem src="images/images2.jpg" text="Feel the Ritzz" label="DreamHOME" path="/meeting" />
					</ul>
					<ul className="cards__items">
						<CardItem src="images/images4.jpg" text="Your Happy Place" label="DreamHOME" path="/meeting" />
						<CardItem src="images/images5.jpg" text="Feel the luxury" label="DreamHOME" path="/servicesS" />
						<CardItem src="images/images2.jpg" text="Feel the Ritzz" label="DreamHOME" path="/meeting" />
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Cards;
