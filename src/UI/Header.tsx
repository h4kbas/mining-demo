import React from "react";
import MenuItem from "./MenuItem";
function Header() {
  return (
    <div className="">
      <ul className="flex flex-rows">
        <MenuItem>Mine</MenuItem>
        <MenuItem>Inventory</MenuItem>
        <MenuItem>Stats</MenuItem>
        <MenuItem>Profile</MenuItem>
      </ul>
    </div>
  );
}

export default Header;
