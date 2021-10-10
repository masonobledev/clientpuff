import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa';

const Rating = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return (
    <div>
        {[ ...Array(5)].map((star, i) => {
            const ratingValue = i + 1;

            return (
                <label>
                    <input 
                        type="radio" 
                        name="rating"
                        value={ratingValue}
                        onClick={() => setRating(ratingValue)}
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(null)} 
                    />
                    <FaStar 
                        className="star" 
                        color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"} 
                        size={100}
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(null)} 
                    />
                </label> 
                );
            })}
            <p>You've chosen a rating of {rating}.</p>
    </div>
    );
};

    
                
                

export default Rating;
