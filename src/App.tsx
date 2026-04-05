import "./App.css";
import { Stage, Layer, Rect, Text } from "react-konva";
import Card, { type cardSize } from "./components/Card";

function App() {
  const cardSize: cardSize = {
    x: 400,
    y: 283,
  };
  return (
    <>
      <h1>Rivalva Card Maker</h1>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Card src="src/assets/carta_personaje.jpeg" cardSize={cardSize}></Card>
        <Layer>
          <Text
            text="Hola Mundo"
            fill={"white"}
            fontSize={20}
            x={234}
            y={16}
          ></Text>
        </Layer>
      </Stage>
    </>
  );
}

export default App;
