import React from 'react'
import IVFSpecialists from './IVFSpecialists'
import DynamicDoctors from './DynamicDoctors'

const BestDoctors = ({center, filteredTestimonials, service}) => {
  return (
   <>
    <IVFSpecialists service={service} />
    <DynamicDoctors center={center} filteredTestimonials={filteredTestimonials} service={service} />
   </>
  )
}

export default BestDoctors