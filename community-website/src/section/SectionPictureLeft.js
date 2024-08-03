import React from 'react';
import './Section.css';
import Post from '../components/Post'; // 更新路径

function SectionPictureLeft({ postIdphoto, postIdtext }) {

    return (
        <div className='section'>
            <div className="image-container">
                <Post postId={postIdphoto} />
            </div>
            <div className="text-container">
                <Post postId={postIdtext} />
            </div>
        </div>
    );
}

export default SectionPictureLeft;
