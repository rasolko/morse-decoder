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
    ' ': ' ',
};

function decode(expr) {
    let arr = [];
    let arr2 = [];
    let result = '';
    let charCount = Math.floor(expr.length / 10);
    for(let i = 0; i < charCount; i++){
        arr.push(expr.substr(i * 10, 10));
    }
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === '**********'){
            arr2.push(' ');
            continue
        }
        let char = '';
        for(let j = 0; j < arr[i].length; j = j + 2){
            let twoNumber = arr[i].substr(j, 2);
            if(twoNumber === '10'){
                char = char + '.';
            } else if(twoNumber === '11'){
                char = char + '-';
            }
        }
        arr2.push(char);
    }
    arr2.map( (item, index) => {
        result = result + MORSE_TABLE[item];
    })
    return result
}

module.exports = {
    decode
}