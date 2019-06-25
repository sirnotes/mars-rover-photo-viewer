import React from 'react';

import './PhotoFinder.css';

const PhotoFinder = ({ onSolChange, onCameraChange, onButtonSubmit, maxSol, sol }) => {
    return(
        <div>
            <p className="f3">
                { 'This will retreive 25 photos at a time from the NASA image library for the Mars Curiosity Rover' }
            </p>
            <div className="center">
                <div className="form center pa4 br3 shadow-5">
                    <select className="f4 pa2 w-40 center" onChange={onCameraChange}>
                        <option value="">Any Camera</option>
                        <option value="FHAZ">Front Hazard Avoidance Camera</option>
                        <option value="RHAZ">Rear Hazard Avoidance Camera</option>
                        <option value="MAST">Mast Camera</option>
                        <option value="CHEMCAM">Chemistry and Camera Complex</option>
                        <option value="MAHLI">Mars Hand Lens Imager</option>
                        <option value="MARDI">Mars Descent Imager</option>
                        <option value="NAVCAM">Navigation Camera</option>
                    </select>
                    <label>Mars Sol [1-{maxSol}] <input type="number" className="f4 pa2 w-20 center" onChange={onSolChange} max={maxSol} value={sol} /></label>
                    <button
                        className="w-30 grow f4 link ph3 pv2 dib white bg-light-red"
                        onClick={onButtonSubmit}
                        >Get Photos</button>
                </div>
            </div>
        </div>
    )
}

export default PhotoFinder;