import React from "react";

export interface RepositoryInformation {
  link: string;
  title: string;
  description: string;
  itemDescription: string;
  itemDescription2: string;
}

export function Label(props: RepositoryInformation) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src="https://unavatar.io/midudev" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{props.itemDescription}</li>
        <li className="list-group-item">{props.itemDescription2}</li>
      </ul>
      <div className="card-body">
        <a href={props.link} className="card-link">Repository link</a>
      </div>
    </div>
  );
}
