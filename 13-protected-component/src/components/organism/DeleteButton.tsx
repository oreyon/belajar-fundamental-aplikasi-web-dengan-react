

interface PropTypes {
  id: number;
  onDelete: (id: number) => void;
}

function DeleteButton(props: PropTypes) {
  const { id, onDelete } = props;
  return <button aria-label="delete" type={"button"} className='contact-item__delete' onClick={() => onDelete(id)}>X</button>
}

export default DeleteButton;