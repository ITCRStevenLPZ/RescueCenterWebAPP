import "./W3.css";
import "./css/Buttons.css"
import "./css/Text.css"

function MenuImagePad(props) {
  const data = props.imagePadData;
  console.log(data);
  const classes = props.className;
  return (
    <div className={classes}>
      <h1 data-shadow={data.header}>{data.header}</h1>
      <img src={data.image.default} alt={data.imageAlt} style={{ width: data.imgSize }}/>
      <div class="w3-center-align w3-padding-large">
      <a href={data.ref}>
        <button class="big-button buttonMainMenu">{data.buttonText}</button>
      </a>
      </div>
      {props.children}
    </div>
  );
}
export default MenuImagePad;
