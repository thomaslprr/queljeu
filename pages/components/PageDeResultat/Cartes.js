import React from 'react';
import CarteDeResultat from "./CarteDeResultat";

const Cartes = ({ cartes, loading }) => {
    if (loading) {
        return <h2>Chargement...</h2>;
    }

    if(cartes){
        return (
            <div className="ui centered cards">
                {cartes.map(({ id, name, total_rating,cover,first_release_date }) => (
                    <CarteDeResultat
                        key={id}
                        titre={name}
                        note={total_rating}
                        date={first_release_date}
                        cover={cover}

                    />
                ))}
            </div>
        );
    }

    return <div></div>

};

export default Cartes;
