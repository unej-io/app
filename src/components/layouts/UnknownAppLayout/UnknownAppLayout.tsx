import {} from "react";

import { Outlet } from "react-router-dom";

function UnknownAppLayout() {
  return (
    <>
      <div>UnknownAppLayout</div>

      <div>
        <Outlet />
      </div>
    </>
  );
}

export default UnknownAppLayout;
