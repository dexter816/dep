// lib/ensure.js
const ensure = async (context, command) => {
  console.log('Hi, it is ensure')
  console.log('my arguments are:', command.arguments)
}

module.exports = ensure
