import React from 'react';
import Phone from './Phone';

const Phones = ({ phones }) => {
    return (
        <div className='text-center p-2 text-2xl '>
            All category Phones

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
                {
                    phones?.map(phone => <Phone key={phone.id} phone={phone}></Phone>)
                }
            </div>
        </div>
    );
};

export default Phones;