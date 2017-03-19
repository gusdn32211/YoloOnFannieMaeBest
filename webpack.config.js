const path = require('path');
const webpack = require('webpack');

module.exports = {
	devtools: 'eval-source-map',
	entry: [
		path.join(__dirname, '/src/client.js'),
	],
  output: {
    path: path.join(__dirname, 'server'),
    filename: 'bundle.js',
    publicPath: '/server/'
  },
  	plugins: [
	  	new webpack.NoErrorsPlugin(),
	  	new webpack.optimize.OccurenceOrderPlugin(),
  		new webpack.HotModuleReplacementPlugin()
  	]﻿,
	module: {
		loaders: [
		 {
		 	test: /\.js$/,
		 	include: [
		 		path.join(__dirname, 'src'),
		 		path.join(__dirname, 'server/shared')
		 	],
		 	loaders: [ 'react-hot', 'babel']
		 }
		]
	},
	resolve: {
		extentions: [ '', '.js']
	}
}
