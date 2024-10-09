"use client"

import { useState } from "react";
import convertText from "./convert";

export default function Home() {

  const [userInput, setUserInput] = useState("");
  const [displayText, setDisplayText] = useState("");

  async function buttonClicked() {
    const inputText = userInput;
    setUserInput("");
    const result = await convertText(inputText);
    await setDisplayText(result);
  }

  return (
    <div>
      <textarea placeholder="文章を入力してください"
        style={{ "width": "100%", "height": "100px" }}
        value={userInput}
        onChange={(e) => { setUserInput(e.target.value) }}>
      </textarea>
      <button onClick={() => { buttonClicked() }}>
        OK
      </button>

      {displayText === ""
        ? ""
        : <div style={{ "padding": "10px", "background": "#eee", "margin": "10px" }}>
          {displayText}
          <div>
            <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-text={'textvalでお祭り翻訳しました！'} data-url={encodeURI("https://ogp-test-omega.vercel.app/show-ogp/" + displayText)} data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          </div></div>
      }
    </div>
  );
}
