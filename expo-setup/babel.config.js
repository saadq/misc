function config() {
  api.cache(true)
  return {
    presets: ['babel-preset-expo', 'module:react-native-dotenv']
  }
}

module.exports = config
