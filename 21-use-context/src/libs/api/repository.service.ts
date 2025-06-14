async function getRepositories(language = 'all') {
  const response = await fetch(`https://api.github.com/legacy/repos/search/dicoding-academy?language=${language}`);
  const responseBody = await response.json();

  if (response.ok) {
    return responseBody.repositories;
  } else {
    throw new Error(responseBody.message || 'Failed to fetch repositories');
  }
}

export { getRepositories };
