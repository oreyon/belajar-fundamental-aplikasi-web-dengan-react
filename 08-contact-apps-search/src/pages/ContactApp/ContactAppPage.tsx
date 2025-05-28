import { Route, Routes } from 'react-router-dom';
import ContactNavigation from '../../components/views/ContactView/ContactNavigation';
import ContactCreate from '../../components/views/ContactView/ContactCreate';
import ContactsPageWrapper from '../../components/views/ContactView/ContactsPage';

const ContactAppPage = () => {
	return (
		<div className='contact-app'>
			<header className='contact-app__header'>
				<h1>Contacts App</h1>
				<ContactNavigation />
			</header>
			<main>
				<Routes>
					<Route index path='/' element={<ContactsPageWrapper />} />
					<Route path='/add' element={<ContactCreate />} />
				</Routes>
			</main>
		</div>
	);
};

export default ContactAppPage;
