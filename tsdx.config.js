// tsdx.config.js
module.exports = {
  rollup(config, options) {
    // Return the config unchanged if you don't need to modify it
    return config
  },
  babel(config) {
    // Remove transform-regenerator if present
    config.plugins = config.plugins.filter(
      plugin => typeof plugin !== 'string' || !plugin.includes('transform-regenerator')
    )

    // Add plugin-transform-runtime
    config.plugins.push(['@babel/plugin-transform-runtime', { regenerator: true }])

    return config
  }
}
