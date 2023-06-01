import { useState } from "react"

export default function HackText({ text: inputText }: {text:string}) {
  const mainText = inputText.toUpperCase()
  const [text, setText] = useState<string>(mainText)
  function newLatter() {
    const latters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
    return latters[Math.floor(Math.random() * latters.length)]
  }
  function action() {
    let fixedText = ""
    let intervalCount = 0
    let delay = 0
    const interval = setInterval(() => {
      if (delay == 1) {
        fixedText += mainText[intervalCount]
        intervalCount++
        delay = 0
      } else {
        delay++
      }
      if (intervalCount === mainText.length) {
        clearInterval(interval)
      }
      let randomText = ""
      for (let i = fixedText.length; i < mainText.length; i++) {
        randomText += newLatter()
      }
      setText(fixedText + randomText)
    }, 30)
  }
  return (
    <h1 onMouseEnter={action} onTouchStart={action}>
      {text}
    </h1>
  )
}
