import { Component, Fragment, type ReactNode } from 'react';
import HomePage from '../../components/views/Spa/HomePage';
import AboutPage from '../../components/views/Spa/AboutPage';
import FAQPage from '../../components/views/Spa/FAQPage';
import Link from '../../components/views/Spa/Link';

interface SinglePageAppProps {
	page: string;
}

class SinglePageApp extends Component {
	constructor(props: SinglePageAppProps) {
		super(props);

		this.state = {
			page: '/03/about',
		};

		this.navigate = this.navigate.bind(this);
	}

	state: {
		page: string;
	};

	navigate(target: string) {
		this.setState(() => {
			return {
				page: target,
			};
		});
	}

	render(): ReactNode {
		return (
			<Fragment>
				<header>
					<nav>
						<ul>
							<li>
								<Link target='/03/home' navigate={this.navigate}>
									Home
								</Link>
							</li>
							<li>
								<Link target='/03/about' navigate={this.navigate}>
									about
								</Link>
							</li>
							<li>
								<Link target='/03/faq' navigate={this.navigate}>
									Faq
								</Link>
							</li>
						</ul>
					</nav>
				</header>
				<main>
					{this.state.page === '/03/home' && <HomePage />}
					{this.state.page === '/03/about' && <AboutPage />}
					{this.state.page === '/03/faq' && <FAQPage />}
				</main>
			</Fragment>
		);
	}
}

export default SinglePageApp;
