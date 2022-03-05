import React, { useState } from "react";

import "./SaveButton.css";

function SaveButton(props) {

  return (
    <button
      type="button"
      name="button"
      className='save-btn'
    >
      Сохранить
    </button>
  );
}

export default SaveButton;
