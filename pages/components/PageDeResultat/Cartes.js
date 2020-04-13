import React from 'react';
import CarteDeResultat from "./CarteDeResultat";

const Cartes = ({ cartes, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <div className="ui centered cards">
            {cartes.map(({ id, name, total_rating,cover,first_release_date }) => (
                <CarteDeResultat
                    cle={id}
                    titre={name}
                    note={total_rating}
                    date={first_release_date}
                    cover={cover}

                />
            ))}
        </div>
    );
};

export default Cartes;
