import React from "react";

export const SectionMenu = (props) => (
  <nav className="section-nav">
    <ul>
        {props.items.map(item => (
            <li>
                <a href={item.link} rel="noreferrer" target="_blank">{item.title}</a>
            </li>
        ))}
    </ul>
  </nav>
);
