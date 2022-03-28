import React, { useState, useEffect } from "react";
import { getToken } from "../../firebase/FCMInit";

const Notifications = (props) => {
  const [isTokenFound, setTokenFound] = useState(false);

  // To load once
  useEffect(() => {
    let data;

    async function tokenFunc() {
      data = await getToken(setTokenFound);
      if (data) {
      }
      return data;
    }

    tokenFunc();
  }, [setTokenFound]);

  return <></>;
};

Notifications.propTypes = {};

export default Notifications;
