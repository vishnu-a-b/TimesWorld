import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const CountryCard = () => {
  const selectedRegion = useSelector((state) => state.region);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://restcountries.com/v2/all?fields=name,region,flag"
        );
        setCountries(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const filteredCountries = countries.filter(
    (country) => country.region === selectedRegion || selectedRegion === "All"
  );

  return (
    <div className="container">
      <div className="row">
        {filteredCountries.map((country, index) => (
          <div className="col-lg-6 Card" key={index}>
            <div className="myCard">
              <img src={country.flag} className="cardImg" alt={country.name} />
              <div className="cardBody">
                <h5 className="cardTitle">{country.name}</h5>
                <p className="cardRegion">{country.region}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryCard;
