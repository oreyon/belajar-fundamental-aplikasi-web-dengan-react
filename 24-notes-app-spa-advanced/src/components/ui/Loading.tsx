const Loading = () => {
	return (
		<div className='bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen flex items-center-safe justify-center'>
			<main className='container mx-auto px-4'>
				<div className='flex-grow flex items-center justify-center'>
					<div className='bg-gray-800 bg-opacity-80 rounded-xl shadow-custom border border-gray-700 overflow-hidden max-w-2xl mx-auto animate-fade-in p-8 text-center'>
						<div className='w-24 h-24 bg-gradient rounded-full mx-auto flex items-center justify-center mb-6 shadow-lg animate-spin'>
							<svg
								className='w-12 h-12 text-white'
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'>
								<circle
									className='opacity-25'
									cx='12'
									cy='12'
									r='10'
									stroke='currentColor'
									strokeWidth='4'></circle>
								<path
									className='opacity-75'
									fill='currentColor'
									d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z'></path>
							</svg>
						</div>
						<h2 className='text-2xl font-semibold text-white mb-2'>
							Loading...
						</h2>
						<p className='text-gray-300'>
							Please wait while we check your session.
						</p>
					</div>
				</div>
			</main>
		</div>
	);
};

export default Loading;
