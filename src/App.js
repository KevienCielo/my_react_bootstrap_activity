import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { useState } from "react";
import "./App.css";

function App() {
  const [firstNum, setFirstNum] = useState("");
  const [secondNum, setSecondNum] = useState("");
  const [sum, setSum] = useState("");
  const [difference, setDifference] = useState("");
  const [product, setProduct] = useState("");
  const [quotient, setQuotient] = useState("");
  const [sumVariant, setSumVariant] = useState("1");
  const [diffVariant, setDiffVariant] = useState("2");
  const [prodVariant, setProdVariant] = useState("3");
  const [quoVariant, setQuoVariant] = useState("4");

  const handleOperation = (event) => {
    event.preventDefault();
    const add = Number(firstNum) + Number(secondNum);
    const sub = Number(firstNum) - Number(secondNum);
    const mul = Number(firstNum) * Number(secondNum);
    const div = Number(firstNum) / Number(secondNum);
    setSum(`The sum of ${firstNum} and ${secondNum} is "${add}"`);
    setDifference(`The difference of ${firstNum} and ${secondNum} is "${sub}"`);
    setProduct(`The product of ${firstNum} and ${secondNum} is "${mul}"`);
    setQuotient(`The quotient of ${firstNum} and ${secondNum} is "${div}"`);
    setSumVariant("primary");
    setDiffVariant("secondary");
    setProdVariant("info");
    setQuoVariant("light");
  };

  return (
    <div className="App container">
      <div className="row">
        <Form className="w-25 mt-5 col-6" onSubmit={handleOperation}>
          <legend className="text-center">Enter two numbers</legend>
          <FloatingLabel
            controlId="firstNumber"
            label="Enter first number"
            className="mb-3 p-1"
          >
            <Form.Control
              type="number"
              placeholder="Enter first number"
              value={firstNum}
              onChange={(e) => setFirstNum(e.target.value)}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="secondNumber"
            label="Enter second number"
            className="p-1"
          >
            <Form.Control
              type="number"
              placeholder="Enter second number"
              value={secondNum}
              onChange={(e) => setSecondNum(e.target.value)}
            />
          </FloatingLabel>
          <Button variant="primary" type="submit" value={`submit`}>
            Operate
          </Button>
        </Form>

        <Form className="w-25 col-6">
          <Alert key={sumVariant} variant={sumVariant}>
            {sum}
          </Alert>
          <Alert key={diffVariant} variant={diffVariant}>
            {difference}
          </Alert>
          <Alert key={prodVariant} variant={prodVariant}>
            {product}
          </Alert>
          <Alert key={quoVariant} variant={quoVariant}>
            {quotient}
          </Alert>
        </Form>
      </div>
    </div>
  );
}

export default App;
