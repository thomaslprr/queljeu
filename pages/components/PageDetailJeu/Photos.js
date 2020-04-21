import React, {useEffect, useState} from 'react';

const Photos = ({ photos, nbItemParPage,currentItem }) => {

    const [medias, setMedias] = useState();

    useEffect(()=>{

        setMedias(photos.splice(currentItem-1,nbItemParPage));

    },[currentItem,photos]);



    if(medias){

        return (
            <div className="ui large images centered" style={{width:75 +'vw'}}>
                {medias.map(({ id, src, height, width}) => (
                    <img key={id} src={src} height={height} width={width} className="ui image"/>
                ))}
            </div>
        );

    }


    return <div></div>

};

export default Photos;
