import React from 'react';
import CarteDeResultat from "./CarteDeResultat";
import {Icon} from "semantic-ui-react";


const Cartes = ({ cartes, loading }) => {


    if(cartes && !loading){
        return (
            <div className="ui centered cards">
                {cartes.map(({ id, name, total_rating,cover,first_release_date,slug }) => (
                    <CarteDeResultat
                        key={id}
                        titre={name}
                        note={total_rating}
                        date={first_release_date}
                        cover={cover}
                        slug={slug}

                    />
                ))}
            </div>
        );
    }

    return <div></div>

};

export default Cartes;
