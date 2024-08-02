import React from 'react';
import Section from '../section/Section';
import SectionPictureRight from '../section/SectionPictureRight';

function Activities() {
    return (
        <div>
            <h1>Welcome to Our Activities</h1>
            <p>This is the Activities page of our site.</p>
            <Section pageId={25}/>
            <p>This is the Section which picture is in the right.</p>
            <SectionPictureRight postIdtext={8} postIdphoto={1}/>
        </div>
    );
}

export default Activities;