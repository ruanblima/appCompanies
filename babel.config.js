module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        root: ['./'],
        alias: {
          '~': './src',
          '@src': './src',
        },
        extensions: ['.js', '.ios.js', '.android.js'],
      },
    ],
  ],
};
