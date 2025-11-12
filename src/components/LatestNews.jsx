import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-4 bg-base-200 p-3'>
            <p className='text-base-100 bg-secondary px-3 py-2'>Latest</p>
            {/* ak side diye likha chole jaoya ke bole marquee */}
            <Marquee className='flex gap-5' speed={60} pauseOnHover={true}>
                <p className='font-bold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, aliquid?</p>
                <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolore temporibus commodi dicta quaerat illo laudantium, molestiae repellat minus accusantium.</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;