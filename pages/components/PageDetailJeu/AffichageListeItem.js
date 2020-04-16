import React, {useEffect,useState} from 'react'


const AffichageListeItem = ({name,listeItem,preTexte}) => {

    const [txt,setTxt] = useState(null);

    useEffect(()=> {

        val();

    },[])



    const val = () => {

        if( listeItem!= -1){
            const res = listeItem.map(({id,name})=>

                <div className="item" key={id}>
                    <div className="content">
                        <div className="header">{name}</div>
                    </div>
                </div>

            )
            setTxt(res);
        }

    }


    if(txt){

        if(preTexte){
            return (
                <div>

                    {preTexte || ''}<div className="sub header ui mini horizontal divided list">{txt}</div>
                </div>

            )
        }else{
            return (
                <h5 className="ui header">
                    {name || ''}
                    <div className="sub header ui mini horizontal divided list">{txt}</div>
                </h5>
            )
        }



    }else{
        return <div></div>
    }





};


export default AffichageListeItem;
