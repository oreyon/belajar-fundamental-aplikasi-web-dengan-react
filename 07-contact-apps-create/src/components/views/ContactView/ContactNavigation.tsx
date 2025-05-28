import { Link } from 'react-router-dom';

function ContactNavigation() {
	return (
		<nav className='navigation'>
			<ul>
				<li>
					<Link to={'/'}>Home</Link>
				</li>
				<li>
					<Link to={'/add'}>Create</Link>
				</li>
			</ul>
		</nav>
	);
}

export default ContactNavigation;
