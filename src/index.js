const { min } = require("mocha/lib/reporters");

module.exports = function toReadable (number) {
    let digits = number % 10;
    let hundreds = parseInt(number / 100);
    let dozens = parseInt(number % 100 / 10);
    let res = '';
    let nums = {
        0: 'zero',
        1:'one',
        2:'two',
        3:'three',
        4:'four',
        5: 'five',
        6:'six',
        7:'seven',
        8:'eight',
        9: 'nine',
    }
    let decs = {
        0: '',
        10:'ten',
        11:'eleven',
        12:'twelve',
        13:'thirteen',
        14: 'fourteen',
        15:'fifteen',
        16: 'sixteen',
        17:'seventeen',
        18:'eighteen',
        19:'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50:'fifty',
        60:'sixty',
        70:'seventy',
        80: 'eighty',
        90: 'ninety'
    }
    if (hundreds !== 0) {
        res += nums[hundreds] + ' ' + 'hundred' + ' ';
    }
    if ((number % 100) > 9 && (number % 100) < 20) {
        res += decs[parseInt(number % 100)];
    }
    else if (number % 100 !== 0 ) {
        if (digits !== 0 && dozens !== 0) {
            res += decs[dozens * 10] + ' ' + nums[parseInt(number % 10)];
        }
        else if (digits !== 0) {
          res +=  nums[parseInt(number % 10)];
        } 
        else {
            res += decs[parseInt(number % 100 / 10) * 10];

        }
    }
    else if (dozens !== 0 || digits !== 0){
        res += nums[digits]
    }
    else if (hundreds === 0 && dozens === 0 & digits === 0) {
        res += 'zero'
    }
    return res.trimEnd();

}
