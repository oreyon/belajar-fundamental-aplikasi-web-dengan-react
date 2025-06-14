import type { ReactNode } from "react";
import PropTypes from "prop-types";

interface PropTypes {
  label: string;
  children: ReactNode;
}
const Row = (props: PropTypes) => {
  const { label, children } = props;


  return (
    <div className="row">
      <label>{label}</label>
      <div className="row__content">{children}</div>
    </div>
  );
}

Row.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Row