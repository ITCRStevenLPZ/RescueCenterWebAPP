import "./W3.css";
import "./css/Buttons.css";
import "./css/Text.css";

function ImagenContainer(props) {
  const data = props.imagePadData;
  console.log(data);
  const classes = "w3-padding-64 " + props.className;
  return (
    <div className={classes}>
      <img src={data.image.default} alt={data.imageAlt} style={{ width: data.imgSize }}/>
    </div>
  );
}
export default ImagenContainer;