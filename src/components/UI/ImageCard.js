import "./W3.css";

function MenuImagePad(props) {
  const data = props.imagePadData;
  console.log(data);
  const classes = "w3-padding-64 " + props.className;
  return (
    <div className={classes}>
      <h1>{data.header}</h1>
      <img src={data.image.default} alt={data.imageAlt} style={{ width: data.imgSize }}/>
      <div class="w3-center-align w3-padding-large">
        <button class="w3-button w3-black w3-round-xxlarge w3-hover-khaki">{data.buttonText}</button>
      </div>
      {props.children}
    </div>
  );
}
export default MenuImagePad;