import { DropDownComp } from "../dropdown";
import { FaqContainerQuestions, FaqRoot, FaqTitle } from "./styled";

const FrecuentQuestions = [
  {
    title: "¿Qué vino a solucionar Quear?",
    content:
      "Elit laoreet hendrerit hendrerit quis urna. varius at nulla, cursus hendrerit nec commodo Donec quam massa viverra Morbi.",
  },
  {
    title: "¿Qué nos diferencia de otras aseguradoras?",
    content:
      "Elit laoreet hendrerit hendrerit quis urna. varius at nulla, cursus hendrerit nec commodo Donec quam massa viverra Morbi.",
  },
  {
    title: "¿Cuánto tarda en emitirse mi póliza?",
    content:
      "Elit laoreet hendrerit hendrerit quis urna. varius at nulla, cursus hendrerit nec commodo Donec quam massa viverra Morbi.",
  },
  {
    title: "¿Cuántas pólizas puedo obtener?",
    content:
      "Elit laoreet hendrerit hendrerit quis urna. varius at nulla, cursus hendrerit nec commodo Donec quam massa viverra Morbi.",
  },
  {
    title: "¿Cuál es el teléfono de contacto?",
    content:
      "Elit laoreet hendrerit hendrerit quis urna. varius at nulla, cursus hendrerit nec commodo Donec quam massa viverra Morbi.",
  },
];

export function FaqComponent() {
  return (
    <FaqRoot>
      <FaqTitle>Preguntas Frecuentes</FaqTitle>
      <FaqContainerQuestions>
        {FrecuentQuestions.map((question) => {
          return (
            <DropDownComp
              key={question.title}
              title={question.title}
              content={question.content}
            />
          );
        })}
      </FaqContainerQuestions>
    </FaqRoot>
  );
}
