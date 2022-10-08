import React from "react";
import axios from "axios";

import { Play } from "./components/pages/play"

function App() {
	const [data, setData] = React.useState();
	const url = "https://polar-tor-22320.herokuapp.com";

	return (
		<div>
			<Play />
		</div>
	);
}

export default App;
