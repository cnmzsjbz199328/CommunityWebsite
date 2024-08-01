import React, { useState } from 'react';
import './Section.css';
import Post from '../components/Post'; // 更新路径

function Section({ postId, imageLink }) {
    const [imageError, setImageError] = useState(false);

    return (
        <div className='section'>
            <div className="image-container">
                {imageError ? (
                    <div className="image-placeholder">Image not available</div>
                ) : (
                    <img 
                        src={imageLink} 
                        alt="Post Image" 
                        onError={() => setImageError(true)} 
                    />
                )}
            </div>
            <div className="text-container">
                <Post postId={8} />
            </div>
        </div>
    );
}

export default Section;
