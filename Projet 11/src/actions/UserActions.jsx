import axios from "axios";

export const GET_USERINFO = "GET_USERINFO";
export const EDIT_USERNAME = "EDIT_USERNAME";

export const getUserInfo = () => async (dispatch) => {
  if (localStorage.getItem("myToken")) {
    try {
      const res = await axios({
        method: "POST",
        url: "http://localhost:3001/api/v1/user/profile",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("myToken")}`,
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
