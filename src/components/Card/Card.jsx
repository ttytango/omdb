import React from "react";
import styles from "./Card.module.scss";

const Card = ({ movie }) => {
	const { imdbID, Title, Year, Poster } = movie;

	return (
		<div key={imdbID} className={styles.card}>
			<img src={Poster} alt={Title} />
			<h3>{Title}</h3>
			<p>{Year}</p>
			{/* <p>
				Directed by <strong>{Director}</strong>
			</p> */}
		</div>
	);
};

export default Card;
