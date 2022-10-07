import {} from "react";

import { Outlet } from "react-router-dom";

function StudentAppLayout() {
  return (
    <>
      <div>StudentAppLayout</div>

      <div>
        <Outlet />
      </div>
    </>
  );
}

export default StudentAppLayout;
