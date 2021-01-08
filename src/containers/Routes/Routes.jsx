import React from "react";
import { Router } from "@reach/router";
import Home from "../Home";
import NotFound from "../../components/NotFound";
const Routes = () => {
	return (
		<Router>
			<Home path="/" />
			<NotFound default />
		</Router>
	);
};

export default Routes;
