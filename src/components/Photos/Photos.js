import React from 'react';
import Photo from '../Photo/Photo';

const Photos = ({photos}) => {
    console.log(photos);
    return (
        <div className="photos">
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