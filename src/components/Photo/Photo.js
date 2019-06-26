import React from 'react';

const Photo = ({src}) => {
    return (
        <div className="photo tc bg-white pa1 dib br3 ma2 grow bw2 shadow-5">
            <img alt="" src={`${src}`} style={{ width: 'auto', height: 250 }}/>
        </div>
    )
}

export default Photo;