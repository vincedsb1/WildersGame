import React from "react";
import PropTypes from "prop-types";

function Period({ setRequest, request }) {
  const handlePeriod = (filterPeriod) => {
    setRequest(request + filterPeriod);
  };

  const filterPeriod1 = "&primary_release_date.gte=1980-01-01";
  const filterPeriod2 =
    "&primary_release_date.gte=1980-01-01&primary_release_date.lte=1989-12-31";
  const filterPeriod3 =
    "&primary_release_date.gte=1990-01-01&primary_release_date.lte=1999-12-31";
  const filterPeriod4 =
    "&primary_release_date.gte=2000-01-01&primary_release_date.lte=2009-12-31";
  const filterPeriod5 =
    "&primary_release_date.gte=2010-01-01&primary_release_date.lte=2019-12-31";
  const filterPeriod6 = "&primary_release_date.gte=2020-01-01";

  return (
    <div className="period">
      <button
        type="button"
        id="period"
        onClick={() => handlePeriod(filterPeriod1)}
      >
        None 🍄
      </button>
      <br />
      <button
        type="button"
        id="period"
        onClick={() => handlePeriod(filterPeriod2)}
      >
        1980's 🕺
      </button>
      <br />
      <button
        type="button"
        id="period"
        onClick={() => handlePeriod(filterPeriod3)}
      >
        1990's 💾
      </button>
      <br />
      <button
        type="button"
        id="period"
        onClick={() => handlePeriod(filterPeriod4)}
      >
        2000's 💫
      </button>
      <br />
      <button
        type="button"
        id="period"
        onClick={() => handlePeriod(filterPeriod5)}
      >
        2010's 🍸
      </button>
      <br />
      <button
        type="button"
        id="period"
        onClick={() => handlePeriod(filterPeriod6)}
      >
        2020's 🌈
      </button>
    </div>
  );
}

Period.propTypes = {
  setRequest: PropTypes.func.isRequired,
  request: PropTypes.string.isRequired,
};

export default Period;
