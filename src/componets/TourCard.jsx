import React, { useState } from 'react';;
// TourCard renders a card with tour information

const TourCard = ({ id,name, info, price, image, onRemove }) => {
    // local state to manage the read more/show less functionality
const [readMore, setReadMore] = useState(false);

return (
    <article className='single-tour'>
        <h3> {title}</h3>
        <h5>{author}</h5>

        <p>
            {/*Show full info if readMore is true, otherwise show truncated info*/}
            {readMore ? info : `${info.substring(0, 80)}...`}
            <button onClick={() => setReadMore(!readMore)}>
                {/*Toggle button text based on readMore state*/}
                {readMore ? 'Show Less' : 'Read More'}

            </button>
        </p>

        {/* Button to Remove the Tour */}
        <button className='delete-btn' onClick={()=> {
            onRemove(id)
        }}>Remove Tour </button>
           
        </article>

)
} 
export default TourCard; 
