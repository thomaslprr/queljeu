import React, {useEffect, useState} from "react";

const BouttonDirectionnel = ({direction,classeicon,itemActuel, itemTotal, clic}) => {


    const [affichage,setAffichage] = useState(true);

    useEffect(()=>{



        if(itemActuel-1==itemTotal && direction=="next"){
            setAffichage(false);
        }else if(direction=="next"){

            setAffichage(true);
        }


        if (itemActuel==1 && direction=="prec"){
            setAffichage(false);
        }else if (direction=="prec"){
            setAffichage(true);
        }


    },[itemActuel,itemTotal]);



    if(affichage){
        return (
            <button className="ui circular icon button" onClick={clic} >
                <i aria-hidden="true" className={classeicon}></i>
            </button>
        )
    }else{
        return <div></div>
    }

}

export default  BouttonDirectionnel;
