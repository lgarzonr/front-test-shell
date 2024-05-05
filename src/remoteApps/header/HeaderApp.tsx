import React, { useEffect, useRef } from "react";
import { mount } from "AppHeader/bootstrap";
import { useNavigate } from "react-router-dom";

const HeaderApp = () => {
  const navigate = useNavigate();
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current, navigate);
  }, []);

  return <div ref={ref} />;
};

export default HeaderApp;
