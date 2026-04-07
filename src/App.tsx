import "./App.css";
import { Stage, Layer, Text } from "react-konva";
import Card, { type cardSize } from "./components/Card";
import { useRef, useState } from "react";
import papiro from "./assets/papiro.jpg";
import carta from "./assets/carta_personaje.png";
import { Button, Grid, GridItem, Heading, HStack } from "@chakra-ui/react";
import NombrePersonaje from "./components/personaje/NombrePersonaje";
import DescripcionPersonaje from "./components/personaje/DescripcionPersonaje";
import RetratoPersonaje from "./components/personaje/RetratoPersonaje";
import { FaFileDownload } from "react-icons/fa";
import Avatar from "./components/personaje/Avatar";

function App() {
  const [texto, setTexto] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [desc, setDesc] = useState<string>("");

  const cardSize: cardSize = {
    x: 400,
    y: 283,
  };

  const lienzo_ref = useRef<any>(null);

  const character_portrait: cardSize = {
    x: 150,
    y: 125,
    offset_x: 220,
    offset_y: 40,
  };

  const handle_change = (e: string) => {
    setTexto(e);
  };

  // const handle_img = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0];
  //   if (!file) return;

  //   setImageTitle(e.target.name);

  //   const url = URL.createObjectURL(file);
  //   setImageUrl(url);
  // };

  const handle_desc_change = (e: string) => {
    setDesc(e);
  };

  // const handle_btn = () => {
  //   const origen: HTMLElement | null = document.querySelector("#imagen");

  //   if (origen) {
  //     html2canvas(origen, {
  //       width: cardSize.x,
  //       height: cardSize.y,
  //     }).then((c) => {
  //       const destino: HTMLElement | null = document.getElementById("destino");
  //       if (destino) {
  //         const hijo: ChildNode | null = destino.firstChild;
  //         if (hijo) {
  //           destino.replaceChild(c, hijo);
  //         } else {
  //           destino.appendChild(c);
  //         }
  //       }
  //     });
  //   }
  // };

  function downloadURI(uri: string, name: string) {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const handleExport = () => {
    if (lienzo_ref && lienzo_ref.current) {
      const uri = lienzo_ref.current.toDataURL();
      downloadURI(uri, (texto || "personaje") + ".png");
    }
  };

  return (
    <>
      <Heading size="6xl" margin={"4vh"}>
        Rivalva Card Maker
      </Heading>
      <Grid templateColumns="repeat(2, 1fr)">
        <GridItem>
          <div style={{ display: "flex" }}>
            <Stage
              width={cardSize.x}
              height={cardSize.y}
              id="imagen"
              className="konva-card"
              ref={lienzo_ref}
            >
              <Card src={papiro} cardSize={cardSize} />
              {imageUrl && (
                <Card src={imageUrl} cardSize={character_portrait} />
              )}
              <Card src={carta} cardSize={cardSize} />
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
          </div>
          <div id="destino"></div>
        </GridItem>
        <GridItem>
          <div className="formulario">
            <NombrePersonaje handler_change={handle_change} />

            <HStack>
              {imageUrl && <Avatar image_url={imageUrl} />}

              <RetratoPersonaje set_image_url={setImageUrl} />
            </HStack>
            <DescripcionPersonaje handler_change={handle_desc_change} />

            <Button colorPalette="teal" onClick={handleExport} variant="solid">
              <FaFileDownload /> Descargar Personaje
            </Button>
          </div>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
