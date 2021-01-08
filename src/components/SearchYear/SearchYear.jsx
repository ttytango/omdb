import React from "react";
import styles from "./SearchYear.module.scss";

const SearchYear = ({ getYear }) => {
	const input = (
		<input
			type="number"
			placeholder="eg. 1992"
			onChange={(event) => getYear(event.target.value)}
		/>
	);

	return (
		<div className={styles.searchBar}>
			<label>Search by Year:</label>
			{input}
		</div>
	);
};

export default SearchYear;
