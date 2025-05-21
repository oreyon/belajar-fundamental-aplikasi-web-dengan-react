import React from 'react';

interface PropTypes {
	target: string;
	children: React.ReactNode;
	navigate: (target: string) => void;
}

const Link = (props: PropTypes) => {
	const { target, children, navigate } = props;

	return (
		<a
			href={target}
			onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
				event.preventDefault();
				navigate(target);
			}}>
			{children}
		</a>
	);
};

export default Link;
