export const validateSignIn = (isSignInForm, email, password, name) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  if (!isEmailValid) return "Email is not valid.";

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (!isPasswordValid)
    return "Password is not valid. (Use combination of capital, small case letters, numbers & special character with total length > 8).";

  if (isSignInForm && isEmailValid && isPasswordValid) {
    return null;
  }

  const isNameValid = /^[A-Za-z ]{4,}$/.test(name);
  if (!isNameValid) return "Name not valid. Length should be more than 3.";

  if (!isSignInForm && isEmailValid && isPasswordValid && isNameValid) {
    return null;
  }
};
