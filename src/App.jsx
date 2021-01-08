import React from "react";
import styles from "./App.module.scss";
import Routes from "./containers/Routes/";
import NavBar from "./components/NavBar";

function App() {
	return (
		<>
			<section className={styles.nav}>
				<NavBar />
			</section>
			<section className={styles.content}>
				<Routes />
			</section>
		</>
	);
}

export default App;
