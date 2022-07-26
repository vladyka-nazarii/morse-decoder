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
    '**********': ' ',
};

function decode(expr) {
  resultArr = [];
  resultMorse = [];
  result = [];
  for (let i=0; i<expr.length/10; i++) {
    resultArr[i] = expr.slice([i*10], [i*10+10])
  };
  resultArr.forEach((element, index) => {
    resultMorse[index] = element
    .replace(/00/g,"")
    .replace(/10/g,".")
    .replace(/11/g,"-")
  });
  resultMorse.forEach((element, index) => {result[index] = MORSE_TABLE[element]});
  return result.join('');
}

module.exports = {
    decode
}