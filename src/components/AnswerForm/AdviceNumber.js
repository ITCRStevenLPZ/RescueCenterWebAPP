import "../QuestionForm.css";
import { useState } from "react";
import FormFooter from "../FormFooter";
import FormHeader from "../QuestionForm/FormHeader";

function AdviceNumber(props) {
  const data = props.data;
  const contacts = data.Contacts;

  const defaultContactData0 = [
    <div class="col-8 col-s-8">
      <h1 class="info">{contacts[0].Name}</h1>
      <p>{contacts[0].Description}</p>
      <h1 class="info">Contacto</h1>
      <p>{contacts[0].Number}</p>
      <a href={contacts[0].WebPage}>
        <h1 class="link">Clickea acá para ir a la a Página Web</h1>
      </a>
    </div>,
  ];
  const defaultContactData1 = [
    <div class="col-8 col-s-8">
      <h1 class="info">{contacts[1].Name}</h1>
      <p>{contacts[1].Description}</p>
      <h1 class="info">Contacto</h1>
      <p>{contacts[1].Number}</p>
      <a href={contacts[1].WebPage}>
        <h1 class="link">Clickea acá para ir a la a Página Web</h1>
      </a>
    </div>,
  ];

  const [contactInfo, setContactInfo] = useState(defaultContactData0);

  function contactInfoChangeHandler(event) {
    event.preventDefault();
    const obtainedValue = event.target.id;
    if (obtainedValue === contacts[0].Name) {
      setContactInfo(defaultContactData0);
    } else if (obtainedValue === contacts[1].Name) {
      setContactInfo(defaultContactData1);
    }
  }

  return (
    <body>
      <div class="row">
        <div class="col-s-12 col-s-12">
          <div class="question">
            <h1 class="question">{data.Subtitle}</h1>
          </div>

          <div class="row">
            <div class="col-12 col-s-12 buttons">
              <h1 class="answer">{data.Answer}</h1>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-s-12 buttons">
              <img
                class="responsive"
                src={require("../" + data.AnswerImage).default}
              />
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="question">
          <h1 class="question">Información de Contactos</h1>
        </div>
        <div class="col-4 col-s-4 menu">
          <ul>
            <li id={contacts[0].Name} onClick={contactInfoChangeHandler}>
              {contacts[0].Name}
            </li>
            <li id={contacts[1].Name} onClick={contactInfoChangeHandler}>
              {contacts[1].Name}
            </li>
          </ul>
        </div>
        {contactInfo}
      </div>

      <FormFooter></FormFooter>
    </body>
  );
}
export default AdviceNumber;
