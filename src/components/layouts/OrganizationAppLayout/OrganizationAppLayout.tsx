import {} from "react";

import { Outlet } from "react-router-dom";

function OrganizationAppLayout() {
  return (
    <>
      <div>OrganizationAppLayout</div>

      <div>
        <Outlet />
      </div>
    </>
  );
}

export default OrganizationAppLayout;
