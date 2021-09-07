const alphabets = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numbers = '1234567890'
const symbols = '!@#$%^&*_-+='

const createPassword = (length= 8) => {
    let tmp = alphabets
    tmp += numbers
    tmp += symbols

    let pass = ''
    for (let i = 0; i < length; i++) {
        pass += tmp.charAt(Math.floor(Math.random() * tmp.length))
    }

    return pass
}

module.exports = createPassword

