import {} from "react";

import { Outlet } from "react-router-dom";

function OrganizationLayout() {
  return (
    <>
      <div>OrganizationLayout</div>

      <div>
        <Outlet />
      </div>
    </>
  );
}

export default OrganizationLayout;
