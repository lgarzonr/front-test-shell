import React, { useEffect, useRef } from "react";
import { mount } from "AppDetail/bootstrap";
import { useNavigate } from "react-router-dom";

const DetailApp = () => {
  const navigate = useNavigate();
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current, navigate);
  }, []);

  return <div ref={ref} />;
};

export default DetailApp;
