const { ESLINT_MODES } = require('@craco/craco');
const CracoAlias = require('craco-alias');
const CircularDependencyPlugin = require('circular-dependency-plugin');

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'jsconfig',
        jsConfigPath: 'jsconfig.json',
      },
    },
  ],
  eslint: {
    mode: ESLINT_MODES.file,
  },
  webpack: {
    plugins: [
      new CircularDependencyPlugin({
        include: /src/,
      }),
    ],
  },
};
