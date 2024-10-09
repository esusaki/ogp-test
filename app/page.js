"use client"

import {useState} from "react";
import kuromoji from "kuromoji";

export default function Home() {

  const [text, setText] = useState("");
  const [displayText, setDisplayText] = useState("");

  function convertText(userInput){
    setText(text)

    kuromoji.builder(
      {dicPath : "dict/"}
    ).build((err, tokenizer) => {
      const tokens = tokenizer.tokenize(userInput);

      var result = "";

      for (var i = 0; i < tokens.length; i++){
        result += `${tokens[i].surface_form} (${tokens[i].pos})`
      }
      
      setDisplayText(result)
    })  
  }

  return (
    <div>
        <textarea placeholder = "文章を入力してください"
          style ={{"width":"100%","height":"100px"}}
          value = {text}
          onChange = {(e) => {setText(e.target.value)}}>
        </textarea>
        <button onClick = {()=>{convertText(text)}}>
          OK
        </button>

          { displayText === "" 
              ? "" 
              :<div style={{"padding":"10px","background":"#eee","margin":"10px"}}>
                  {displayText}
                  <div>
                  <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-text={'textvalでお祭り翻訳しました！'} data-url={encodeURI("https://ogp-test-omega.vercel.app/show-ogp/" + displayText)} data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
              </div></div>
            }
    </div>
  );
}
