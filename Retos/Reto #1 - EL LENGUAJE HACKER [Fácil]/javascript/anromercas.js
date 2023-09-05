const alphabet = {
    a: '4',
    b: '|3',
    c: '[',
    d: ')',
    e: '3',
    f: '|=',
    g: '&',
    h: '#',
    i: '1',
    j: ',_|',
    k: '>|',
    l: '1',
    m: '^^',
    n: '^/',
    ñ: '^/~',
    o: '0',
    p: '|*',
    q: '(_,)',
    r: 'I2',
    s: '5',
    t: '7',
    u: '(_)',
    v: '\/',
    w: '\/\/',
    x: '><',
    y: 'j',
    z: '2'
}

function translateText(text) {
    let transtaledText = '';
    text.split('').forEach(letter => {
        if( letter !== ' ') {
            let letterLC = letter.toLowerCase();
            transtaledText += alphabet[letterLC];
        } else {
            transtaledText += ' '
        }
    });
    return transtaledText
}

console.log(translateText('Hola me llamo nuria'))