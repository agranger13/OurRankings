module.exports = {
    // Other Webpack configuration...
    module: {
      rules: [
        {
          test: /\.js$/,
          enforce: 'pre',
          use: ['source-map-loader'],
          exclude: [
            /node_modules\/@yudiel\/react-qr-scanner/ // Add this line to exclude the specific package
          ],
        },
      ],
    },
    // Other Webpack configuration...
  };
  