import React from 'react';
import Card from './Card';
import Tilt from 'react-parallax-tilt';

const CardList = ({ robots }) => {

    return (
        <div>
            {
                robots.map ( (user, i) => {
                    return (
                        <Tilt>
                            <Card
                                key={i}
                                id={robots[i].id}
                                name={robots[i].name}
                                email={robots[i].email}
                            />
                        </Tilt>
                    )
                })
            }
        </div>
    )
}

export default CardList;