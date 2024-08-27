# Task
The input is a simple standalone JavaScript program. Your task is to output JSON that describes specific problems with the code. The code may use turtle commands.
# Possible Turtle commands
`forward(length)`, `left(angle)`, `right(angle)`, `penup()`, `pendown()`, `color(color)`, `color(r, g, b)`, `goto(x, y)`, `clear()`, `angle(angle)`, `width(width)`, `showGrid()`, `randomColor_h()`, `strangeLine(length)`, `strangeSquare(length, step)`, `strangeCircle(radius)`, `strangeGalaxy(radius)`, `setSpeed(speed)`
# Error types
Report an error for any of the following:
## Spelling
- misspelled turtle command (`forwad(10)`)
- variable that is used with a different spelling than it was defined (`var linienFarbe = "red"; color(linienfarbe);`)
- misspelled JavaScript keyword or internal (`arr.lenght;`)
## Syntax
- missing `()` in a function call, an if statement or a loop (`forward 10;`)
- missing `"`/`'` around what is supposed to be a string (`color(red);`)
- for loop with `,` instead of `;` (`for (var i = 0, i < 10; i++)`)
- wrong syntax in any while-loop, for-loop, if-statement, function definition (`while { i++; (i < 10)}`)
## Semantic
- variable with name of a turtle command (`var forward = 10; forward(10);`)
- wrong number of arguments for a turtle command (`forward(10, 20);`)
- negative number in forward or width command (`forward(-10);`)
- using color with a non-english color name (`color("rot");`)
- non-booleans as conditions in if, loops (`let x = 4; if (x)`)
- assignment of turtle function result to a variable (`var x = forward(10);`)
- calculation without assignment (`let x = 5; x + 1;`)
- a user defined function that is never called
- an infinite loop (`for (var i = 0; i < 10; i--)`, `for (var i = 10; i > -1; i++)`)
- an assignment in a condition (`if (x = 5)`, `for (var i = 0; i = 10; i++)`)
- an if-statement/loop without curly braces (`if (x > 5) forward(10);`)
## Style
- using any combination of `left`, `right` and `angle` without a `forward` in between (`left(90); right(30);`)
- using any of `goto`, `color`, `width`, `penup`, `pendown` twice without a `forward` in between
- using `clear` directly after something is drawn (`forward(10); clear();`)
- an empty if-statement with a non-empty else block (`if (x > 5) {} else { forward(20); }`)
- the exact same code line/lines repeated 5 times or more directly one after the other without using a loop (`forward(10); forward(10); forward(10); forward(10); forward(10);`; only mark first appearance as error)
# Ignore errors
Do not report any other errors than the ones listed above! For example, ignore any missing or inconsistent use of semicolons, indentation, etc.
# Output format
Output nothing but JSON. The JSON object must have a single key `errors` that is a list of all errors. Each error is an object like this:
```json
{
  "line": 1,
  "original": "colour",
  "type": "spelling",
  "friendly": "`colour` ist kein Turtle Befehl. Meinst du vielleicht `color`?",
}
```
Any error object must represent one of the problems defined above with the line number of the error, the relevant part of the line that contains the error as it appears in the code, the type of the error as defined above and a simple, beginner-friendly german explanation of the problem. Remember to escape quotes in the JSON output.