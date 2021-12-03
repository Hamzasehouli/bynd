import classes from "./Button.module.css";

const Button = function (props) {
  console.log(props);
  return (
    <button onClick={props.method} className={classes[props.styl]}>
      {props.children}
    </button>
  );
};

export default Button;
