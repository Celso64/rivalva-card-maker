import "./App.css";
import { Stage, Layer, Rect, Text } from "react-konva";
import Card, { type cardSize } from "./components/Card";
import { useState, type ChangeEvent } from "react";
import html2canvas from "html2canvas";

function App() {
  const [texto, setTexto] = useState<string>("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [desc, setDesc] = useState<string>("");

  const cardSize: cardSize = {
    x: 400,
    y: 283,
  };

  const character_portrait: cardSize = {
    x: 150,
    y: 125,
    offset_x: 220,
    offset_y: 40,
  };

  const textoPrueba = "Lorem ipsum dolor";

  const handle_change = (e: ChangeEvent<HTMLInputElement>) => {
    setTexto(e.target.value);
  };

  const handle_img = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImageFile(file);

    const url = URL.createObjectURL(file);
    setImageUrl(url);
  };

  const handle_desc_change = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDesc(e.target.value);
  };

  const handle_btn = () => {
    const origen: HTMLElement | null = document.querySelector("#imagen");

    if (origen) {
      html2canvas(origen, {
        width: cardSize.x,
        height: cardSize.y,
      }).then((c) => {
        const destino: HTMLElement | null = document.getElementById("destino");
        if (destino) {
          const hijo: ChildNode | null = destino.firstChild;
          if (hijo) {
            destino.replaceChild(c, hijo);
          } else {
            destino.appendChild(c);
          }
        }
      });
    }
  };

  return (
    <>
      <h1>Rivalva Card Maker</h1>
      <div style={{ display: "flex" }}>
        <Stage
          width={cardSize.x}
          height={cardSize.y}
          id="imagen"
          className="konva-card"
        >
          <Card src="src/assets/papiro.jpg" cardSize={cardSize} />
          {imageUrl && <Card src={imageUrl} cardSize={character_portrait} />}
          <Card src="src/assets/carta_personaje.png" cardSize={cardSize} />
          <Layer>
            <Text
              text={texto}
              fill={"black"}
              fontSize={12}
              x={234}
              y={20}
              fontFamily="Papyrus"
            ></Text>
          </Layer>

          <Layer>
            <Text
              text={desc}
              fill={"black"}
              fontSize={12}
              x={210}
              y={170}
              width={160}
              height={180}
              fontFamily="Papyrus"
            ></Text>
          </Layer>
        </Stage>
        <div className="formulario">
          <input
            type="text"
            onChange={handle_change}
            placeholder="Inserte nombre del personaje"
            className="textfield"
            maxLength={20}
          />
          <div>
            {(imageUrl && (
              <img src={imageUrl} alt="preview" style={{ width: 150 }} />
            )) || <p>Seleccione una imagen para el personaje</p>}
            <input type="file" accept="image/*" onChange={handle_img} />
          </div>
          <textarea
            value={desc}
            onChange={handle_desc_change}
            placeholder="Inserte descripcion del personaje"
            className="textfield_descripcion"
            maxLength={200}
          />
          <button onClick={handle_btn} className="btn_gen">
            Generar
          </button>
        </div>
      </div>

      <div id="destino"></div>
    </>
  );
}

export default App;
