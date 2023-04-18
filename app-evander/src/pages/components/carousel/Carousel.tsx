import React from "react";
import { useState, useLayoutEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Label, RepositoryInformation } from "../label/Label";

interface contextInformation {
  contexts: RepositoryInformation[];
}
//
//prueba
export function Carousel(props: contextInformation) {
  return (
    <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
      <div className="carousel-inner">
        <div className="carousel-item active">
          {props.contexts.map((context) => (
            <Label key={context.full_name} full_name={context.full_name} description={context.description} html_url={context.html_url} />
          ))}
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
