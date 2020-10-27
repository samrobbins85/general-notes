module.exports = {
	webpack: (config, { isServer }) => {
		if (isServer) {
			require("./sitemap_generator");
		}

		return config;
	},
};
