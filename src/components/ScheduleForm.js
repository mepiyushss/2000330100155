// components/ScheduleForm.js

import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { v4 as uuidv4 } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css"; // Add this line to import Bootstrap CSS

const ScheduleForm = ({ onAddTrain }) => {
  const [name, setName] = React.useState("");
  const [departure, setDeparture] = React.useState(null);
  const [arrival, setArrival] = React.useState(null);

  const handleAddTrain = () => {
    if (name && departure && arrival) {
      const newTrain = { id: uuidv4(), name, departure, arrival };
      onAddTrain(newTrain);
      setName("");
      setDeparture(null);
      setArrival(null);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-6">
          <div className="container">
            <div className="row">
              <div className="col-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Train name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="col-4">
                <DatePicker
                  className="form-control"
                  selected={departure}
                  onChange={(date) => setDeparture(date)}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  dateFormat="yyyy-MM-dd HH:mm"
                  placeholderText="Departure time"
                />
              </div>
              <div className="col-4">
                <DatePicker
                  className="form-control"
                  selected={arrival}
                  onChange={(date) => setArrival(date)}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  dateFormat="yyyy-MM-dd HH:mm"
                  placeholderText="Arrival time"
                />
              </div>
            </div>
            <button className="btn btn-primary mt-3" onClick={handleAddTrain}>
              Add Train
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleForm;
