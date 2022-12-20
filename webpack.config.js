const path = require("path")

module.exports = (env) => {
  const modules = {
    js: {
      test: /\.ts(x?)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: "ts-loader",
        },
      ],
    },
    stylus: {
      test: /\.styl$/,
      use: [
        {
          loader: "style-loader",
        },
        {
          loader: "css-loader",
        },
      ],
    },
  }

  if (env === "production") {
    modules.stylus.use.splice(2, 0, { loader: "postcss-loader" })
  }

  const resolve = {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      App: path.resolve(__dirname, "src/App/"),
      Pages: path.resolve(__dirname, "src/Pages/"),
    },
  }

  return {
    modules,
    resolve,
  }
}
