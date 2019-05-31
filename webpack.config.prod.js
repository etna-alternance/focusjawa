const merge = require( "webpack-merge" ),
	configBase = require( "./webpack.config.base.js" ),
	CompressionPlugin = require( "compression-webpack-plugin" ),
	BrotliPlugin = require( "brotli-webpack-plugin" );

module.exports = merge( configBase, {
	mode: "production",
	output: {
		path: __dirname + "/build",
		filename: "[name].bundle.[chunkhash].js",
	},
	plugins: [
		new CompressionPlugin( {
			filename: '[path].gz[query]',
			algorithm: 'gzip',
			test: /\.(js|css|html|woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
			// compressionOptions: { level: 11 },
			threshold: 10240,
			minRatio: 0.8,
			deleteOriginalAssets: true
		} )
	]
});
