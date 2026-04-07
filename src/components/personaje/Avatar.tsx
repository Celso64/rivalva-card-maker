import { Card, Image } from "@chakra-ui/react";

export interface AvatarProps {
  image_url: string;
}

export default function Avatar({ image_url }: AvatarProps) {
  const largo: number = 40;
  return (
    <Card.Root height={40} width={40} overflow="hidden">
      <Image src={image_url} alt={"character"} height={largo} />
    </Card.Root>
  );
}
