import React from 'react';
import { useSearchParams } from 'react-router-dom';

// import { deleteContact, getContacts } from '../utils/data';
import SearchBar from '../../../components/layouts/SearchBar';
import ContactList from '../../../components/organism/ContactList';
import { deleteContact, getContacts, type Contact } from '../../../utils/dataContact';
import type PropTypes from 'prop-types';

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
      contacts: getContacts(),
      keyword: props.defaultKeyword || '',
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onDeleteHandler(id:number) {
    deleteContact(id);

    // update the contact state from data.js
    this.setState(() => {
      return {
        contacts: getContacts(),
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

  render() {
    const contacts = this.state.contacts.filter((contact:Contact) => {
      return contact.name.toLowerCase().includes(
        this.state.keyword.toLowerCase()
      );
    });

    return (
      <section>
        <h2>Daftar Kontak</h2>
        <SearchBar keyword={this.state.keyword} onKeywordChange={this.onKeywordChangeHandler} />
        <ContactList contacts={contacts} onDelete={this.onDeleteHandler} />
      </section>
    )
  }
}

export default HomePageWrapper;