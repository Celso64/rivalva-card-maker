import { Card, Image } from "@chakra-ui/react";

export interface AvatarProps {
  image_url: string;
  alt_text: string;
}

export default function Avatar({ image_url, alt_text }: AvatarProps) {
  const largo: number = 40;
  return (
    <Card.Root height={40} width={40} overflow="hidden">
      <Image src={image_url} alt={alt_text} height={largo} />
      <Card.Body>
        <Card.Description>{alt_text}</Card.Description>
      </Card.Body>
    </Card.Root>
  );
}
