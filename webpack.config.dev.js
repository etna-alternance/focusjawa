const merge = require( "webpack-merge" ),
	configBase = require( "./webpack.config.base.js" );

module.exports = merge( configBase, {
	mode: "development",
	output: {
		path: __dirname,
		publicPath: "/",
		filename: "build-dev.js"
	},
	module: {},
	plugins: []
});
