import postcssPresetEnv from 'postcss-preset-env';

/** @type {import('postcss-preset-env').Config} */
const config = {
  plugins: [
    postcssPresetEnv({
      features: {
        'nesting-rules': true,
        'custom-media-queries': true,
      },
    }),
  ],
};

export default config;
