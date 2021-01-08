import React from "react";
import styles from "./SearchBar.module.scss";

const SearchBar = (props) => {
	const { getSearchedTitles, placeholder } = props;

	const input = (
		<input
			type="text"
			placeholder={placeholder}
			onChange={(event) => getSearchedTitles(event.target.value)}
		/>
	);


	return (
		<div className={styles.searchBar}>
			<label>Search Movie titles here: </label>
			{input}
		</div>
	);
};

export default SearchBar;
