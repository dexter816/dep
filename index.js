//index.js
// Packages
const command = require('probot-commands')

//ours
const ensure = require('./lib/ensure')

module.exports = robot => {

  command(robot, 'depends', ensure)
  command(robot, 'ensure', ensure)

}
