import React from "react";
import axios from "axios";

import { Play } from "./components/pages/play"

function App() {
	const [data, setData] = React.useState();
	const url = "http://127.0.0.1:8000";

	return (
		<div>
			<Play />
		</div>
	);
}

export default App;
