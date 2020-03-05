const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '**********' : ' ',
};

function decode(expr) {
    var mass = expr.split('');

    for (i = 10; i < mass.length; i += 11) {
        mass.splice(i,0,'_');
    }

    mass = mass.join('').split('_');

    mass = mass.map(function(item) {
        item = item.split('10').join('.');
        item = item.split('11').join('-');
        item = item.split('0').join('');
        return item;
    })

    mass = mass.map(function(item) {
        return item = MORSE_TABLE[item];
    })

    mass = mass.join('');
    return mass;

}

module.exports = {
    decode
}