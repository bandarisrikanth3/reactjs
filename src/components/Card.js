import React from 'react';
import Tilt from 'react-parallax-tilt';

const Card = ({name, email, id}) => {
    return (
        <div className="bg-light-green dib b3 pa3 ma2 grow bw2 shadow-5">
            <Tilt>
                <img src={`https://robohash.org/${id}?200x200`} alt="robots" />
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </Tilt>
        </div>
    )
}

export default Card;