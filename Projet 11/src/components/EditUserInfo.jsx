// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { editUserInfo } from "../actions/UserActions";
import "./EditUserInfo.css";

// export default function EditUserName(props) {
//   const dispatch = useDispatch();

//   const userName = useSelector((state) => state.user.user.userName);
//   //   const firstName = useSelector((state) => state.user.user.firstName);
//   //   const lastName = useSelector((state) => state.user.user.lastName);
//   //   const token = useSelector((state) => state.user.token);

//   const [newUserName, setNewUserName] = useState(userName);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (newUserName === "") {
//       alert("please fill in the 'User name' field.");
//     } else {
//       try {
//         await dispatch(editUserInfo(token, newUserName));
//       } catch (error) {
//         console.error("Error updating username:", error);
//         alert("Error updating username. Please try again.");
//       }
//     }
//   };

const editUserInfo = () => {
  return (
    <div className="editUserName">
      <h1 className="editUserName__title">Edit user info</h1>
      <form className="editUserName__form">
        <div className="editUserName__form__inputWrapper">
          <label htmlFor="userName">User name:</label>
          <input
            type="text"
            id="userName"
            // value={newUserName}
            autoComplete="true"
            // onChange={(e) => setNewUserName(e.target.value)}
          />
        </div>
        <div className="editUserName__form__inputWrapper">
          <label htmlFor="firstName">First name:</label>
          <input
            type="text"
            id="firstName"
            // value={firstName}
            autoComplete="true"
            readOnly
            className="editUserName__form__inputWrapper--readOnly"
          />
        </div>
        <div className="editUserName__form__inputWrapper">
          <label htmlFor="lastName">Last name:</label>
          <input
            type="text"
            id="lastName"
            // value={lastName}
            autoComplete="true"
            readOnly
            className="editUserName__form__inputWrapper--readOnly"
          />
        </div>
        <div className="editUserName__form__button">
          <button
            type="submit"
            className="editUserName__form__button__content"
            // onClick={handleSubmit}
          >
            Save
          </button>
          <button
            type="button"
            className="editUserName__form__button__content"
            // onClick={() => props.setToggleEditUserName(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default editUserInfo;
