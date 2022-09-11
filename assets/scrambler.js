const Scrambler = salt => {
    const textToChars = text => text.split('').map(c => c.charCodeAt(0));
    const byteHex = n => ("0" + Number(n).toString(16)).substr(-2);
    const applySaltToChar = code => textToChars(salt).reduce((a,b) => a ^ b, code);

    return text => text.split('')
      .map(textToChars)
      .map(applySaltToChar)
      .map(byteHex)
      .join('');
}

secret = 'nobody could ever possibly find this here'
scrambler = Scrambler(secret)

var basePath = "file:///home/adam/Documents/weddinginvite/index.html"

url = basePath + "?e=" + scrambler("Steffi darling")
console.log(url)