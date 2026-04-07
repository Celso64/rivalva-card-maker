import "./App.css";
import { Stage, Layer, Text } from "react-konva";
import Card from "./components/Card";
import { useRef, useState } from "react";
import papiro from "./assets/papiro.jpg";
import carta from "./assets/carta_personaje.png";
import { Button, Grid, GridItem, Heading, HStack } from "@chakra-ui/react";
import NombrePersonaje from "./components/personaje/NombrePersonaje";
import DescripcionPersonaje from "./components/personaje/DescripcionPersonaje";
import RetratoPersonaje from "./components/personaje/RetratoPersonaje";
import { FaFileDownload } from "react-icons/fa";
import Avatar from "./components/personaje/Avatar";
import {
  CHARACTER_CARD_SIZE,
  CHARACTER_PORTRAIT_SIZE,
} from "./constants/CardSize";
import { downloadURI } from "./utils/DownloadURI";
import "./assets/fonts/papyrus.ttf";

function App() {
  const [nombre_personaje, set_nombre_personaje] = useState<string>("");
  const [image_url, set_image_url] = useState<string | null>(null);
  const [descripcion_personaje, set_descripcion_personaje] =
    useState<string>("");

  const lienzo_ref = useRef<any>(null);

  const handle_change = (e: string) => set_nombre_personaje(e);
  const handle_desc_change = (e: string) => set_descripcion_personaje(e);

  const handle_export = () => {
    if (lienzo_ref && lienzo_ref.current) {
      const uri = lienzo_ref.current.toDataURL();
      downloadURI(uri, (nombre_personaje || "personaje") + ".png");
    }
  };

  return (
    <>
      <Heading size="6xl" margin={"4vh"} fontFamily={"papyrus"}>
        Rivalva Card Maker
      </Heading>
      <Grid templateColumns="repeat(2, 1fr)">
        <GridItem>
          <div style={{ display: "flex" }}>
            <Stage
              width={CHARACTER_CARD_SIZE.x}
              height={CHARACTER_CARD_SIZE.y}
              id="imagen"
              className="konva-card"
              ref={lienzo_ref}
            >
              <Card src={papiro} cardSize={CHARACTER_CARD_SIZE} />
              {image_url && (
                <Card src={image_url} cardSize={CHARACTER_PORTRAIT_SIZE} />
              )}
              <Card src={carta} cardSize={CHARACTER_CARD_SIZE} />
              <Layer>
                <Text
                  text={nombre_personaje}
                  fill={"black"}
                  fontSize={12}
                  x={220}
                  y={16}
                  width={150}
                  height={24}
                  fontFamily="Papyrus"
                  align="center"
                  verticalAlign="middle"
                ></Text>
              </Layer>

              <Layer>
                <Text
                  text={descripcion_personaje}
                  fill={"black"}
                  fontSize={12}
                  x={210}
                  y={165}
                  width={165}
                  height={100}
                  fontFamily="Papyrus"
                  align="center"
                  verticalAlign="middle"
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
              {image_url && <Avatar image_url={image_url} />}

              <RetratoPersonaje set_image_url={set_image_url} />
            </HStack>
            <DescripcionPersonaje handler_change={handle_desc_change} />

            <Button colorPalette="teal" onClick={handle_export} variant="solid">
              <FaFileDownload /> Descargar Personaje
            </Button>
          </div>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
