import { useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../../../components/layouts/SearchBar';
import ContactList from '../../../components/organism/ContactList';
import { type Contact } from '../../../utils/dataContact';
import { deleteContact, getContacts } from '../../../libs/api/contact.service';
import LanguageContext from '../../../contexts/LanguageContext';

const HomePageWrapper = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [keyword, setKeyword] = useState<string>(searchParams.get('keyword') || '');

  const { language } = useContext(LanguageContext);

  useEffect(() => {
    getContacts().then(({data}) => {
      setContacts(data);
    })
  },[])

  const onDeleteHandler = async (id:string | number) => {
    await deleteContact(id);
    const { data } = await getContacts();
    setContacts(data);
  }

  const onKeywordChangeHandler = (keyword:string) => {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const filteredContacts = contacts.filter((contact:Contact) => {
    return contact.name.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <section>
      <SearchBar keyword={keyword} onKeywordChange={onKeywordChangeHandler} />
      <h2>{language === 'id' ? 'Daftar Kontak' : 'Contacts List'}</h2>
      <ContactList contacts={filteredContacts} onDelete={onDeleteHandler} />
    </section>
  )
}

export default HomePageWrapper;