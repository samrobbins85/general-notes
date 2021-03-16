import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<link rel="icon" href="/favicon.ico" type="image/x-icon" />
					<link
						rel="shortcut icon"
						href="/favicon.ico"
						type="image/x-icon"
					/>
					<script
						defer
						src="https://static.cloudflareinsights.com/beacon.min.js"
						data-cf-beacon='{"token": "bd3ba60d66f24b0ca69424f488c07e1b", "spa": true}'
					></script>

					<script
						type="text/javascript"
						src="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js"
					></script>
				</Head>
				<body>
					<Main />

					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
