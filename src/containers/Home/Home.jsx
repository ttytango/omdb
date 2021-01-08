import React, { useState, useEffect } from "react";
import styles from "./Home.module.scss";
import CardList from "../../components/CardList";
import FiltersList from "../../components/FiltersList";

const Home = () => {
	const [movies, setMovies] = useState([]);
	const [searchTerm, setSearchTerm] = useState();
	const [year, setYear] = useState();

	const getSearchedTitles = (searchTerm) => {
		if (searchTerm && searchTerm.match(/^[0-9a-zA-Z]+$/)) {
			setSearchTerm(searchTerm);
		}
	};

	const getYear = (searchYear) => {
		if (searchYear && searchYear.match(/(?:(?:19|20)[0-9]{2})/)) {
			setYear(searchYear);
		}
	};
	const getFilteredMovies = () => {
		getSearchedTitles();
		getYear();
		const searchedStr = searchTerm ? `&t=${searchTerm}` : "";
		const searchedYear = year ? `&y=${year}` : "";
		fetch(
			`http:///www.omdbapi.com/?apikey=b32fb90c${searchedStr}${searchedYear}`
		)
			.then((res) => res.json())
			.then((newMovies) => {
				setMovies([newMovies]);
				// let movieArray = Array.from(newMovies);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		getFilteredMovies();
	}, [searchTerm, year]);

	return (
		<>
			<div className={styles.homeContainer}>
				<h1>Search for your favourite Movies!</h1>

				<FiltersList
					movies={movies}
					getSearchedTitles={getSearchedTitles}
					getYear={getYear}
					year={year}
					setYear={setYear}
					getFilteredMovies={getFilteredMovies}
				/>
				{/* <FiltersList movies={movies} /> */}
				<CardList movies={movies} />
			</div>
		</>
	);
};

export default Home;
