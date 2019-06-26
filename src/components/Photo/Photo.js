import React from 'react';

const Photo = ({src}) => {
    return (
        <div className="photo">
            <img src={`${src}`} />
        </div>
    )
}

export default Photo;