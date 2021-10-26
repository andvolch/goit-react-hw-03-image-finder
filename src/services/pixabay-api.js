import axios from 'axios';

const BASE_URL =
  'https://pixabay.com/api/?image_type=photo&orientation=horizontal';
const KEY_API = '23134758-68ab0efee1477745fc8aff6a6';

axios.defaults.baseURL = BASE_URL;

function getPicturesPixabayApi(query, page, perPage) {
  let params = `&q=${query}&page=${page}&per_page=${perPage}&key=${KEY_API}`;

  // axios.get(params)
  //     .then((result)=> {console.log(result);})
  //     .catch((error) => {console.log(error);});
  const {
    data: { hits },
  } = axios.get(params);

  return hits;
}

// const api = {
//   getPicturesPixabayApi,
// };

export default getPicturesPixabayApi;
