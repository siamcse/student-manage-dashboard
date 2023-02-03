import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';

const EditPage = () => {
    const loadDate = format(new Date(), "dd LLL yyyy HH:mm");
    const [date, setDate] = useState(loadDate)
    useEffect(() => {
        const currentDate = setInterval(() => setDate(format(new Date(), "dd LLL yyyy HH:mm")), 1000);
        return function cleanup() {
            clearInterval(currentDate);
        };
    }, []);
    return (
        <div className='md:mr-5 mx-3'>
            <div className='flex justify-between'>
                <p>Edit Students</p>
                <p>{date}</p>
            </div>

        </div>
    );
};

export default EditPage;