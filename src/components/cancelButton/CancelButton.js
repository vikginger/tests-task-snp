import React, { useState } from "react";

import "./CancelButton.css";

function CancelButton(props) {

  return (
    <button
      type="button"
      name="button"
      className='cancel-btn'
    >
      Отмена
    </button>
  );
}

export default CancelButton;
