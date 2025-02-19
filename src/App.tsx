// import { useState } from "react";
import Card from "./components/Card";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Card className="">
        <Button variant="outline-primary">Hola Mundo</Button>
        <Alert variant="danger">An example alert with an icon</Alert>
      </Card>
    </>
  );
}

export default App;
