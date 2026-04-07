import { Textarea } from "@chakra-ui/react";

export interface DescripcionPersonajeProps {
  handler_change: (e: string) => void;
}

export default function DescripcionPersonaje({
  handler_change,
}: DescripcionPersonajeProps) {
  return (
    <Textarea
      onChange={(e) => handler_change(e.target.value)}
      placeholder="Inserte descripcion del personaje"
      maxLength={200}
    />
  );
}
