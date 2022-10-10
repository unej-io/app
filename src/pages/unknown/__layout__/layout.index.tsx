import {} from "react";

import { Outlet } from "react-router-dom";

function UnknownLayout() {
  return (
    <>
      <div>UnknownLayout</div>

      <div>
        <Outlet />
      </div>
    </>
  );
}

export default UnknownLayout;
