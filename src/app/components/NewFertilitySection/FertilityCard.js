"use client"
import React from 'react';

const FertilityCard = ({ title, text }) => {
    return (
        <div className="card mb-4">
            <div className="row g-0 align-items-center">
                <div className="col-md-3">
                    <div className="icon-placeholder mx-auto" style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {/* Image can go here */}
                        <img src="https://via.placeholder.com/150" alt="placeholder" className="img-fluid" style={{ borderRadius: '5px' }} />
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="card-body">
                        <h5 className="card-title text-center">{title}</h5>
                        <p className="card-text text-center">
                            {text}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FertilityCard;
