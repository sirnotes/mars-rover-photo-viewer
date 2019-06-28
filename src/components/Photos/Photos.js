import React from 'react';
import Photo from '../Photo/Photo';

import './Photos.css';

const Photos = ({photos}) => {
    return (
        <div className="photos flex flex-wrap justify-center" style={{ overflowX: 'scroll' }}>
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