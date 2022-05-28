
var chatWindow = new Bubbles(
document.getElementById("chat"),
"chatWindow", {
    // the one that we care about is inputCallbackFn()
    // this function returns an object with some data that we can process from user input
    // and understand the context of it

    // this is an example function that matches the text user typed to one of the answer bubbles
    inputCallbackFn: function(o) {
        // add error conversation block & recall it if no answer matched
        var miss = function() {
          chatWindow.talk(
            {
              "i-dont-get-it": {
                says: [
                  "Sorry, I don't get it 😕. Pls repeat? Or you can just click below 👇"
                ],
                reply: o.convo[o.standingAnswer].reply
              }
            },
            "i-dont-get-it"
          )
        }
    
        // do this if answer found
        var match = function(key) {
          setTimeout(function() {
            chatWindow.talk(convo, key) // restart current convo from point found in the answer
          }, 600)
        }
    
        // sanitize text for search function
        var strip = function(text) {
          return text.toLowerCase().replace(/[\s.,\/#!$%\^&\*;:{}=\-_'"`~()]/g, "")
        }
    
        // search function
        var found = false
        o.convo[o.standingAnswer].reply.forEach(function(e, i) {
          strip(e.question).includes(strip(o.input)) && o.input.length > 0
            ? (found = e.answer)
            : found ? null : (found = false)
        })
        found ? match(found) : miss()
      }
    }) // done setting up chat-bubble
    
    // conversation object defined separately, but just the same as in the
    // "Basic chat-bubble Example" (1-basics.html)
    

chatWindow.talk(convo);