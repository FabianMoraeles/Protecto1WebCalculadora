export default function handleClick(value, input) {
  if (input === "ERROR") return ""
  const max = 999999999
  if (value === "C") return ""
  if (value === "=") {
    try {
      const e = input.replace(/×/g, "*").replace(/÷/g, "/")
      let r = Math.floor(eval(e))
      if (r < 0 || r > max || r.toString().length > 9) return "ERROR"
      return r.toString()
    } catch { return "ERROR" }
  }
  const clean = input.replace(/[^0-9]/g, "")
  if (clean.length >= 9 && /[0-9]/.test(value)) return input
  return input + value
}
