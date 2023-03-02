const PROXY = 'http://localhost:8080/';

const postRequest = async (route: string, body: object) => {
  try {
    const response = await fetch(`${PROXY}${route}`, {
      mode: 'no-cors',
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};
export { postRequest };
