import React from "https://esm.sh/react@18"
import Display from "./Display.jsx"

export default {
  title: "Display",
  component: Display
}

export const WithNumber = () => React.createElement(Display, { value: "123" })
export const WithError = () => React.createElement(Display, { value: "ERROR" })
