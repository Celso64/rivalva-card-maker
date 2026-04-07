import { Input } from "@chakra-ui/react";

export interface NombrePersonajeProps {
  handler_change: (e: string) => void;
}

export default function NombrePersonaje({
  handler_change,
}: NombrePersonajeProps) {
  return (
    <Input
      placeholder="Inserte nombre del personaje"
      maxLength={20}
      onChange={(e) => handler_change(e.target.value)}
      type="text"
    />
  );
}
