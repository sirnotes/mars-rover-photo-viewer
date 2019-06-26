import React from 'react';
import Photo from '../Photo/Photo';

import './Photos.css';

const Photos = ({photos}) => {
    return (
        <div className="photos" style={{ overflowY: 'scroll', height: 500 }}>
            {

                photos.map((photo, index) => (
                    <Photo
                        key={index}
                        src={photo}
                    />
                ))
            }
        </div>
    );
}

export default Photos;