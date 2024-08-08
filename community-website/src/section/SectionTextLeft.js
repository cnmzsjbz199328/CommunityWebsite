import React, { useState } from 'react';
import './Section.css';
import Post from '../components/Post';
import TextToSpeech from '../textToSpeech/TextToSpeech';

function SectionTextLeft({ postIdtext }) {
    const [textForSpeech, setTextForSpeech] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // 用于接收 Post 组件传递的内容
    const handleContentLoaded = (content) => {
        setTextForSpeech(content);
    };

    return (
        <div className='section'>
            <div className="text-container">
                <Post postId={postIdtext} onContentLoaded={handleContentLoaded} />
                <TextToSpeech text={textForSpeech} />
            </div>
            <div className="empty-container">
                {/* 空白区域 */}
            </div>
        </div>
    );
}

export default SectionTextLeft;