import PropTypes from "prop-types";

const Button = ({ children, className }) => {
  return <button className={className}>{children}</button>;
};
Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
export default Button;
