import React, { type ChangeEvent, type FormEvent } from 'react';

interface ContactInputProps {
	addContact: (contact: { name: string; tag: string }) => void;
}

class ContactInput extends React.Component<ContactInputProps> {
	constructor(props: ContactInputProps) {
		super(props);

		this.state = {
			name: '',
			tag: '',
		};

		this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
		this.onTagChangeEventHandler = this.onTagChangeEventHandler.bind(this);
		this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
	}

	state: {
		name: string;
		tag: string;
	};

	onNameChangeEventHandler(event: React.ChangeEvent<HTMLInputElement>) {
		this.setState(() => {
			return {
				name: event.target.value,
			};
		});
	}

	onTagChangeEventHandler(event: ChangeEvent<HTMLInputElement>) {
		this.setState(() => {
			return {
				tag: event.target.value,
			};
		});
	}

	onSubmitEventHandler(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		this.props.addContact(this.state);
	}

	render() {
		return (
			<form className='contact-input' onSubmit={this.onSubmitEventHandler}>
				<input
					type='text'
					placeholder='Nama'
					value={this.state.name}
					onChange={this.onNameChangeEventHandler}
				/>
				<input
					type='text'
					placeholder='Tag'
					value={this.state.tag}
					onChange={this.onTagChangeEventHandler}
				/>
				<button type='submit'>Simpan</button>
			</form>
		);
	}
}

export default ContactInput;
