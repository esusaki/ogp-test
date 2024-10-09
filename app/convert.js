import kuromoji from "kuromoji";

function convertText(userInput){
    return new Promise((resolve, reject) => {
        kuromoji.builder(
            {dicPath : "dict/"}
          ).build((err, tokenizer) => {
      
              const tokens = tokenizer.tokenize(userInput);
      
              var result = "";
      
              for (var i = 0; i < tokens.length; i++){
                  result += `${tokens[i].surface_form} (${tokens[i].pos})`
              }
      
              resolve(result) // return的なやつです
          })  
    })
  }

export default convertText;
