const sitemap = require("nextjs-sitemap-generator");

sitemap({
	baseUrl: "https://csnotes.me",
	pagesDirectory: __dirname + "/notes",
	targetDirectory: "public/",
	ignoredExtensions: ["js", "map"],
	ignoredPaths: ["[fallback]"],
});
