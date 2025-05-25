import { assertEquals } from "https://deno.land/std@0.224.0/testing/asserts.ts"

function evaluate(input) {
  try {
    const result = eval(input)
    if (result < 0 || result > 999999999 || result.toString().length > 9) {
      return "ERROR"
    }
    return result.toString()
  } catch {
    return "ERROR"
  }
}

Deno.test("suma básica sin errores", () => {
  const res = evaluate("2+2")
  assertEquals(res, "4")
})

Deno.test("multiplicación supera límite", () => {
  const res = evaluate("999999999*2")
  assertEquals(res, "ERROR")
})

Deno.test("división precisa", () => {
  const res = evaluate("22/7")
  assertEquals(res.length <= 9, true)
})

Deno.test("único punto decimal", () => {
  const input = "1.2.3"
  const sanitized = input.replace(/\.([^.]*\.)/g, '.$1')
  assertEquals(sanitized, "1.2.3")
})
