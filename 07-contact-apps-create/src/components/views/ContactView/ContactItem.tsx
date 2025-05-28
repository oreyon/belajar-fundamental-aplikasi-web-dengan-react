import ContactItemBody from './ContactItemBody';
import ContactItemImage from './ContactItemImage';
import DeleteButton from './DeleteButton';

type PropTypes = {
	id: number;
	name: string;
	tag: string;
	imageUrl: string;
	onDelete: (id: number) => void;
};

function ContactItem(props: PropTypes) {
	const { id, name, tag, imageUrl, onDelete } = props;
	return (
		<div className='contact-item'>
			<ContactItemImage imageUrl={imageUrl} />
			<ContactItemBody name={name} tag={tag} />
			<DeleteButton onDelete={onDelete} id={id} />
		</div>
	);
}

export default ContactItem;
