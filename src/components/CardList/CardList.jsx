import React from "react";
import styles from "./CardList.module.scss";
import Card from "../Card";

const CardList = ({ movies }) => {
	const getMoviesJsx = (movie) => (
		<div className={styles.cardList}>
			<Card movie={movie} />
		</div>
	);

	return <div>{movies.map(getMoviesJsx)}</div>;
};

export default CardList;
