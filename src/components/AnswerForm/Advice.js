import "../QuestionForm.css";
import { useState } from "react";
import FormFooter from "../FormFooter";
import FormHeader from "../QuestionForm/FormHeader";

function Advice(props) {
  const data = props.data;
  console.log(data);
  const childs = data.Child;

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
              <img class = "responsive" src={require("../" + data.AnswerImage).default} />
            </div>
          </div>
        </div>
      </div>

    <FormFooter></FormFooter>
    </body>
  );
}
export default Advice;
