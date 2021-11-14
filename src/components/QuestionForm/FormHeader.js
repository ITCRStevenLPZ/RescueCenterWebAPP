import "../UI/W3.css";

function FormHeader(props) {
  const data = props.data;
  function optionMenuClickedHandler(event) {
    event.preventDefault();
    props.goToMenu();
  }
  return (
    <div class="header">
      <div class="row">
        <div class=".col-s-3 col-3 buttons">
          <button
            class="big-button buttonMenu"
            onClick={optionMenuClickedHandler}
          >
            <h1 class="menu-button">Ir al Menú</h1>
          </button>
        </div>
        <div class=".col-s-6 col-6">
          <h1>{data}</h1>
        </div>
        <div class=".col-s-3 col-3"></div>
      </div>
    </div>
  );
}
export default FormHeader;
