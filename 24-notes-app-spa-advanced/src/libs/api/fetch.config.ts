
export const baseURL:string = `${import.meta.env.VITE_API_URL}`;

const customFetch = async (url: RequestInfo | URL, options?: RequestInit): Promise<Response> => {
  const fullUrl = `${baseURL}${url}`;

  const request = new Request(fullUrl, {
    ...options,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      ...(options?.headers),
    },
  });

  const response = await fetch(request);
  return response;
}

export default customFetch;