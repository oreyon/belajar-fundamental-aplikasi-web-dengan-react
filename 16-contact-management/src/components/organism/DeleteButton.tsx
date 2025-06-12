import PropTypes from "prop-types";

interface PropTypes {
  id: string | number;
  onDelete: (id: string | number) => void;
}

function DeleteButton(props: PropTypes) {
  const { id, onDelete } = props;
  return <button aria-label="delete" type={"button"} className='contact-item__delete' onClick={() => onDelete(id)}>X</button>
}

DeleteButton.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default DeleteButton;