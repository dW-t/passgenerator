const command = require('commander')
const clipboardy = require('clipboardy')
const createPassword = require('./util/createPassword')
const savePassword = require('./util/savePassword')

command.version('1.0.0').description('password generator')

command
.option('-l, --length <number>', 'pass length', '8')
.option('-s, --save', 'save pass to pass.txt')
.parse()

const {length, save} = command.opts()

const password = createPassword(length)
console.log(password)

clipboardy.writeSync(password)

if (save) {
    savePassword(password)
}
