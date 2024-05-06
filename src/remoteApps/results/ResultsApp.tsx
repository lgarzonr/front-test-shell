import React, { useEffect, useRef } from "react";
import { mount } from "AppResults/bootstrap";
import { useNavigate, useSearchParams } from "react-router-dom";

const ResultsApp = () => {
  const navigate = useNavigate();
  const ref = useRef(null);

  const [searchParams] = useSearchParams();

  useEffect(() => {
    mount(ref.current, navigate);
  }, [searchParams]);

  return <div ref={ref} />;
};

export default ResultsApp;
