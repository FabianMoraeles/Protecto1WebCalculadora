import React, { useState } from "https://esm.sh/react@18"
import Display from "./Display.js"
import Buttons from "./Buttons.js"

export default function Calculator() {
  const [input, setInput] = useState("")

  return React.createElement(
  "div",
  { className: "calculator" },
  React.createElement(Display, { value: input }),
  React.createElement(Buttons, { input, setInput })
)

}
