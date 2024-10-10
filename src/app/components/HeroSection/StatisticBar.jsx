import React from "react";

const StatisticBar = () => {
  return (
    <section className="mb-4 d-none d-md-block">
      <div className="container">
        <div
          className="row oasis-stats text-center align-items-center"
          data-aos="fade-up"
        >
          <div className="col-md-3 col-6 pt-2 pb-2">
            <h3>
              <div data-from="0" data-to="44">
                44L
              </div>{" "}
             
            </h3>
            <p className="text-white">Patients</p>
          </div>

          <div className="col-md-3 col-12 pt-2 pb-2">
            <h3>
              <div data-from="0" data-to="20">
                20Y
              </div>
            </h3>
            <p className="text-white">Experience</p>
          </div>
          <div className="col-md-3 col-12 pt-2 pb-2">
            <h3>
              <div data-from="0" data-to="300">
                300
              </div>
              +
            </h3>
            <p className="text-white">Doctors</p>
          </div>
          <div className="col-md-3 col-6 pt-2 pb-2">
            <h3>
              <div data-from="0" data-to="33">
                33
              </div>
              +
            </h3>
            <p className="text-white">Clinics</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticBar;
