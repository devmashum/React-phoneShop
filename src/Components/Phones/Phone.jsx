import React from 'react';
import { Link } from 'react-router-dom';

const Phone = ({ phone }) => {
    const { id, image, price, phone_name, rating } = phone || {};
    return (
        <div>
            <div className="relative flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md ">
                <div className="relativeoverflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 ">
                    <img className='p-10' src="https://i.ibb.co/c1cKcQ0/hauptbild-original.jpg" alt="" />
                </div>
                <div >
                    <div className="mb-2 flex items-center justify-between p-2">
                        <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                            {phone_name}
                        </p>
                        <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                            $ {price}
                        </p>
                    </div>
                    <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                        With plenty of talk and listen time, voice-activated Siri access, and an
                        available wireless charging case.
                    </p>
                    <p>Rating: {rating}</p>
                </div>
                <Link to={`/phones/${id}`} >
                    <button>See Details </button>

                </Link>

            </div>
        </div >
    );
};

export default Phone;