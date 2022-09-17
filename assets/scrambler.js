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

var basePath = "https://www.schmitzrahi.org/whyhellothere.html"

function makeLink(invitee) {
  return basePath + "?e=" + scrambler(invitee)
}
