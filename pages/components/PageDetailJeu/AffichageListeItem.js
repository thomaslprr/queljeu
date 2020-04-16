import React from 'react'


const AffichageListeItem = ({listeItem}) => {



    const val = () => {

        if(listeItem!='error'){
            return listeItem.map(({id,name})=>

                <div className="item" key={id}>
                    <div className="content">
                        <div className="header">{name}</div>
                    </div>
                </div>

            )
        }else{
            return "";
        }

    }




    return (
        <div className="ui mini horizontal divided list">
        {val()}
        </div>
    )


};


export default AffichageListeItem;
