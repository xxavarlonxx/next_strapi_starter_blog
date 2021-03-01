const baseURL = process.env.BASE_URL;

async function fetchQuery(path, params = null, query = null) {
  let url;
  if (params !== null) {
    url = `${baseURL}${path}/${params}`;
  } else {
    url = `${baseURL}${path}`;
  }

  if (query !== null) {
    url += `?${query}`;
  }

  const response = await fetch(`${url}`);
  const data = await response.json();
  return data;
}

function getImageURL(imagePath) {
  if (!imagePath) {
    return 'vercel.svg';
  }

  return `${baseURL}${imagePath}`;
}

export { baseURL, fetchQuery, getImageURL };
