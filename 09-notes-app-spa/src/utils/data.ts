export interface Note {
	id: number;
	title: string;
	body: string;
	createdAt: string;
	archived: boolean;
}

export let notes: Note[] = [
	{
		id: 1,
		title: 'Babel',
		body: 'Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.',
		createdAt: '2022-04-14T04:27:34.572Z',
		archived: false,
	},
	{
		id: 2,
		title: 'Functional Component',
		body: 'Functional component merupakan React component yang dibuat menggunakan fungsi JavaScript. Agar fungsi JavaScript dapat disebut component ia harus mengembalikan React element dan dipanggil layaknya React component.',
		createdAt: '2022-04-14T04:27:34.572Z',
		archived: false,
	},
	{
		id: 3,
		title: 'Modularization',
		body: 'Dalam konteks pemrograman JavaScript, modularization merupakan teknik dalam memecah atau menggunakan kode dalam berkas JavaScript secara terpisah berdasarkan tanggung jawabnya masing-masing.',
		createdAt: '2022-04-14T04:27:34.572Z',
		archived: false,
	},
	{
		id: 4,
		title: 'Lifecycle',
		body: 'Dalam konteks React component, lifecycle merupakan kumpulan method yang menjadi siklus hidup mulai dari component dibuat (constructor), dicetak (render), pasca-cetak (componentDidMount), dan sebagainya. ',
		createdAt: '2022-04-14T04:27:34.572Z',
		archived: false,
	},
	{
		id: 5,
		title: 'ESM',
		body: 'ESM (ECMAScript Module) merupakan format modularisasi standar JavaScript.',
		createdAt: '2022-04-14T04:27:34.572Z',
		archived: false,
	},
	{
		id: 6,
		title: 'Module Bundler',
		body: 'Dalam konteks pemrograman JavaScript, module bundler merupakan tools yang digunakan untuk menggabungkan seluruh modul JavaScript yang digunakan oleh aplikasi menjadi satu berkas.',
		createdAt: '2022-04-14T04:27:34.572Z',
		archived: false,
	},
];

export const showFormattedDate = (date: string) => {
	const options: Intl.DateTimeFormatOptions = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	};
	return new Date(date).toLocaleDateString('id-ID', options);
};

export const getAllNotes = () => {
	return notes;
};

export const getNote = (id: number) => {
	const foundedNote = notes.find((note: Note) => note.id === id);
	return foundedNote;
};

export const getActiveNotes = () => {
	const activeNotes = notes.filter((note: Note) => !note.archived);
	return activeNotes;
};

export const getArchivedNotes = () => {
	const archivedNotes = notes.filter((note: Note) => note.archived);
	return archivedNotes;
};

export const addNote = ({ title, body }: { title: string; body: string }) => {
	notes = [
		...notes,
		{
			id: +new Date(),
			title: title || `(No Title)`,
			body: body,
			createdAt: new Date().toISOString(),
			archived: false,
		},
	];
};

export const deleteNote = (id: number) => {
	notes = notes.filter((note: Note) => note.id !== id);
};

export const archiveNote = (id: number) => {
	notes = notes.map((note: Note) => {
		if (note.id === id) {
			return { ...note, archived: true };
		}
		return note;
	});
};

export const unarchiveNote = (id: number) => {
	notes = notes.map((note: Note) => {
		if (note.id === id) {
			return { ...note, archived: false };
		}
		return note;
	});
};

export const editNotes = (id: number, note: Omit<Note, 'id' | 'createdAt'>) => {
	const noteToEdit = notes.find((note: Note) => note.id === id);

	if (!noteToEdit) {
		throw new Error(`Note with id ${id} not found`);
	}

	noteToEdit.title = note.title;
	noteToEdit.body = note.body;

	notes = notes.map((note: Note) => {
		if (note.id === id) {
			return note;
		}
		return note;
	});
};
