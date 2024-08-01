import React, { useState } from 'react';
import './Logo.css';

function Logo({ title, imageLink }) {
    const [imageError, setImageError] = useState(false);

    return (
        <div className='logo-container'>
            {imageError ? (
                <div className="image-placeholder">Image not available</div>
            ) : (
                <img 
                    src={imageLink} 
                    alt={title} 
                    onError={() => setImageError(true)} 
                />
            )}
        </div>
    );
}

export default Logo;

