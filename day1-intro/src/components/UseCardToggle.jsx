import React, { useState } from "react";

export const UseCardToggle = (component, visibility = false) => {
  const [visible, setVisible] = useState(() => visibility);
  return;
  [visible ? component : null, () => setVisible((v) => !v)];
};
