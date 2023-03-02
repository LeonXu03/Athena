import { postRequest } from '../services/fetchRequestHelper';

interface signUpForm {
  email: string;
  password: string;
  confirmPassword: string;
}
const signUpHandler = async (formData: signUpForm) => {
  //call backend
  //do actions accordingly
  const response = await postRequest('sign-up', formData);
  if (response) {
    //action
    console.log(response);
  } else {
    console.log('error');
  }
};

export { signUpHandler };
