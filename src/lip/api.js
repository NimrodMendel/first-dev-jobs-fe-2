import axios from "axios";
axios.defaults.withCredentials = true;

const baseUrl = `http://localhost:5000`;

export const validatePasswords = (obj, userPasswordConfirmation) => {
  if (obj.password !== userPasswordConfirmation) {
    return "Passwords must match";
  } else if (obj.password.length < 4) {
    return "Passwords must be at least 4 characters long";
  } else {
    return null;
  }
};
export const signUpNewUser = async (obj) => {
  let result;
  await axios
    .post(`${baseUrl}/api/users/signup`, { user: obj })
    .then(async function (response) {
      result = response.data;
    })
    .catch(function (error) {
      console.error(error);
    });
  console.log("result", result);
  return result;
};

export const loginUser = async (loginObject) => {
  let result;
  await axios
    .post(`${baseUrl}/api/users/login`, { user: loginObject })
    .then(function (response) {
      result = response.data;
    })
    .catch(function (error) {
      console.error(error);
    });

  return result;
};

export const getUserById = async (userId) => {
  let result;
  await axios
    .get(`${baseUrl}/api/users/${userId}`)
    .then(function (response) {
      result = response.data;
    })
    .catch(function (error) {
      console.error(error);
    });

  return result;
};

export const updateUser = async (userObject) => {
  let result;
  await axios
    .put(`${baseUrl}/api/users/${userObject.id}`, { userObject })
    .then(function (response) {
      result = response.data;
    })
    .catch(function (error) {
      console.error(error);
    });

  return result;
};
