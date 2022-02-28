import React from "react";



function MenuItem(props: { children: string;}) {
  return (
    <li className="flex-1 text-center p-3"><a href="">{props.children}</a></li>
  );
}

export default MenuItem;
