typeSpeed = 40
lineWaitTime = 1700
var announcement = [
    "It's great to see you!",
    "Ah no...relax. We can't actually see you",
    "But we'd really love to on..."
]
secret = 'nobody could ever possibly find this here' // :) Hi!

// ---------- owning tha libs ----------

// Half a simple scrambler stolen from https://stackoverflow.com/questions/18279141/javascript-string-encryption-and-decryption/54026460#54026460
const Unscrambler = salt => {
    const textToChars = text => text.split('').map(c => c.charCodeAt(0));
    const applySaltToChar = code => textToChars(salt).reduce((a,b) => a ^ b, code);
    return encoded => encoded.match(/.{1,2}/g)
      .map(hex => parseInt(hex, 16))
      .map(applySaltToChar)
      .map(charCode => String.fromCharCode(charCode))
      .join('');
}

// A dumb little param unpacker
function params() {
    props = window.location.search.substring(1).split("&")

    var result = {}
    for (var i = 0; i < props.length; i++) {
        var keyVal = props[i].split("=");
        result[keyVal[0]]=keyVal[1];
    }
    return result
}

// ---------- mini Spaghetti ----------

function typey(el, phrase, i = 0) {
    if (i == phrase.length) { return };

    el.innerHTML += phrase[i];
    i++;
    
    setTimeout(function () { return typey(el, phrase, i); }, typeSpeed);
    return phrase.length * typeSpeed
}

function tellItBrother(i=0) { 
    el.innerHTML = ""
    expectedLineTime = typey(el, announcement[i]);
    i++
    if (announcementLine == announcement.length) { return ; }
    setTimeout(function () { return tellItBrother(i); }, expectedLineTime + lineWaitTime)
}

// ---------- Script ---------------
var el = document.getElementById("typeSpace")
var announcementLine = 0

const unscrambler = Unscrambler(secret)

var scrambled_person = params().e
var person

if (scrambled_person) {
    person = unscrambler(params().e)
} else {
    person = "Hey there" // Somehow we didn't get the param so fallback
}

announcement.unshift(person)

tellItBrother()

// var scriptReadingInterval = setInterval(function () { 
//     typeLine()
//     if (announcementLine == announcement.length) { clearInterval(scriptReadingInterval) };
//  }, scrollSpeed)

 