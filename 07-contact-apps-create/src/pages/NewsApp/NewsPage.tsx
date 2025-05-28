import News from '../../components/views/NewsView/News';

const NewsPage = () => {
	return (
		<div>
			<h1>News Page</h1>
			<p>This is the news page.</p>
			<News
				title='Annual Planting'
				description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet sagittis metus, eget dapibus risus laoreet sed. Praesent ante magna ...'
				image='https://picsum.photos/id/239/800/600'
				isFeatured={true}
				tags={['plant', 'nature']}
				bookmark={() => alert('Bookmarked!')}
				style={{
					// ini opsional
					width: 300,
					border: '1px solid black',
					margin: '0 auto',
					padding: 16,
					borderRadius: 10,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'left',
				}}
			/>
		</div>
	);
};

export default NewsPage;
