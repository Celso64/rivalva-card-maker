import { Stage, Layer, Rect, Text, Image } from "react-konva";
import useImage from "use-image";

interface cardProps {
  src: string;
  cardSize: cardSize;
}

export interface cardSize {
  x: number;
  y: number;
}

export default function Card({ src, cardSize, ...rest }: cardProps) {
  const [image] = useImage(src, "anonymous");
  return (
    <Layer>
      <Image
        image={image}
        width={cardSize.x}
        height={cardSize.y}
        {...rest}
      ></Image>
    </Layer>
  );
}
