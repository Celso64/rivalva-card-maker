import {
  CloseButton,
  FileUpload,
  Input,
  InputGroup,
  type FileUploadFileAcceptDetails,
} from "@chakra-ui/react";
import { LuFileImage } from "react-icons/lu";

export interface RetratoPersonajeProps {
  set_image_url: (i: string) => void;
}

export default function RetratoPersonaje({
  set_image_url,
}: RetratoPersonajeProps) {
  const handler = (f: FileUploadFileAcceptDetails) => {
    const file = f.files.pop();

    if (file) {
      const url = URL.createObjectURL(file);
      set_image_url(url);
    }
  };

  return (
    <>
      {/* <Code colorPalette="green">accepted: png, jpg, jpeg, webp</Code> */}
      <FileUpload.Root gap="1" maxWidth="300px" onFileAccept={handler}>
        <FileUpload.HiddenInput />
        <FileUpload.Label>
          Seleccione una imagen para el personaje
        </FileUpload.Label>
        <InputGroup
          startElement={<LuFileImage />}
          endElement={
            <FileUpload.ClearTrigger asChild>
              <CloseButton
                me="-1"
                size="xs"
                variant="plain"
                focusVisibleRing="inside"
                focusRingWidth="2px"
                pointerEvents="auto"
              />
            </FileUpload.ClearTrigger>
          }
        >
          <Input asChild>
            <FileUpload.Trigger>
              <FileUpload.FileText lineClamp={1} />
            </FileUpload.Trigger>
          </Input>
        </InputGroup>
      </FileUpload.Root>
    </>
  );
}
