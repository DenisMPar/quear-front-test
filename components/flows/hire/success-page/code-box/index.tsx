import { TextButton } from "../../../../../ui/buttons/styled";
import {
  BodyTerciary,
  SubtitleTerciary,
  TitlePrimary,
} from "../../../../../ui/text";
import { TextBox } from "../../../../../ui/text-box/styled";
import {
  CodeBoxFooter,
  CodeBoxLine,
  CodeBoxLink,
  CodeBoxMain,
  CodeBoxRoot,
  CodeBoxTitle,
} from "./styled";

export function CodeBoxComponent() {
  return (
    <CodeBoxRoot>
      <CodeBoxMain>
        <SubtitleTerciary>Este es tu código de seguimiento:</SubtitleTerciary>
        <CodeBoxTitle>XM5768</CodeBoxTitle>
      </CodeBoxMain>
      <CodeBoxLine />
      <CodeBoxFooter>
        <BodyTerciary>
          Enviamos este código junto con toda la información sobre tu póliza a
          <b>juan@sanchez.com.</b> Usa este código para ver el estado de tu
          póliza en la sección{" "}
          <CodeBoxLink href={"/code"}>Código de seguimiento.</CodeBoxLink>
        </BodyTerciary>
        <div>
          <BodyTerciary>
            ¿No recibiste el código?{" "}
            <TextButton underline>Reenviar código</TextButton>
          </BodyTerciary>
        </div>
      </CodeBoxFooter>
    </CodeBoxRoot>
  );
}
