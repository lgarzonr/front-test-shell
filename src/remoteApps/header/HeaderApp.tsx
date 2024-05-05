import React, { useEffect, useRef } from "react";
import { mount } from "AppHeader/bootstrap";

const HeaderApp = () => {
  const ref = useRef(null);
  useEffect(() => {
    console.log("HeaderApp mounted", mount);
    mount(ref.current);
    return () => {
      console.log("HeaderApp unmounted");
    };
  });

  return <div ref={ref} />;
};

export default HeaderApp;
