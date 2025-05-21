type PropTypes = {
	id: number;
	onDelete: (id: number) => void;
};

const DeleteButton = (props: PropTypes) => {
	const { id, onDelete } = props;

	return (
		<button
			type='button'
			className='contact-item__delete'
			onClick={() => onDelete(id)}>
			Delete
		</button>
	);
};

export default DeleteButton;
