import fetch from "node-fetch";

export default async function handleUserSignUp(
  email: String,
  password: String,
  confirmPassword: String
) {
  const response = await fetch("/api/sign-up", {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
  });
  if (response == null) {
    console.log("response is null.");
  }
}
