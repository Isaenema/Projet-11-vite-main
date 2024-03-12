import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUserInfo } from "../actions/UserActions";

export default function EditUserName(props) {
  const dispatch = useDispatch();

  const token = localStorage.getItem("token");
  const userData = useSelector((state) => state.userInfo);

  const [newUserName, setNewUserName] = useState(userData?.userName || "");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newUserName === "") {
      alert("please fill in the 'User name' field.");
    } else {
      console.log("new user name?", newUserName);
      try {
        await dispatch(editUserInfo(newUserName));
      } catch (error) {
        console.error("Error updating username:", error);
        alert("Error updating username. Please try again.");
      }
    }
  };
  return (
    <div className="editUserName">
      <h1 className="editUserName__title">Edit user info</h1>
      <form className="editUserName__form">
        <div className="editUserName__form__inputWrapper">
          <label htmlFor="userName">User name:</label>
          <input
            type="text"
            id="userName"
            value={newUserName}
            autoComplete="true"
            onChange={(e) => setNewUserName(e.target.value)}
          />
        </div>
        <div className="editUserName__form__inputWrapper">
          <label htmlFor="firstName">First name:</label>
          <input
            type="text"
            id="firstName"
            value={userData?.firstName}
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
            value={userData?.lastName}
            autoComplete="true"
            readOnly
            className="editUserName__form__inputWrapper--readOnly"
          />
        </div>
        <div className="editUserName__form__button">
          <button
            type="submit"
            className="editUserName__form__button__content"
            onClick={handleSubmit}
          >
            Save
          </button>
          <button
            type="button"
            className="editUserName__form__button__content"
            onClick={() => props.setToggleEditUserName(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
