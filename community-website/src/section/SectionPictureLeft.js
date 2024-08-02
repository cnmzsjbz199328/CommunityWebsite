import React from 'react';
import './Section.css';
import Post from '../components/Post'; // 更新路径

function SectionPictureLeft({postId}) {

    return (
        <div className='section'>
            <div className="image-container">
            <Post postId={1} />
            </div>
            <div className="text-container">
                <Post postId={8} />
            </div>
        </div>
    );
}

export default SectionPictureLeft;
