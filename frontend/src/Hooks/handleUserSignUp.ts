export default async function handleUserSignUp(signUpStruct: {
  email: String;
  password: String;
  confirmPassword: String;
}) {
  const response = await fetch("/api/sign-up", {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: JSON.stringify({
      email: signUpStruct.email,
      password: signUpStruct.password,
      confirm_password: signUpStruct.confirmPassword,
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}
