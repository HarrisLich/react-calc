
import React from 'react';
import './App.css';

let equation = { numOne: null, numTwo: null, op: null, lastPressed: null }

function App() {

  const [value, setValue] = React.useState("0");
  const [hiddenVal, setHiddenVal] = React.useState("0")

  const handleOperatorClick = (val) => {
    if ((val === "+" || val === "-" || val === "/" || val === "*" || val === "=" || val === "%") && (equation.lastPressed === "+" || equation.lastPressed === "-" || equation.lastPressed === "/" || equation.lastPressed === "*" || equation.lastPressed === "%")) {
      alert("Please select a second number and try again")
      return
    }
    if (val === "C") {
      setValue("0")
      setHiddenVal("0")
      equation.numOne = null;
      equation.numTwo = null;
      equation.op = null;
    }
    if (val === "+/-") {
      setValue((prev) => {
        if (prev === "0") return prev
        return parseFloat(prev) * -1
      })
      setHiddenVal(value)
    }

    if (equation.numOne != null && (val === "+" || val === "-" || val === "/" || val === "*") && value !== "0" && equation.lastPressed !== "=") {
      let ans = 0;
      equation.numTwo = value
      switch (equation.op) {
        case "+":
          ans = parseFloat(equation.numOne) + parseFloat(equation.numTwo)
          break;
        case "-":
          ans = parseFloat(equation.numOne) - parseFloat(equation.numTwo)
          break;
        case "/":
          ans = parseFloat(equation.numOne) / parseFloat(equation.numTwo)
          break;
        case "*":
          ans = parseFloat(equation.numOne) * parseFloat(equation.numTwo)
          break;
        case "%":
          ans = parseFloat(equation.numOne) / 100;
          break;
      }
      if (ans.toString().length >= 13) ans = ans.toPrecision(12)
      setValue(ans)
      equation.numOne = ans
      setHiddenVal("0")
    } else if (value !== "0" && (val === "+" || val === "-" || val === "/" || val === "*")) {
      equation.numOne = value;
      equation.op = val
      setValue("0")
      setHiddenVal("0")
    }

    if (val === "+" || val === "-" || val === "/" || val === "*" || val === "%") {
      equation.op = val;
    }

    if (val === "=" && equation !== null) {
      equation.numTwo = value;
      console.log(equation.numOne)
      console.log(equation.numTwo)
      console.log(equation.op)
      let ans = 0;
      switch (equation.op) {
        case "+":
          ans = parseFloat(equation.numOne) + parseFloat(equation.numTwo)
          break;
        case "-":
          ans = parseFloat(equation.numOne) - parseFloat(equation.numTwo)
          break;
        case "*":
          ans = parseFloat(equation.numOne) * parseFloat(equation.numTwo)
          break;
        case "/":
          ans = parseFloat(equation.numOne) / parseFloat(equation.numTwo)
          break;
        case "%":
          ans = parseFloat(equation.numOne) / 100;
          break;
      }
      if (ans.toString().length >= 13) ans = ans.toPrecision(12)
      setValue(ans)
      equation.numOne = value
      setHiddenVal("0")
    }
    equation.lastPressed = val
  }

  const handleNumberClick = (val) => {
    if (hiddenVal === "0") {
      setValue(val)
      setHiddenVal(val)
    } else if (value === "0") {
      setValue(val)
      setHiddenVal(val)
    } else setValue((prev) => { return prev + val })
    equation.lastPressed = val
  }


  return (
    <div className="w-full flex justify-center items-center" style={{ height: "calc(100vh)" }}>
      <div className="lg:w-[350px] lg:h-[600px] sm:h-[450px] grid grid-cols-4 grid-rows-6 sm:w-[275px] h-[300px] w-[200px] rounded-lg  bg-black">
        <div for="ans" className='w-full flex items-end col-span-4 md:px-2 px-2 justify-end text-white'>
          <h1 className="md:text-4xl sm:text-2xl">{value}</h1>
        </div>
        <div className="w-full h-full flex justify-center items-center md:py-2">
          <button onClick={() => handleOperatorClick("C")} className="rounded-full sm:w-14 sm:h-14 w-10 h-10 md:w-16 md:h-16 bg-gray-300 md:text-2xl font-bold">C</button>
        </div>
        <div className="w-full h-full flex justify-center items-center md:py-2">
          <button onClick={() => handleOperatorClick("+/-")} className="rounded-full sm:w-14 sm:h-14 w-10 h-10 md:w-16 md:h-16 bg-gray-300 md:text-2xl font-bold">+/-</button>
        </div>
        <div className="w-full h-full flex justify-center items-center md:py-2">
          <button className="rounded-full md:w-16 md:h-16 bg-gray-300 md:text-2xl sm:w-14 sm:h-14 w-10 h-10 font-bold">%</button>
        </div>
        <div className="w-full h-full flex justify-center items-center md:py-2">
          <button onClick={() => handleOperatorClick("/")} className="rounded-full sm:w-14 sm:h-14 w-10 h-10 md:w-16 md:h-16 bg-orange-400 md:text-2xl text-white font-bold">/</button>
        </div>
        <div className="w-full h-full flex justify-center items-center md:py-2">
          <button onClick={() => handleNumberClick("7")} className="rounded-full sm:w-14 sm:h-14 w-10 h-10 md:w-16 md:h-16 bg-gray-300 md:text-2xl">7</button>
        </div>
        <div className="w-full h-full flex justify-center items-center md:py-2">
          <button onClick={() => handleNumberClick("8")} className="rounded-full sm:w-14 sm:h-14 w-10 h-10 md:w-16 md:h-16 bg-gray-300 md:text-2xl">8</button>
        </div>
        <div className="w-full h-full flex justify-center items-center md:py-2">
          <button onClick={() => handleNumberClick("9")} className="rounded-full sm:w-14 sm:h-14 w-10 h-10 md:w-16 md:h-16 bg-gray-300 md:text-2xl">9</button>
        </div>
        <div className="w-full h-full flex justify-center items-center md:py-2">
          <button onClick={() => handleOperatorClick("*")} className="rounded-full sm:w-14 sm:h-14 w-10 h-10 md:w-16 md:h-16 bg-orange-400 md:text-2xl text-white font-bold">X</button>
        </div>
        <div className="w-full h-full flex justify-center items-center md:py-2">
          <button onClick={() => handleNumberClick("4")} className="rounded-full sm:w-14 sm:h-14 w-10 h-10 md:w-16 md:h-16 bg-gray-300 md:text-2xl">4</button>
        </div>
        <div className="w-full h-full flex justify-center items-center md:py-2">
          <button onClick={() => handleNumberClick("5")} className="rounded-full sm:w-14 sm:h-14 w-10 h-10 md:w-16 md:h-16 bg-gray-300 md:text-2xl">5</button>
        </div>
        <div className="w-full h-full flex justify-center items-center md:py-2">
          <button onClick={() => handleNumberClick("6")} className="rounded-full sm:w-14 sm:h-14 w-10 h-10 md:w-16 md:h-16 bg-gray-300 md:text-2xl">6</button>
        </div>
        <div className="w-full h-full flex justify-center items-center md:py-2">
          <button onClick={() => handleOperatorClick("-")} className="rounded-full sm:w-14 sm:h-14 w-10 h-10 md:w-16 md:h-16 bg-orange-400 md:text-2xl text-white font-bold">-</button>
        </div>
        <div className="w-full h-full flex justify-center items-center md:py-2">
          <button onClick={() => handleNumberClick("1")} className="rounded-full sm:w-14 sm:h-14 w-10 h-10 md:w-16 md:h-16 bg-gray-300 md:text-2xl">1</button>
        </div>
        <div className="w-full h-full flex justify-center items-center md:py-2">
          <button onClick={() => handleNumberClick("2")} className="rounded-full sm:w-14 sm:h-14 w-10 h-10 md:w-16 md:h-16 bg-gray-300 md:text-2xl">2</button>
        </div>
        <div className="w-full h-full flex justify-center items-center md:py-2">
          <button onClick={() => handleNumberClick("3")} className="rounded-full sm:w-14 sm:h-14 w-10 h-10 md:w-16 md:h-16 bg-gray-300 md:text-2xl">3</button>
        </div>
        <div className="w-full h-full flex justify-center items-center md:py-2">
          <button onClick={() => handleOperatorClick("+")} className="rounded-full sm:w-14 sm:h-14 w-10 h-10 md:w-16 md:h-16 bg-orange-400 md:text-2xl text-white font-bold">+</button>
        </div>
        <div className="w-full h-full flex justify-center items-center md:py-2 col-span-2">
          <button onClick={() => handleNumberClick("0")} className="rounded-full w-[88%] sm:h-14 py-1 px-3 md:w-[88%] md:h-16 bg-gray-300 md:text-2xl flex items-center justify-start md:px-6">0</button>
        </div>
        <div className="w-full h-full flex justify-center items-center md:py-2">
          <button onClick={() => handleNumberClick(".")} className="rounded-full sm:w-14 sm:h-14 w-10 h-10 md:w-16 md:h-16 bg-gray-300 md:text-2xl">.</button>
        </div>
        <div className="w-full h-full flex justify-center items-center md:py-2">
          <button onClick={() => handleOperatorClick("=")} className="rounded-full sm:w-14 sm:h-14 w-10 h-10 md:w-16 md:h-16 bg-orange-400 md:text-2xl text-white font-bold">=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
