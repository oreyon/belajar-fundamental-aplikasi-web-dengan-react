import React, { type ChangeEvent, type FormEvent } from 'react';

interface PropTypes {
  addContact: ({ name, tag }: {name: string, tag: string}) => void;
}

interface StateTypes {
  name: string;
  tag: string;
}

class ContactInput extends React.Component<PropTypes, StateTypes> {
  constructor(props:PropTypes) {
    super(props);

    // inisialisasi state
    this.state = {
      name: '',
      tag: '',
    }

    this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
    this.onTagChangeEventHandler = this.onTagChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onNameChangeEventHandler(event: ChangeEvent<HTMLInputElement>) {
    this.setState(() => {
      return {
        name: event.target.value,
      }
    });
  }

  onTagChangeEventHandler(event: ChangeEvent<HTMLInputElement>) {
    this.setState(() => {
      return {
        tag: event.target.value,
      }
    });
  }

  onSubmitEventHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.props.addContact(this.state);
  }

  render() {
   return (
     <form className='contact-input' onSubmit={this.onSubmitEventHandler}>
       <input type="text" placeholder="Nama" value={this.state.name} onChange={this.onNameChangeEventHandler} className={"shadow"}/>
       <input type="text" placeholder="Tag" value={this.state.tag} onChange={this.onTagChangeEventHandler} className={"shadow"} />
       <button type="submit" className={""} >Tambah</button>
     </form>
   )
 }
}

export default ContactInput;
