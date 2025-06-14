import React from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../../../components/layouts/SearchBar';
import ContactList from '../../../components/organism/ContactList';
import { type Contact } from '../../../utils/dataContact';
import type PropTypes from 'prop-types';
import { deleteContact, getContacts } from '../../../libs/api/contact.service';
import { LanguageConsumer } from '../../../contexts/LanguageContext';

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get('keyword');

  function changeSearchParams(keyword:string) {
    setSearchParams({ keyword });
  }

  return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}

type PropTypes = {
  defaultKeyword: string | null;
  keywordChange: (keyword: string) => void;
}

type StateTypes = {
  contacts: Contact[];
  keyword: string;
}

class HomePage extends React.Component<PropTypes, StateTypes> {
  constructor(props:PropTypes) {
    super(props);

    this.state = {
      contacts: [],
      keyword: props.defaultKeyword || '',
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  async onDeleteHandler(id:string | number) {
    await deleteContact(id);

    // update the contact state from data.js
    const { data } = await getContacts();
    this.setState(() => {
      return {
        contacts: data,
      }
    });
  }

  onKeywordChangeHandler(keyword:string) {
    this.setState(() => {
      return {
        keyword,
      }
    });

    this.props.keywordChange(keyword);
  }

  async componentDidMount(){
      const { data } = await getContacts();

      this.setState(() => {
        return {
          contacts: data
        }
      })
  }

  render() {
    const contacts = this.state.contacts.filter((contact:Contact) => {
      return contact.name.toLowerCase().includes(
        this.state.keyword.toLowerCase()
      );
    });

    return (
      <LanguageConsumer>
        {({ language }) => {
          return (
            <section>
              <h2>{language === 'id' ? 'Daftar Kontak' : 'Contacts List'}</h2>
              <SearchBar keyword={this.state.keyword} onKeywordChange={this.onKeywordChangeHandler} />
              <ContactList contacts={contacts} onDelete={this.onDeleteHandler} />
            </section>
          )
        }}
      </LanguageConsumer>
    )
  }
}

export default HomePageWrapper;