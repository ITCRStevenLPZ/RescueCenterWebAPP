import "../QuestionForm.css";
import { useState } from "react";
import FormFooter from "../FormFooter";
import mammal from "../../Mammal.json";
import reptile from "../../Reptile.json";
import birds from "../../Birds.json";
import FormHeader from "./FormHeader";

const birdInfo = [
  <div class="col-8 col-s-8">
    <h1 class="info">Las Aves</h1>
    <p>
      Dentro de las aves que mas comunmente son rescatadas, se encuentran los
      tucanes.
    </p>
  </div>,
];
const mammalInfo = [
  <div class="col-8 col-s-8">
    <h1 class="info">Los Mamíferos</h1>
    <p>
      Dentro de los mamíferos que mas comúnmente son rescatados, se encuentran
      los felinos, venados y coyotes.
    </p>
  </div>,
];
const reptileInfo = [
  <div class="col-8 col-s-8">
    <h1 class="info">Los Reptiles</h1>
    <p>
      Dentro de los reptiles que mas frecuente son rescatados, se encuentran las
      serpientes y las iguanas.
    </p>
  </div>,
];

function QuestionForm(props) {
  const [animalInfo, setAnimalInfo] = useState(birdInfo);
  function animalInfoChangeHandler(event) {
    event.preventDefault();
    const obtainedValue = event.target.id;
    if (obtainedValue === "Bird") {
      setAnimalInfo(birdInfo);
    } else if (obtainedValue === "Mammal") {
      setAnimalInfo(mammalInfo);
    } else {
      setAnimalInfo(reptileInfo);
    }
  }

  function onButton1Pressed(event) {
    event.preventDefault();
    props.nextEvent(birds);
  }
  function onButton2Pressed(event) {
    event.preventDefault();
    props.nextEvent(reptile);
  }
  function onButton3Pressed(event) {
    event.preventDefault();
    props.nextEvent(mammal);
  }

  return (
    <div>
      {" "}
      <body>
        <div class="row">
          <div class="col-s-12 col-s-12">
            <div class="question">
              <h1 class="question">Selecciona la especie del Animal</h1>
            </div>

            <div class="row">
              <div class="col-4 col-s-4 buttons">
                <button
                  id="close-image"
                  class="big-button"
                  onClick={onButton1Pressed}
                >
                  <img src={require("../Resources/Bird.png").default} />
                </button>
                <div class="row">
                  <h1 class="option">Ave</h1>
                </div>
              </div>
              <div class="col-4 col-s-4 buttons" onClick={onButton2Pressed}>
                <button id="close-image" class="big-button">
                  <img src={require("../Resources/Reptile2.png").default} />
                </button>
                <div class="row">
                  <h1 class="option">Reptil</h1>
                </div>
              </div>
              <div class="col-4 col-s-4 buttons" onClick={onButton3Pressed}>
                <button id="close-image" class="big-button">
                  <img src={require("../Resources/Mammal2.png").default} />
                </button>
                <div class="row">
                  <h1 class="option">Mamífero</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="question">
            <h1 class="question">Información Adicional</h1>
          </div>
          <div class="col-4 col-s-4 menu">
            <ul>
              <li id="Bird" onClick={animalInfoChangeHandler}>
                Aves
              </li>
              <li id="Reptile" onClick={animalInfoChangeHandler}>
                Reptiles
              </li>
              <li id="Mammal" onClick={animalInfoChangeHandler}>
                Mamíferos
              </li>
            </ul>
          </div>

          {animalInfo}
        </div>
      </body>
      <FormFooter></FormFooter>
    </div>
  );
}
export default QuestionForm;
