// ---------- owning tha libs ----------

/*!	
* FitText.js 1.0 jQuery free version
*
* Copyright 2011, Dave Rupert http://daverupert.com 
* Released under the WTFPL license 
* http://sam.zoy.org/wtfpl/
* Modified by Slawomir Kolodziej http://slawekk.info
*
* Date: Tue Aug 09 2011 10:45:54 GMT+0200 (CEST)
*/
(function(){

    var addEvent = function (el, type, fn) {
      if (el.addEventListener)
        el.addEventListener(type, fn, false);
          else
              el.attachEvent('on'+type, fn);
    };
    
    var extend = function(obj,ext){
      for(var key in ext)
        if(ext.hasOwnProperty(key))
          obj[key] = ext[key];
      return obj;
    };
  
    window.fitText = function (el, kompressor, options) {
  
      var settings = extend({
        'minFontSize' : -1/0,
        'maxFontSize' : 1/0
      },options);
  
      var fit = function (el) {
        var compressor = kompressor || 1;
  
        var resizer = function () {
          el.style.fontSize = Math.max(Math.min(el.clientWidth / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)) + 'px';
        };
  
        // Call once to set.
        resizer();
  
        // Bind events
        // If you have any js library which support Events, replace this part
        // and remove addEvent function (or use original jQuery version)
        addEvent(window, 'resize', resizer);
        addEvent(window, 'orientationchange', resizer);
      };
  
      if (el.length)
        for(var i=0; i<el.length; i++)
          fit(el[i]);
      else
        fit(el);
  
      // return set of elements
      return el;
    };
  })();


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

// ---------- helpers ----------

function typey(el, phrase, i = 0) {
    if (i == phrase.length) { return };

    el.innerHTML += phrase[i];
    i++;
    
    setTimeout(function () { return typey(el, phrase, i); }, typeSpeed);
    return phrase.length * typeSpeed
}
