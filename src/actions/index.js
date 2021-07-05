export const REQUEST_API = 'REQUEST_API';
export const GET_PICTURE = 'GET_PICTURE';

export const requestAPI = () => ({ type: REQUEST_API });

export const getPicture = (data) => ({ type: GET_PICTURE, data });

export function fetchAPI() {
  return  async (dispatch) => {
    dispatch(requestAPI());
    let response = await fetch("https://aws.random.cat/meow")
    let image = await response.json();
    dispatch(getPicture(image));
  }
}
