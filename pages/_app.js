import "../styles/index.css";
import "katex/dist/katex.min.css";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
	const [sidebarVisible, setSidebarVisible] = useState(false);
	return (
		<Component
			sidebarVisible={sidebarVisible}
			setSidebarVisible={setSidebarVisible}
			{...pageProps}
		/>
	);
}

export default MyApp;
