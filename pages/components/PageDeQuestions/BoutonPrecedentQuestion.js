import React from 'react';

const BoutonPrecedentQuestion = ({fonctionClique}) => {

    if(fonctionClique){
        return (
            <button className="ui vertical animated button blue huge" onClick={fonctionClique}>
                <div className="hidden content">Retour</div>
                <div className="visible content"><i aria-hidden="true" className="arrow left icon"></i></div>
            </button>);

    }else{
        return <div></div>
    }
}

export default BoutonPrecedentQuestion;
