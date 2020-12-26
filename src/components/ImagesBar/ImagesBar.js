import React from "react";

export const ImagesBar = (props) => (
  <nav className="image-bar">
    <ul>
        {props.items.map(item => (
            <li>
                <a href={item.link} rel="noreferrer" target="_blank">{item.title}</a>
            </li>
        ))}
    </ul>
  </nav>
);
