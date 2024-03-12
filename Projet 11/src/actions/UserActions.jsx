import axios from "axios";

export const GET_USERINFO = "GET_USERINFO";
export const EDIT_USERINFO = "EDIT_USERINFO";

export const getUserInfo = () => async (dispatch) => {
  if (localStorage.getItem("token")) {
    try {
      const res = await axios({
        method: "POST",
        url: "http://localhost:3001/api/v1/user/profile",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      dispatch({
        type: GET_USERINFO,
        payload: res.data.body,
      });
    } catch (error) {
      console.log("erreur");
      console.error(error);
    }
  }
};

export const editUserInfo = (newUserName) => async (dispatch) => {
  if (localStorage.getItem("token")) {
    try {
      const res = await axios({
        method: "PUT",
        url: "http://localhost:3001/api/v1/user/profile",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        data: {
          userName: newUserName,
        },
      });

      dispatch({
        type: EDIT_USERINFO,
        payload: res.data.body,
      });
    } catch (error) {
      console.log("erreur");
      console.error(error);
    }
  }
};
