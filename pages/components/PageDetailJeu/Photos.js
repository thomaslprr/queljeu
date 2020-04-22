import React, {useEffect, useState} from 'react';
import {Embed} from "semantic-ui-react";

const Photos = ({ photos, nbItemParPage,currentItem, itemVideo }) => {

    const [medias, setMedias] = useState();

    useEffect(()=>{

        let val = photos.splice(currentItem-1,nbItemParPage);



        setMedias(val);

    },[currentItem,photos,itemVideo]);


    if(medias && itemVideo && currentItem==itemVideo && nbItemParPage>1 ){
        const  photo= <img  key={medias[0].id} src={medias[0].src} height={medias[0].height} width={medias[0].width} className="ui image"/>
        const vid = <iframe key={medias[1].id} src={'https://www.youtube.com/embed/'+medias[1].video_id} frameBorder="0"
                             allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                             allowFullScreen className="ui image" style={{ width:450+'px', height:250+'px' }}></iframe>

        return(
            <div className="ui large images centered" style={{width:75 +'vw'}}>
                {photo}
                {vid}
            </div>
        )

    }


    if(medias && currentItem<=itemVideo || medias && !itemVideo ){

        return (
            <div className="ui large images centered" >
                {medias.map(({ id, src, height, width}) => (
                    <img key={id} src={src} height={height} width={width} className="ui image"/>
                ))}
            </div>
        );

    }else if(medias && currentItem>itemVideo){
      return (
          <div className="ui large images centered">
              {medias.map(({id, video_id,name})=>(
                  <iframe key={id}  src={'https://www.youtube.com/embed/'+video_id} frameBorder="0"
                          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen className="ui image" style={{ width:450+'px', height:250+'px'}}></iframe>
              ))}
          </div>
          )
    }


    return <div></div>

};

export default Photos;
