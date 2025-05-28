interface Contact {
	id: number;
	name: string;
	tag: string;
	imageUrl: string;
}

let contacts = [
	{
		id: 1,
		name: 'Dimas Saputra',
		tag: 'dimasmds',
		imageUrl: '/images/dimasmds.jpeg',
	},
	{
		id: 2,
		name: 'Arif Faizin',
		tag: 'arifaizin',
		imageUrl: '/images/arifaizin.jpeg',
	},
	{
		id: 3,
		name: 'Rahmat Fajri',
		tag: 'rfajri27',
		imageUrl: '/images/rfajri27.jpeg',
	},
];

function getContacts() {
	return contacts;
}

function addContact(contact: Omit<Contact, 'id' | 'imageUrl'>) {
	contacts = [
		...contacts,
		{ id: +new Date(), imageUrl: '/images/default.jpg', ...contact },
	];
}

function deleteContact(id: number) {
	contacts = contacts.filter((contact) => contact.id !== id);
}

export type { Contact };
export { getContacts, addContact, deleteContact };
