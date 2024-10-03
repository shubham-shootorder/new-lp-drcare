import React from 'react'

const StatisticBar = () => {
  return (
    <section className="mb-4 d-none d-md-block">
      <div className="container">
        <div className="row oasis-stats text-center align-items-center" data-aos="fade-up">
          <div className="col-md-3 col-6 pt-2 pb-2">
            <h3>
              <div data-from="0" data-to="100000">1,00,000</div>+
            </h3>
            <p className='text-white'>Healthy Babies</p>
          </div>
          <div className="col-md-3 col-6 pt-2 pb-2">
            <h3>
              <div data-from="0" data-to="69">69</div>% IVF
            </h3>
            <p className='text-white'>Success Rate Across India</p>
          </div>
          <div className="col-md-3 col-12 pt-2 pb-2">
            <h3>
              <div data-from="0" data-to="1000">1000</div>+Cases
            </h3>
            <p className='text-white'>MicroTESE solving Male Infertility</p>
          </div>
          <div className="col-md-3 col-12 pt-2 pb-2">
            <h3>
              <div data-from="0" data-to="32">32 Centres</div>
            </h3>
            <p className='text-white'>Across India</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatisticBar