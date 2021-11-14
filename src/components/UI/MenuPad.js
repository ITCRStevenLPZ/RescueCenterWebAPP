import "./W3.css";
import "./css/Text.css"
import "./css/Buttons.css"

function MenuPad(props) {

  function onButtonPressed(event) {
    event.preventDefault();
    props.onPressedMenuButton();
  }
  const data = props.padData;
  console.log(data);  
  const classes = "w3-padding-64 " + props.className;
  return (
    <div className={classes}>
      <h1 data-shadow={data.header}>{data.header}</h1>
      <h4>{data.description}</h4>
      <button class="big-button buttonMainMenu" onClick = {onButtonPressed}>{data.buttonText}</button>
      {props.children}
    </div>
  );
}
export default MenuPad;
