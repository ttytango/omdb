import React from "react";
import styles from "./FiltersList.module.scss";
import SearchBar from "../SearchBar";
import SearchYear from "../SearchYear";

const FiltersList = (props) => {
	let placeholder = "eg. Blade Runner";
	const { getSearchedTitles, getYear } = props;
	return (
		<div className={styles.filterArea}>
			<h4>Filters</h4>
			<ul className={styles.filtersList}>
				<li>
					<SearchBar
						placeholder={placeholder}
						getSearchedTitles={getSearchedTitles}
					/>
				</li>

				<li>
					<SearchYear getYear={getYear} />
				</li>
			</ul>
		</div>
	);
};

export default FiltersList;
