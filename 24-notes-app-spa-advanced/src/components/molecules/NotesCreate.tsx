import {
	useContext,
	useState,
	type ChangeEvent,
	type FormEvent,
	type KeyboardEvent,
} from 'react';
import PropTypes from 'prop-types';
import LanguageContext from '../../contexts/LanguageContext';

interface PropTypes {
	createNote: (title: string, body: string) => void;
}

const NotesCreate = (props: PropTypes) => {
	const { createNote } = props;
	const { language } = useContext(LanguageContext);
	const [formCreateNote, setFormCreateNote] = useState({
		title: '',
		body: '',
		maxTitleLength: 50,
	});

	const handleInputChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormCreateNote((prev) => ({
			...prev,
			[name]: value,
		}));

		if (name === 'title' && value.length >= formCreateNote.maxTitleLength) {
			setFormCreateNote((prev) => ({
				...prev,
				title: prev.title.slice(0, formCreateNote.maxTitleLength),
			}));
			return;
		}
	};

	const handleSubmitCreateNote = (event: FormEvent) => {
		event.preventDefault();
		createNote(formCreateNote.title, formCreateNote.body);
		setFormCreateNote({
			title: '',
			body: '',
			maxTitleLength: 50,
		});
	};

	const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
		if (event.key === 'Enter') {
			event.preventDefault();
			handleSubmitCreateNote(event as unknown as FormEvent);
		}
	};

	return (
		<form
			onSubmit={handleSubmitCreateNote}
			className={'bg-secondary p-5 rounded-md shadow-lg mb-8'}>
			<div className='mb-4'>
				<input
					type='text'
					autoFocus
					value={formCreateNote.title}
					onChange={handleInputChange}
					placeholder={
						language === 'id' ? 'Apa yang terjadi?' : 'Whats Happening?'}
					required
					name='title'
					className='w-full p-3 text-base border border-quaternary rounded-md bg-tertiary'
				/>
				<small className='text-sm text-gray-500'>
					{formCreateNote.maxTitleLength - formCreateNote.title.length}{' '}
					{language === 'id'
						? 'karakter tersisa'
						: 'characters remaining'}
				</small>
			</div>
			<div className={'mb-4'}>
				<textarea
					name='body'
					id='body'
					value={formCreateNote.body}
					onChange={handleInputChange}
					onKeyDown={handleKeyDown}
					placeholder={
						language === 'id' ? 'Detail' : 'Details'}
					required
					className={
						'w-full p-3 text-base border border-quaternary rounded-md bg-tertiary'
					}
				/>
			</div>
			<button
				type='submit'
				className='py-3 px-5 text-lg text-white bg-primary rounded-md hover:bg-quaternary'>
				{language === 'id' ? 'Buat Catatan' : 'Create Note'}
			</button>
		</form>
	);
};

NotesCreate.propTypes = {
	createNote: PropTypes.func.isRequired,
};

export default NotesCreate;
