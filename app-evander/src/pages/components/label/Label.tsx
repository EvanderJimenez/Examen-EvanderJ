import React from "react";

export interface RepositoryInformation {
    html_url: string;
    full_name: string;
  description: string;
}

export function Label(props: RepositoryInformation) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">Title <br/> {props.full_name}</h5>
        <p className="card-text"> Description <br/> {props.description}</p>
      </div>
      <ul className="list-group list-group-flush"></ul>
      <div className="card-body">
        <a href={props.html_url} className="card-link">
          Repository link
        </a>
      </div>
    </div>
  );
}
