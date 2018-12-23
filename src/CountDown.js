import React from "react";

const addLeadingZeros = value => {
  value = String(value);
  while (value.length < 2) {
    value = "0" + value;
  }
  return value;
};

const daysFromTime = remainingTime =>
  Math.floor(remainingTime / (1000 * 60 * 60 * 24));
const hoursFromTime = remainingTime =>
  Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
const minutesFromTime = remainingTime =>
  Math.floor((remainingTime / (1000 * 60)) % 60);
const secondsFromTime = remainingTime =>
  Math.floor((remainingTime / 1000) % 60);

const renderTime = time => {
  return addLeadingZeros(time);
};

const CountDown = ({ finalTime, currentTime, message }) => {
  const remainingTime = finalTime - currentTime;
  return (
    <React.Fragment>
      {remainingTime > 0 ? (
        <div>
          <span className="col">
            <strong>{renderTime(daysFromTime(remainingTime))}</strong>
            Days
          </span>
          <span className="col">
            <strong>{renderTime(hoursFromTime(remainingTime))}</strong>
            hours
          </span>
          <span className="col">
            <strong>{renderTime(minutesFromTime(remainingTime))}</strong>
            minutes
          </span>
          <span>
            <strong>{renderTime(secondsFromTime(remainingTime))}</strong>
            seconds
          </span>
        </div>
      ) : (
        <p className="christmasMessage">{message}</p>
      )}
    </React.Fragment>
  );
};

export default CountDown;
