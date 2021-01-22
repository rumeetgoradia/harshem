const path = require("path")

module.exports = {
	webpack: (config, { dev, isServer }) => {
		config.module.rules.push({
			test: /\.svg$/,
			use: [
				{
					loader: "@svgr/webpack",
					options: {
						svgoConfig: {
							plugins: {
								removeViewBox: false,
							},
						},
					},
				},
			],
		})
		config.module.rules.push({
			test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
			use: [
				{
					loader: "file-loader",
					options: {
						name: "[name].[ext]",
						outputPath: "fonts/",
					},
				},
			],
		})
		config.resolve.alias["images"] = path.join(__dirname, "public", "images")

		// if (isServer) {
		// 	require("./scripts/generate-sitemap")
		// }

		// Replace React with Preact only in client production build
		if (!dev && !isServer) {
			Object.assign(config.resolve.alias, {
				react: "preact/compat",
				"react-dom/test-utils": "preact/test-utils",
				"react-dom": "preact/compat",
			})
		}

		return config
	},
}
