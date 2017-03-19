import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import webpack from 'webpack';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.dev';

let app = express();

app.use(bodyParser.json());

const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler, {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
}));

app.use(webpackHotMiddleware(compiler));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

console.log(`Running on localhost: ${process.env.PORT || 8000}`)
app.listen(process.env.PORT || 8000)
