'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // API_ADDRESS: '"http://39.107.39.129"'
  //杨
  // API_ADDRESS: '"http://192.168.1.35:8000"'
  //陈
  // API_ADDRESS: '"http://192.168.1.45:8000"'
  // API_ADDRESS: '"http://47.95.145.122:8003"'
})
