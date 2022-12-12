import { DropDownComp } from "../dropdown";
import { FaqContainerQuestions, FaqRoot, FaqTitle } from "./styled";

export function FaqComponent() {
  return (
    <FaqRoot>
      <FaqTitle>Preguntas Frecuentes</FaqTitle>
      <FaqContainerQuestions>
        <DropDownComp
          title="¿Qué vino a solucionar Quear?"
          content="Elit laoreet hendrerit hendrerit quis urna. varius at nulla, cursus hendrerit nec commodo Donec quam massa viverra Morbi."
        />
        <DropDownComp
          title="¿Qué nos diferencia de otras aseguradoras?"
          content="Elit laoreet hendrerit hendrerit quis urna. varius at nulla, cursus hendrerit nec commodo Donec quam massa viverra Morbi."
        />
        <DropDownComp
          title="¿Cuánto tarda en emitirse mi póliza?"
          content="Elit laoreet hendrerit hendrerit quis urna. varius at nulla, cursus hendrerit nec commodo Donec quam massa viverra Morbi."
        />
        <DropDownComp
          title="¿Cuántas pólizas puedo obtener?"
          content="Elit laoreet hendrerit hendrerit quis urna. varius at nulla, cursus hendrerit nec commodo Donec quam massa viverra Morbi."
        />
        <DropDownComp
          title="¿Cuál es el teléfono de contacto?"
          content="Elit laoreet hendrerit hendrerit quis urna. varius at nulla, cursus hendrerit nec commodo Donec quam massa viverra Morbi."
        />
      </FaqContainerQuestions>
    </FaqRoot>
  );
}
