interface Contact {
  id: number;
  name: string;
  tag: string;
  imageUrl: string;
}

let contacts : Contact[] = [
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
]

const getContacts = (): Contact[] => {
  return contacts;
}

const addContact = (contact:Contact) => {
  contacts = [...contacts, {
    id: +new Date(),
    name: contact.name,
    tag: contact.tag,
    imageUrl: contact.imageUrl || '/images/default.jpg',
  }];
}

const deleteContact = (id: number) => {
  contacts = contacts.filter((contact:Contact) => contact.id !== id);
}

export { getContacts, addContact, deleteContact };
export type { Contact };