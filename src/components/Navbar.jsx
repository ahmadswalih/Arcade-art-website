import React from "react";

const Navbar = () => {
  return (
    <div className="flex font-paulRegular text-3xl p-2">
      <div className="flex">
        <ul>
          <li>Artists</li>
          <li>Exhibit</li>
          <li>About</li>
        </ul>
      </div>
      <div className="flex">
        <p>Arcade</p>
      </div>
      <div className="flex">
        <p>Contact</p>
      </div>
    </div>
  );
};

export default Navbar;
