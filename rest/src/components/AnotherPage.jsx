import React from 'react';

const AnotherPage = (props) => {
    return (
        <div className='flex flex-col flex-wrap items-center md:flex-row'>
            <div className='flex justify-between gap-10  px-10 py-10'>
                {/* First Item */}
                <ul className='flex flex-wrap  border border-red-100'>
                    <li className='p-4 flex'>
                        <img src='' alt='' className='w-full h-fit object-cover' />
                        <p className='text-sm p-4'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aperiam laboriosam eum facere fugit,
                            suscipit cum dolorem consectetur ab nemo! Repellendus architecto iure eos sint nulla, mollitia adipisci voluptatem iste!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aperiam laboriosam eum facere fugit.
                        </p>
                    </li>
                    <h1 className='text-3xl font-mono font-bold mt-2'>Hafeex</h1>
                    <li className='flex justify-between w-full mt-4'>
                        <h1 className='text-lg'>$100</h1>
                        <h1 className='text-lg'>XXXX</h1>
                    </li>
                </ul>

                {/* Second Item */}
                <ul className='flex  w-2/4 border border-red-100'>
                    <li className='p-4 flex flex-col'>
                        <img src='' alt='' className='w-full h-fit object-cover' />
                        <div className='flex justify-between mt-4'>
                            <h1 className='text-lg'>$100</h1>
                            <h1 className='text-lg'>XXXX</h1>
                        </div>
                        <div className=''>
                            <h1 className='text-3xl font-mono font-bold mt-2'>Hafeex</h1>
                            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum deserunt explicabo ea quo illo sequi nisi architecto ullam? Earum aperiam in recusandae,
                                ullam similique odio modi opti impedit voluptatibus aut!</p>
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
