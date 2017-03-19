import path from 'path'
import webpack from 'webpack';

export default {
	devtools: 'eval-source-map',
	entry: [
		path.join(__dirname, '/src/client.js'),
	],
	output: {
      path: '/',
      publicPath: '/'
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
