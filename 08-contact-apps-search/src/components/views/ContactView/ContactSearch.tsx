import type { ChangeEvent } from 'react';

type Props = {
	keyword: string;
	keywordChange: (keyword: string) => void;
};

function ContactSearch({ keyword, keywordChange }: Props) {
	return (
		<input
			type='text'
			className='search-bar'
			placeholder='search by title'
			value={keyword}
			onChange={(e: ChangeEvent<HTMLInputElement>) =>
				keywordChange?.(e.target.value)
			}
		/>
	);
}

export default ContactSearch;
