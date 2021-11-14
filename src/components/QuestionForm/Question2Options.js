import "../QuestionForm.css";
import { useState } from "react";
import FormFooter from "../FormFooter";
import FormHeader from "./FormHeader";

function Question2Options(props) {
  const data = props.data;
  console.log(data);
  const childs = data.Child;

  function option1ClickedHandler(event) {
    event.preventDefault();
    props.nextEvent(childs[0].Child[0]);
  }
  function option2ClickedHandler(event) {
    event.preventDefault();
    props.nextEvent(childs[1].Child[0]);
  }


  return (
    <body>
      <div class="row">
        <div class="col-s-12 col-s-12">
          <div class="question">
            <h1 class="question">{data.QuestionExplanation}</h1>
          </div>

          <div class="row">
            <div class=".col-s-6 col-6 buttons">
              <button
                id="close-image"
                class="big-button"
                onClick={option1ClickedHandler}
              >
                <img src={require("../" + childs[0].OptionImage).default} />
              </button>
              <div class="row">
                <h1 class="option">{childs[0].Option}</h1>
              </div>
            </div>
            <div class="col-6 .col-s-6 buttons">
              <button
                id="close-image"
                class="big-button"
                onClick={option2ClickedHandler}
              >
                <img src={require("../" + childs[1].OptionImage).default} />
              </button>
              <div class="row">
                <h1 class="option">{childs[1].Option}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FormFooter></FormFooter>
    </body>
  );
}
export default Question2Options;
