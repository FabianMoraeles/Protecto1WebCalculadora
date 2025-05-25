import React from "https://esm.sh/react@18"


const keys = ["+","1", "2", "3", "-", "4", "5", "6", "*", "7", "8", "9", "/",  ".", "0", "=", "C"]

export default function Buttons({ input, setInput }) {
  function getLastNumber(str) {
    const match = str.match(/([0-9.]+)$/)
    return match ? match[0] : ""
  }

  return React.createElement(
    "div",
    { className: "buttons" },
    keys.map(key =>
      React.createElement(
        "button",
        {
          key,
          className: ["+", "-", "*", "/", "%", "=", "C"].includes(key) ? "operator" : "",
          onClick: () => {
            if (key === "=") {
              try {
                const result = eval(input)
                if (
                  result < 0 ||
                  result > 999999999 ||
                  result.toString().length > 9
                ) {
                  setInput("ERROR")
                } else {
                  setInput(result.toString())
                }
              } catch {
                setInput("ERROR")
              }
            } else if (key === ".") {
              const lastNumber = getLastNumber(input)
              if (!lastNumber.includes(".") && input.length < 9) {
                setInput(input + key)
              }
            } else if (key === "C") {
              setInput("")
            } else {
              if (input.length < 9) setInput(input + key)
            }
          }
        },
        key
      )
    )
  )
}