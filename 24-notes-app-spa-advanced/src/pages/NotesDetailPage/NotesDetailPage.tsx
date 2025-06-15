import { useParams, useNavigate} from 'react-router-dom';
import PropTypes from 'prop-types';
import { getSingleNote, type Note } from '../../libs/api/note.service';
import { useEffect, useState } from 'react';
import Loading from '../../components/ui/Loading';

const NotesDetailPage = () => {
	const { noteId } = useParams();
	const navigate = useNavigate();
	const [note, setNote] = useState<Note | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchNote = async () => {
			try {
				if (!noteId) return;
				const res = await getSingleNote(noteId);
				const data = await res.json();
				setNote(data.data);
			} catch (error) {
				console.error('Failed to fetch note:', error);
			} finally {
				setLoading(false);
			}
		};

		fetchNote();
	}, [noteId]);

	if (loading) return <Loading />;

	if (!note) return <p className="text-red-600">Note not found.</p>;


	return (
		<div className='max-w-2xl mx-auto mt-4 p-5 bg-white shadow-lg rounded-md'>
				<>
					<h1 className='text-xl text-primary mb-4'>{note.title}</h1>
					<p className='text-base mb-4'>{note.body}</p>
					<p className='text-sm text-gray-500 mb-4'>
						Created: {new Date(note.createdAt).toLocaleDateString()}
					</p>
					<div className='flex gap-2'>
						<button
							type='button'
							onClick={() => navigate(-1)}
							className='py-2 px-4 text-white bg-primary rounded-md hover:bg-quaternary'>
							Back
						</button>
					</div>
				</>
		</div>
	);
};

NotesDetailPage.propTypes = {
	notes: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			body: PropTypes.string.isRequired,
			createdAt: PropTypes.string.isRequired,
			archived: PropTypes.bool.isRequired,
			owner: PropTypes.string.isRequired,
		})
	).isRequired,
};

export default NotesDetailPage;
