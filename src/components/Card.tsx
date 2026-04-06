import { Layer, Image } from "react-konva";
import useImage from "use-image";

interface cardProps {
  src: string;
  cardSize: cardSize;
}

export interface cardSize {
  x: number;
  y: number;
  offset_x?: number;
  offset_y?: number;
}

export default function Card({ src, cardSize, ...rest }: cardProps) {
  const [image] = useImage(src, "anonymous");
  return (
    <Layer>
      <Image
        image={image}
        width={cardSize.x}
        height={cardSize.y}
        x={cardSize.offset_x || 0}
        y={cardSize.offset_y || 0}
        {...rest}
      ></Image>
    </Layer>
  );
}
