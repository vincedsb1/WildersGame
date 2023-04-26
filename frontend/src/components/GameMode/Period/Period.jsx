import React from "react";
import PropTypes from "prop-types";

function Period({ setRequest, request }) {
  const handlePeriod = (filterPeriod) => {
    setRequest(request + filterPeriod);
  };

  const periods = [
    {
      name: "None 🍄",
      link: "&primary_release_date.gte=1980-01-01",
      min: 1900,
      max: 2023,
    },
    {
      name: "1980's 🕺",
      link: "&primary_release_date.gte=1980-01-01&primary_release_date.lte=1989-12-31",
      min: 1980,
      max: 1989,
    },
    {
      name: "1990's 💾",
      link: "&primary_release_date.gte=1990-01-01&primary_release_date.lte=1999-12-31",
      min: 1990,
      max: 1999,
    },
    {
      name: "2000's 💫",
      link: "&primary_release_date.gte=2000-01-01&primary_release_date.lte=2009-12-31",
      min: 2000,
      max: 2009,
    },
    {
      name: "2010's 🍸",
      link: "&primary_release_date.gte=2010-01-01&primary_release_date.lte=2019-12-31",
      min: 2010,
      max: 2019,
    },
    {
      name: "2020's 🌈",
      link: "&primary_release_date.gte=2020-01-01",
      min: 2020,
      max: 2023,
    },
  ];

  return (
    <div className="period">
      {periods.map((period) => (
        <button
          type="button"
          id="period"
          onClick={() => handlePeriod(period.link)}
        >
          {period.name}
        </button>
      ))}
      <br />
    </div>
  );
}

Period.propTypes = {
  setRequest: PropTypes.func.isRequired,
  request: PropTypes.string.isRequired,
};

export default Period;
