import "./W3.css";

function MenuHalf(props) {
    const classes =  'w3-half  w3-center ' + props.className;
    const styles = props.style;
    return(
        <div className = {classes} style = {styles}>
            {props.children}
        </div>
    );
}
export default MenuHalf;