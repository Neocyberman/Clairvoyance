import React from 'react';

import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';

function OtherInfo() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/home');
  };

  return (
    <div>
      <h2>Other Info!</h2>
      <Button onClick={handleClick}>Back to Home</Button>
    </div>
  );
}

export default OtherInfo;
