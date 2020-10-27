import "../styles/index.css";
import "katex/dist/katex.min.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";
function MyApp({ Component, pageProps }) {
	const router = useRouter();
	useEffect(() => {
		const handleRouteChange = (url) => {
			gtag.pageview(url);
		};
		router.events.on("routeChangeComplete", handleRouteChange);
		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, [router.events]);
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
