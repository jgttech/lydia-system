const
{ resolve } = require("path"),
webpack = require("webpack"),
nodeExternals  = require("webpack-node-externals"),
UglifyJsPlugin = require("uglifyjs-webpack-plugin"),
{ BundleAnalyzerPlugin } = require("webpack-bundle-analyzer"),
{ CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = (none, { mode, dir="../../..", analyzer=false }) => {
    const
    commonDir = resolve(dir, "common"),
    commonClientDir = resolve(dir, "common", "client"),
    commonScehmaDir = resolve(dir, "common", "schema"),
    commonUtilsDir = resolve(dir, "common", "utils"),
    commonHooksDir = resolve(dir, "common", "hooks");

    return {
        target: "async-node",
        externals: [ nodeExternals() ],
        devtool: "inline-source-map",
        entry: {
            app: [ resolve("src/server.ts") ]
        },
        output: {...mode === "production"
            ? {
                chunkFilename: "[name].[chunkhash].bundle.js",
                filename: "[name].[chunkhash].bundle.js",
            }
            : {
                chunkFilename: "[name].js",
                filename: "[name].js",
            },
            path: resolve(".dist")
        },
        resolve: {
            modules: [
                "node_modules",
            ],
            extensions: [
                "*", ".js", ".ts",
            ],
            alias: {
                "@common": resolve(commonDir),
                "@commonUtils": resolve(commonUtilsDir),
                "@commonHooks": resolve(commonHooksDir),
                "@commonClient": resolve(commonClientDir),
                "@commonSchema": resolve(commonScehmaDir),
                "@Response": resolve(commonScehmaDir, "Response", "Response.ts"),
                "@hooks": resolve("src", "hooks"),
                "@schemas": resolve("src", "schemas"),
                "@utils": resolve("src", "utils"),
                "@middleware": resolve("src", "middleware"),
                "@env": resolve(commonUtilsDir, "env.ts"),
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
            new webpack.DefinePlugin({}),
        ]),
        module: { rules: [{
            test: /\.(js|jsx|tsx|ts)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: [
                        "@babel/preset-env",
                        "@babel/preset-typescript"
                    ],
                    plugins: [
                        "@babel/plugin-proposal-class-properties",
                        "@babel/plugin-proposal-object-rest-spread",
                        "@babel/plugin-transform-runtime"
                    ]
                }
            }
        }, {
            test: /\.(graphql|gql)$/,
            use: "raw-loader",
        }]}
    };
}