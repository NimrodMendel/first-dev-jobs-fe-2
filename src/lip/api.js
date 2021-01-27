import axios from "axios";

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

export const savePost = async (newPost) => {
  console.log(newPost)
  try {
      const resp = await axios.post(`${baseUrl}/api/jobs`, newPost);
      console.log(resp.data);
  } catch (err) {
      // Handle Error Here
      console.error(err);
  }
};

export const getAllPost = async () => {
  try {
      const resp = await axios.get(`${baseUrl}/api/jobs`);
      return(resp.data);
  } catch (err) {
      // Handle Error Here
      console.error(err);
  }
};
