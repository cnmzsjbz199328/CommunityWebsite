import React, { useState } from 'react';
import './Logo.css';
import Post from '../components/Post';

function Logo({postId}) {
    return (
        <div className='logo-container'>
            <Post postId={14} />
        </div>
    );
}

export default Logo;

