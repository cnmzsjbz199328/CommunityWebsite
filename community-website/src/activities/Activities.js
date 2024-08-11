import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import '../activities/Activities.module.css';
import SectionPictureRight from '../section/SectionPictureRight';

function Activities() {
    const [index, setIndex] = React.useState(0);

    const handleChangeIndex = (index) => {
        setIndex(index);
    };

    return (
        <div className='activities-container'>
            <h1>Welcome to Our Activities</h1>
            <p>This is the Activities page of our site.</p>
            <div className='content'>
                <div className='nav-buttons-vertical'>
                    <button onClick={() => handleChangeIndex(0)} className='icon-button'>
                        <span>Hobbies</span>
                    </button>
                    <button onClick={() => handleChangeIndex(1)} className='icon-button'>
                        <span>Exercises</span>
                    </button>
                    <button onClick={() => handleChangeIndex(2)} className='icon-button'>
                        <span>For the Kids</span>
                    </button>
                    <button onClick={() => handleChangeIndex(3)} className='icon-button'>
                        <span>Technical Help</span>
                    </button>
                    <button onClick={() => handleChangeIndex(4)} className='icon-button'>
                        <span>Community Projects</span>
                    </button>
                    <button onClick={() => handleChangeIndex(5)} className='icon-button'>
                        <span>Education and Services</span>
                    </button>
                    <button onClick={() => handleChangeIndex(6)} className='icon-button'>
                        <span>Special Interest</span>
                    </button>
                </div>
                <SwipeableViews index={index} onChangeIndex={handleChangeIndex} className='swipeable-views'>
                    <div className='activity-item'>
                        <SectionPictureRight postIdtext={10} postIdphoto={2}>
                            <span>Hobbies Content</span>
                        </SectionPictureRight>
                    </div>
                    <div className='activity-item'>
                        <SectionPictureRight postIdtext={12} postIdphoto={3}>
                            <span>Exercises Content</span>
                        </SectionPictureRight>
                    </div>
                    <div className='activity-item'>
                        <SectionPictureRight postIdtext={14} postIdphoto={4}>
                            <span>For the Kids Content</span>
                        </SectionPictureRight>
                    </div>
                    <div className='activity-item'>
                        <SectionPictureRight postIdtext={16} postIdphoto={5}>
                            <span>Technical Help Content</span>
                        </SectionPictureRight>
                    </div>
                    <div className='activity-item'>
                        <SectionPictureRight postIdtext={18} postIdphoto={6}>
                            <span>Community Projects Content</span>
                        </SectionPictureRight>
                    </div>
                    <div className='activity-item'>
                        <SectionPictureRight postIdtext={20} postIdphoto={7}>
                            <span>Education and Services Content</span>
                        </SectionPictureRight>
                    </div>
                    <div className='activity-item'>
                        <SectionPictureRight postIdtext={22} postIdphoto={8}>
                            <span>Special Interest Content</span>
                        </SectionPictureRight>
                    </div>
                </SwipeableViews>
            </div>
        </div>
    );
}

export default Activities;