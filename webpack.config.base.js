const HtmlWebpackPlugin = require( "html-webpack-plugin" );

module.exports = {
	context: __dirname + "/src",
	entry: "./js/run.js",
	resolve: {
		modules: [ __dirname + "/src", "node_modules" ]
	},
	module: {
		rules: [
		{
			enforce: "pre",
			test: /\.js$/,
			exclude: /node_modules/,
			use: [ {
				loader: "eslint-loader",
				options: { }
			} ]
		},
		{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: "babel-loader"
		},
		{
			test: /\.css$/,
			exclude: /node_modules/,
			use: [ 
				{ loader: "style-loader" },
				{ loader: "css-loader" }
			]
		},
		{
			test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
			use: [ {
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: 'fonts/'
				}
			} ]
		},
		]
	},
	plugins: [
		new HtmlWebpackPlugin( {
			template: __dirname + "/src/index.html"
		} )
	]
};
