const
webpack = require("webpack"),
{ resolve } = require("path"),
{ config } = require("dotenv"),
HtmlWebpackPlugin = require("html-webpack-plugin"),
FaviconsWebpackPlugin = require("favicons-webpack-plugin"),
UglifyJsPlugin = require("uglifyjs-webpack-plugin"),
{ BundleAnalyzerPlugin } = require("webpack-bundle-analyzer"),
{ CleanWebpackPlugin } = require("clean-webpack-plugin");

config();
module.exports = (none, { mode, dir="../../..", analyzer=false }) => {
    const
    commonDir = resolve(dir, "common"),
    srcDir = resolve("src");

    return {
        target: "web",
        devtool: mode === "production"
            ? "source-map"
            : "inline-source-map",
        entry: {
            app: [ resolve(srcDir, "index.tsx") ]
        },
        output: {...mode === "production"
            ? {
                chunkFilename: "[name].[chunkhash].bundle.js",
                filename: "[name].[chunkhash].bundle.js",
            }
            : {
                chunkFilename: "[name].bundle.js",
                filename: "[name].bundle.js",
            },
            path: resolve(".dist/app")
        },
        optimization: {
            splitChunks: {
                chunks: "all",
                cacheGroups: {
                    commons: {
                        test: /[\\/]node_modules[\\/]/,
                        name: "vendor",
                        chunks: "initial"
                    }
                }
            },
            runtimeChunk: {
                name: "manifest"
            },
            minimizer: [
                new UglifyJsPlugin({
                    sourceMap: true,
                    uglifyOptions: {
                        ecma: 8,
                        mangle: false,
                        keep_classnames: true,
                        keep_fnames: true
                    }
                })
            ]
        },
        resolve: {
            modules: [
                "node_modules",
            ],
            extensions: [
                "*", ".js", ".jsx",
                ".ts", ".tsx",
                ".less",
                ".png", ".jpg", ".jpeg", ".ico"
            ],
            alias: {
                Moment: "moment",
                "@common": resolve(commonDir),
                "@graphql": resolve(srcDir, "graphql"),
                "@queries": resolve(srcDir, "graphql/queries"),
                "@mutations": resolve(srcDir, "graphql/mutations"),
                "@redux": resolve(srcDir, "redux"),
                "@actions": resolve(srcDir, "redux/actions"),
                "@reducers": resolve(srcDir, "redux/reducers"),
                "@react": resolve(srcDir, "react"),
                "@components": resolve(srcDir, "react/components"),
                "@containers": resolve(srcDir, "react/containers"),
                "@layouts": resolve(srcDir, "react/containers/layouts"),
                "@loaders": resolve(srcDir, "react/loaders"),
                "@routes": resolve(srcDir, "react/routes"),
                "@logo": resolve(srcDir, "react/components/logo"),
                "@assets": resolve(srcDir, "assets"),
                "@utils": resolve(srcDir, "utils"),
            }
        },
        plugins: (plugins => {
            if (analyzer)
                plugins.push(new BundleAnalyzerPlugin({
                    analyzerMode: "static"
                }))

            return plugins;
        })([
            new webpack.ProgressPlugin(),
            new CleanWebpackPlugin(),
            new FaviconsWebpackPlugin({
                logo: resolve(srcDir, "assets/favicon.png"),
                outputPath: resolve(srcDir, ".dist"),
                inject: true,
            }),
            new HtmlWebpackPlugin({
                title: "Biggs Realty",
                template: resolve(srcDir, "index.html"),
            }),
            new webpack.DefinePlugin({
                ENV: JSON.stringify(((...vars) => {
                    const env = {};

                    for (let v of vars)
                        env[v] = process.env[v];

                    return env;
                })(
                    "DOMAIN",
                    "GATEWAY",
                    "PORT"
                ))
            }),
        ]),
        module: { rules: [{
            test: /\.(js|jsx|ts|tsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: [
                        "@babel/preset-env",
                        "@babel/preset-typescript",
                        "@babel/preset-react"
                    ],
                    plugins: [
                        [ "import", {
                            "libraryName": "antd",
                            "style": true,
                        }],
                        "@babel/plugin-proposal-class-properties",
                        "@babel/plugin-proposal-object-rest-spread",
                        "@babel/plugin-transform-runtime",
                        "@babel/plugin-syntax-dynamic-import"
                    ]
                }
            }
        }, {
            test: /\.(graphql|gql)$/,
            exclude: /node_modules/,
            loader: "graphql-tag/loader"
        }, {
            test: /\.less$/,
            use: [
                { loader: "style-loader" },
                { loader: "css-loader" },
                {
                    loader: "less-loader",
                    options: {
                        lessOptions: {
                            javascriptEnabled: true,
                        }
                    }
                }
            ]
        }, {
            test: /\.(jpg|jpeg|ico|png|oft|woff|woff2|eot|ttf|svg)$/,
            exclude: /\.less$/,
            use: [{ loader: "file-loader", options: {
                outputPath: "assets",
                publicPath: "assets"
            }}]
        }]}
    }
}
