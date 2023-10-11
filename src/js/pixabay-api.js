import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const KEY = '39979032-c72900008a85800a5a967ce49';

export async function fetchPhoto(q, page, perPage) {
  const url = `${URL}?key=${KEY}&q=${q}&page=${page}&per_page=${perPage}&image_type=photo&orientation=horizontal&safesearch=true`;
  const response = await axios.get(url);
  return response.data;
}
