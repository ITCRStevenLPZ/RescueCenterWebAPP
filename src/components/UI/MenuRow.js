import "./W3.css";

function MenuRow(props) {
    const classes =  'w3-row ' + props.className;
    const styles = props.style;
    return(
        <div className = {classes} style = {styles}>
            {props.children}
        </div>
    );
}
export default MenuRow;