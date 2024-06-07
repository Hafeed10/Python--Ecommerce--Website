import React, { useState } from 'react';
import { defultloop } from '../Data/AntherPageData';
import { data } from '../Data/AntherPageData';

const AnotherPage = (props) => {
    const [count, setCount] = useState(1);

    const incrementCount = () => {
        setCount(count + 1);
    };

    const decrementCount = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <div className='flex flex-col flex-wrap items-center md:flex-row'>
            <div className='flex justify-between gap-10 px-10 py-10'>
                {/* First Item */}
                <ul className='flex flex-wrap border border-red-100'>
                    <li className='p-4 flex'>
                        <img src='' alt='' className='w-full h-fit object-cover' />
                        {defultloop.map((item) => (
                            <p key={item.id} className='text-sm p-4'>
                                {item.description}
                            </p>
                        ))}
                    </li>
                    <h1 className='text-3xl font-mono font-bold mt-2'>Hafeex</h1>
                    {defultloop.map((items) => (
                        <li key={items.id} className='flex justify-between w-full mt-4' >
                            <h1 className='text-lg'>{items.price}</h1>
                            <h1 className='text-lg'>{items.loop_just}</h1>
                        </li>
                    ))}

                </ul>

                {/* Second Item */}
                <ul className='flex w-2/4 border border-red-100'>
                    <li className='p-4 flex flex-col'>
                        <img src='' alt='' className='w-full h-fit object-cover' />
                        {defultloop.map((max) => (
                            <div key={max.id} className='flex justify-between mt-4' >
                                <h1 className='text-lg'>{max.price}</h1>
                                <h1 className='text-lg'>{max.loop_just}</h1>
                            </div>
                        ))}
                        <div className=''>
                            <h1 className='text-3xl font-mono font-bold mt-2'>Hafeex</h1>
                            {
                                data.map((product) => (
                                    <p key={product.id} className='text-sm mt-2' >
                                        {product.description}
                                    </p>
                                ))
                            }

                        </div>
                        <div className='count flex mt-3 cursor-pointer'>
                            <h1 className='text-lg p-2' onClick={decrementCount}>-</h1>
                            <input
                                className='border-gray-600 border w-fit px-10 text-center'
                                type='number'
                                value={count}
                                readOnly
                            />
                            <h1 className='text-lg p-2' onClick={incrementCount}>+</h1>
                        </div>
                        <button className='bg-yellow-300 rounded-md transition-transform duration-300 ease-in-out text-sm py-3 font-extrabold hover:bg-yellow-400 mt-2'>
                            Buy Now
                        </button>
                    </li>
                </ul>
            </div>
        </div >
    );
};

export default AnotherPage;
