const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const copyPlugin = require('copy-webpack-plugin');


module.exports = {
  // Entry nos permite decir el punto de entrada de nuestra aplicación
  entry: "./src/index.js",
  // Output nos permite decir hacia dónde va enviar lo que va a preparar webpacks
  output: {
    // path es donde estará la carpeta donde se guardará los archivos
    // Con path.resolve podemos decir dónde va estar la carpeta y la ubicación del mismo
    path: path.resolve(__dirname, "dist"),
    // filename le pone el nombre al archivo final
    filename: "main.js",
    assetModuleFilename: 'assets/images/[hash][ext][query]',
  },
  resolve: {
    // Aqui ponemos las extensiones que tendremos en nuestro proyecto para webpack los lea
    extensions: [".js"]
  },
  module: {
    rules: [
      {
        // Test declara que extensión de archivos aplicara el loader
        test: /\.m?js$/,
        // Exclude permite omitir archivos o carpetas especificas
        exclude: /node_modules/,
        // Use es un arreglo u objeto donde dices que loader aplicaras
        use: {
          loader: "babel-loader"
        }
      },

      // Rules for mini-css-extract-plugin
      {
        test: /\.css|.styl$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'stylus-loader'
        ],
      },

      // Rules for images loader
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },

      // Rules for fonts
      {
        test: /\.(woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'application/font-woff',
            name: '[name].[ext]',
            outputPath: './assets/fonts/',
            publicPath: './assets/fonts/',
            esModule: false,
          }
        }
      }
    ]
  },
  plugins: [
    /*
      HtmlWebpackPlugin agrega las etiquetas
      de los archivos de las que se necesitan
      cargar en el documento HTML. Por ejemplo:
      la etiqueta script y la etiqueta link:css
    */
    new HtmlWebpackPlugin({ // CONFIGURACIÓN DEL PLUGIN
      inject: true, // INYECTA EL BUNDLE AL TEMPLATE HTML
      template: './public/index.html', // LA RUTA AL TEMPLATE HTML
      filename: './index.html' // NOMBRE FINAL DEL ARCHIVO
    }),
    new MiniCssExtractPlugin(),
    // new copyPlugin({
    //   patterns: [
    //     {
    //       from: path.resolve(__dirname, "src", "assets/images"),
    //       to: "assets/images",
    //     }
    //   ]
    // })
  ]
}
