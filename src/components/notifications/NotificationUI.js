import React from "react";
import PropTypes from "prop-types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FCMNotificationComponent = ({ title, body }) => {
  let hideNotif = title === "";

  if (!hideNotif) {
    toast.info(<Display />);
  }

  function Display() {
    return (
      <div>
        <h4>{title}</h4>
        <p>{body}</p>
      </div>
    );
  }

  return (
    <ToastContainer
      autoClose={3000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover={false}
    />
  );
};

FCMNotificationComponent.defaultProps = {
  title: "This is title",
  body: "Some body",
};

FCMNotificationComponent.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
};

export default FCMNotificationComponent;
