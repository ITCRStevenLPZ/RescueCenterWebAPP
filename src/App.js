import "./components/UI/W3.css";
import MenuRow from "./components/UI/MenuRow";
import MenuHalf from "./components/UI/MenuHalf";
import MenuPad from "./components/UI/MenuPad";
import MenuImagePad from "./components/UI/MenuImagePad";
import GamePad from "./components/UI/GamePad";
import QuestionForm from "./components/QuestionForm/QuestionForm";
import Question3Options from "./components/QuestionForm/Question3Options";
import Question2Options from "./components/QuestionForm/Question2Options";
import guide from "./Guide.json";

import Advice from "./components/AnswerForm/Advice";
import AdviceExtra from "./components/AnswerForm/AdviceExtra";
import AdviceNumber from "./components/AnswerForm/AdviceNumber";
import { useState } from "react";
import FormHeader from "./components/QuestionForm/FormHeader";
import Login from "./components/Account/Login";

const pads_es = [
  {
    header: "¡Evitemos rescates innecesarios!",
    description:
      "Nosotros te ayudamos, da click al botón de abajo para completar un formulario para guiarte en este proceso.",
    buttonText: "Ir al Formulario",
  },
  {
    header: "¡Juegos de la Plataforma Educativa!",
    description:
      "El Rescue Center cuenta con juegos para su plataforma educativa, ¡Disfruta de ellos!",
    buttonText: "¡Jugar!",
  },
  {
    header: "Configuración",
    description: "¡Si eres de la organización, ingresa acá!",
    buttonText: "¡Iniciar Sesión!",
  },
];

const imagePads_es = [
  {
    header: "¡Conocé nuestra Organización!",
    image: require("./components/Resources/Logo.png"),
    imageAlt: "ZooAve logo",
    imgSize: "50%",
    buttonText: "¡Ir al Página Principal!",
    ref: "https://www.rescatewildlife.org/",
  },
  {
    header: "!Colabora en el Rescue Center!",
    image: require("./components/Resources/Grecia.jpg"),
    imageAlt: "Tucan Grecia",
    imgSize: "40%",
    buttonText: "¡Dona y colabora!",
    ref: "https://www.rescatewildlife.org/donate/",
  },
];

const imageContainers_es = [
  {
    Text: "",
    image: require("./components/Resources/Logo.png"),
    imageAlt: "ZooAve logo",
    imgSize: "20%",
  },
  {},
];

const gamePads_es = [
  {
    header: "¡Aprende Jugando con TrashCatcher!",
  },
  {},
];

const prueba = {
  Type: "An",
  Title: "¿Qué debes hacer?",
  Subtitle: "¡Sigue estos consejos para el bien del ave!",
  AnswerType: "Advice-Number",
  Answer:
    "Si es un adulto y no es capaz de volar, debe ser llevado a un centro de rescate. Comuníquese a la oficina SINAC más cercana para solicitar ayuda o comuniquese con nosotros vía WhatsApp",
  AnswerImage: "Resources/BrokenBird.jpg",
  Contacts: [
    {
      Name: "SINAC",
      Description:
        "Comunicate vía teléfono con el SINAC o bien por los medios de comunicación del SINAC, ingresando al enlace a continuación.",
      Number: "2522-6500",
      WebPage: "http://www.sinac.go.cr/ES/contac/Paginas/default.aspx",
    },
    {
      Name: "Wildlife Rescue Center (ZooAve)",
      Description: "Número de Contacto ZooAve",
      Number: "6058-3898",
      WebPage: "https://www.rescatewildlife.org/",
    },
  ],
};

function App() {
  const mainMenu = [
    <div>
      <MenuRow>
        <MenuHalf className={"w3-lime"} style={{ height: "900px" }}>
          <MenuPad
            onPressedMenuButton={OnGuidePressedHandler}
            padData={pads_es[0]}
          ></MenuPad>
        </MenuHalf>
        <MenuHalf
          className={"w3-light-gray w3-container"}
          style={{ height: "900px" }}
        >
          <MenuImagePad
            imagePadData={imagePads_es[0]}
            className="w3-center"
          ></MenuImagePad>
          <MenuPad
            onPressedMenuButton={OnGuidePressedHandler}
            padData={pads_es[2]}
          ></MenuPad>
        </MenuHalf>
        <MenuHalf
          className={"w3-green w3-container"}
          style={{ height: "900px" }}
        ></MenuHalf>
        <MenuHalf className={"w3-sand"} style={{ height: "900px" }}>
          <MenuImagePad
            className="w3-center"
            imagePadData={imagePads_es[1]}
          ></MenuImagePad>
          <MenuRow>
            <div class="w3-half"></div>
            <div class="w3-half"></div>
          </MenuRow>
        </MenuHalf>
      </MenuRow>
    </div>,
  ];

  const login_view = [<Login></Login>];

  //<GamePad gamePadData={gamePads_es[0]} className="w3-center"></GamePad>
  const [onDisplay, setOnDisplay] = useState(mainMenu);

  function OnGuidePressedHandler() {
    setOnDisplay([
      <div>
        {" "}
        <FormHeader data={guide.Question} goToMenu={onGoToMenuPressed} />
        <Question2Options
          data={guide}
          nextEvent={setNextEventGuide}
        ></Question2Options>
      </div>,
    ]);
  }
  function onGoToMenuPressed() {
    setOnDisplay(mainMenu);
  }

  function setNextEventGuide(e) {
    console.log(e);
    const nextType = e.Type;
    if (nextType == "Q") {
      if (e.QuestionType == "2-Options") {
        setOnDisplay([
          <div>
            {" "}
            <FormHeader goToMenu={onGoToMenuPressed} data={e.Question} />
            <Question2Options
              data={e}
              nextEvent={setNextEventGuide}
            ></Question2Options>
          </div>,
        ]);
      } else {
        setOnDisplay([
          <div>
            <FormHeader goToMenu={onGoToMenuPressed} data={e.Question} />
            <Question3Options
              data={e}
              nextEvent={setNextEventGuide}
            ></Question3Options>
          </div>,
        ]);
      }
    } else if (nextType == "An") {
      if (e.AnswerType == "Advice") {
        setOnDisplay([
          <div>
            <FormHeader goToMenu={onGoToMenuPressed} data={e.Title} />
            <Advice data={e} nextEvent={setNextEventGuide}></Advice>
          </div>,
        ]);
      } else if (e.AnswerType == "Advice-Number") {
        setOnDisplay([
          <div>
            <FormHeader goToMenu={onGoToMenuPressed} data={e.Title} />
            <AdviceNumber data={e} nextEvent={setNextEventGuide}></AdviceNumber>
          </div>,
        ]);
      } else {
        setOnDisplay([
          <div>
            <FormHeader goToMenu={onGoToMenuPressed} data={e.Title} />
            <AdviceExtra data={e} nextEvent={setNextEventGuide}></AdviceExtra>,
          </div>,
        ]);
      }
    } else if (nextType == "Ex") {
      setOnDisplay(mainMenu);
    } else if (nextType == "Gui") {
      setOnDisplay([
        <div>
          {" "}
          <FormHeader goToMenu={onGoToMenuPressed} data="Especie del Animal" />
          <QuestionForm nextEvent={setNextEventGuide}></QuestionForm>,
        </div>,
      ]);
    }
  }
  return <div>{onDisplay}</div>;
}

export default App;
