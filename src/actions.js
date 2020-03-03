import request from "superagent";

export const ALL_IMAGES = "ALL_IMAGES";
export const NEW_IMAGE = "NEW_IMAGE";
export const JWT = "JWT";
export const SIGN_UP = "SIGN_UP";

const baseUrl = "http://localhost:4000";

function allImages(payload) {
  return {
    type: ALL_IMAGES,
    payload
  };
}

function newImage(payload) {
  return {
    type: NEW_IMAGE,
    payload
  };
}

function loginUser(payload) {
  return {
    type: JWT,
    payload
  };
}

function newUser(payload) {
  return {
    type: SIGN_UP,
    payload
  };
}

export const signUp = data => dispatch => {
  console.log("this is", data);
  request
    .post(`${baseUrl}/user`)
    .send(data)
    .then(res => {
      const action = newUser(res.body);
      dispatch(action);
    })
    .catch(console.error);
};

export const login = data => (dispatch, getState) => {
  const state = getState();
  if (!state) {
    console.log("does not exist");
  } else {
    request
      .post(`${baseUrl}/login`)
      .send(data)
      .then(res => {
        const action = loginUser(res.body);
        dispatch(action);
      })
      .catch(console.error);
  }
};

export const createImage = data => (dispatch, getState) => {
  const state = getState();
  const { user } = state;
  request
    .post(`${baseUrl}/images`)
    .set("Authorization", `Bearer ${user.jwt}`)
    .send(data)
    .then(res => {
      const action = newImage(res.body);
      dispatch(action);
    })
    .catch(console.error);
};

export const getImages = () => (dispatch, getState) => {
  const state = getState();
  const { images } = state;

  if (!images.length) {
    request(`${baseUrl}/images`)
      .then(res => {
        const action = allImages(res.body);

        dispatch(action);
      })
      .catch(console.error);
  }
};
