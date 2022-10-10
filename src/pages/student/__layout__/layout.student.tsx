import {} from "react";

import { Outlet } from "react-router-dom";

function StudentLayout() {
  return (
    <>
      <div>StudentLayout</div>

      <div>
        <Outlet />
      </div>
    </>
  );
}

export default StudentLayout;
