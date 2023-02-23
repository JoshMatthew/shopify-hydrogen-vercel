// /** @type {import('@remix-run/dev').AppConfig} */
// module.exports = {
//   appDirectory: 'app',
//   ignoredRouteFiles: ['**/.*'],
//   watchPaths: ['./public'],
//   server: './server.ts',
//   /**
//    * The following settings are required to deploy Hydrogen apps to Oxygen:
//    */
//   // publicPath: (process.env.HYDROGEN_ASSET_BASE_URL ?? '/') + 'build/',
//   // assetsBuildDirectory: 'dist/client/build',
//   // serverBuildPath: 'dist/worker/index.js',
//   // serverMainFields: ['browser', 'module', 'main'],
//   // serverConditions: ['worker', process.env.NODE_ENV],
//   // serverDependenciesToBundle: 'all',
//   // // serverBuildTarget: 'esm',
//   serverPlatform: 'neutral',
//   // serverMinify: process.env.NODE_ENV === 'production',
// };
/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  serverBuildTarget: 'neutral',
  server: ['test', 'development'].includes(process.env.NODE_ENV)
    ? undefined
    : './server.js',
  cacheDirectory: './node_modules/.cache/remix',
  ignoredRouteFiles: ['**/.*', '**/*.css', '**/*.test.{js,jsx,ts,tsx}'],
  future: {},
};
