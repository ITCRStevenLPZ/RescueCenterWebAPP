import "./QuestionForm.css";
import { useState } from "react";

function FormFooter(props) {
  return (
    <div class="footer">
      <div class="row">
        <div id="header-image" class="col-s-12 col-2">
          <img
            class="responsive"
            src={require("./Resources/LogoTransp.png").default}
          />
        </div>
        <div class="col-s-12 col-8">
          <p>
            El propósito de esta guía es el de poder agilizar el proceso de
            rescate de los animales.
          </p>
        </div>
        <div class="col-s-12 col-2"></div>
      </div>
    </div>
  );
}
export default FormFooter;
