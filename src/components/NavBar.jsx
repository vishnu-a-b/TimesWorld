import React from "react";
import { Link } from "react-router-dom";
import "../assets/navbar.css";
import { setRegion } from "../redux/regionSlice";
import { useDispatch, useSelector } from "react-redux";

export default function NavBar() {
  const region = useSelector((state) => state.region);
  const dispatch = useDispatch();
  function refreshPage() {
    window.location.reload();
  }
  function handleRegionChange(region) {
    dispatch(setRegion(region));
  }
  return (
    <nav className="header navbar navbar-expand-xl navbar-light ">
      <div className="container-fluid myNav">
        <h1>Countries</h1>
        <button
          class="navbar-toggler collapsed d-flex d-xl-none flex-column justify-content-around"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="toggler-icon "></span>
          <span class="toggler-icon "></span>
          <span class="toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto desktopNav">
            <li
              className={region === "All" ? "nav-item Active" : "nav-item"}
              onClick={() => handleRegionChange("All")}
            >
              All
            </li>
            <li
              className={region === "Africa" ? "nav-item Active" : "nav-item"}
              onClick={() => handleRegionChange("Africa")}
            >
              Africa
            </li>
            <li
              className={region === "Americas" ? "nav-item Active" : "nav-item"}
              onClick={() => handleRegionChange("Americas")}
            >
              Americas
            </li>
            <li
              className={region === "Asia" ? "nav-item Active" : "nav-item"}
              onClick={() => handleRegionChange("Asia")}
            >
              Asia
            </li>
            <li
              className={region === "Europe" ? "nav-item Active" : "nav-item"}
              onClick={() => handleRegionChange("Europe")}
            >
              Europe
            </li>
            <li
              className={region === "Oceania" ? "nav-item Active" : "nav-item"}
              onClick={() => handleRegionChange("Oceania")}
            >
              Oceania
            </li>
          </ul>
          <div class="mobNav">
            <ul
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <li
                className={region === "All" ? "nav-item Active" : "nav-item"}
                onClick={() => handleRegionChange("All")}
              >
                All
              </li>
              <li
                className={region === "Africa" ? "nav-item Active" : "nav-item"}
                onClick={() => handleRegionChange("Africa")}
              >
                Africa
              </li>
              <li
                className={
                  region === "Americas" ? "nav-item Active" : "nav-item"
                }
                onClick={() => handleRegionChange("Americas")}
              >
                Americas
              </li>
              <li
                className={region === "Asia" ? "nav-item Active" : "nav-item"}
                onClick={() => handleRegionChange("Asia")}
              >
                Asia
              </li>
              <li
                className={region === "Europe" ? "nav-item Active" : "nav-item"}
                onClick={() => handleRegionChange("Europe")}
              >
                Europe
              </li>
              <li
                className={
                  region === "Oceania" ? "nav-item Active" : "nav-item"
                }
                onClick={() => handleRegionChange("Oceania")}
              >
                Oceania
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
