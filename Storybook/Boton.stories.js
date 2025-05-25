import React from "https://esm.sh/react@18"
import Buttons from "./Buttons.jsx"

export default {
  title: "Buttons",
  component: Buttons
}

export const OperatorsOnly = () => React.createElement(Buttons, {
  input: "",
  setInput: () => {},
  keys: ["+", "-", "*", "/", "%", "="]
})
