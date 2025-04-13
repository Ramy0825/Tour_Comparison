import React, { useEffect, useState } from 'react';
import TourCard from './tourcard';

const TourList = ({Tour, setTours, onRemove}) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
const fetchTours = async () => {
    try {
        const response = await fetch('https://course-api.com/react-tours-project');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTours(data);
    } catch (error) {
        setError(error.message);
    } finally {
        setLoading(false);
    }
}
};;

setTours(trimmed);
setLoading(false);

//RUn fetchTours function when the component mounts
useEffect(() => {
    fetchTours();
}, []);

//rendering the component
if (loading) {
    return <h2> Loading...</h2>
};
if (error) {
    return <h2>{error}</h2>
}
if (tours.length === 0){
    return (
        <>
            <h2> No Tours Left</h2>
            <button onClick={fetchTours}>Refresh</button>
        </>
    )
}

return (
    <section className='tours'>
            {tours.map((tour) => {
                return (
                    <TourCard key={tour.id} 
                    {...tour}
                    onRemove={onRemove} 
                />
                )
            })}
        
        </section>
)

export default TourList;
