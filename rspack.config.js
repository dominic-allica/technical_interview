const { composePlugins, withNx, withWeb } = require('@nx/rspack');
const ReactRefreshPlugin = require("@rspack/plugin-react-refresh");

const isDev = process.env.NODE_ENV === "development";

module.exports = composePlugins(withNx(), withWeb(), (config) => {
  return {
    ...config,
    plugins: [
      ...config.plugins,
      isDev && new ReactRefreshPlugin(),
    ].filter(Boolean),
    mode: isDev ? "development" : "production"
  }
});
