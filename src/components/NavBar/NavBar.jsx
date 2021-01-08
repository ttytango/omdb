import React from "react";
import styles from "./NavBar.module.scss";
import { Link } from "@reach/router";

const NavBar = () => {
	return (
		<nav className={styles.navFlex}>
			<Link to="/">Home</Link>
		</nav>
	);
};

export default NavBar;
