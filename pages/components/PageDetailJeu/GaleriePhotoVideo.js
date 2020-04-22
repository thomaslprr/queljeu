import React, {useEffect, useState} from "react";
import {Grid, Segment} from "semantic-ui-react";
import Photos from "./Photos";
import BouttonDirectionnel from "./BouttonDirectionnel";

const GaleriePhotoVideo = ({screenshot, video}) => {

    const [photos,setPhotos] = useState([]);

    const [currentItem, setCurrentItem] = useState(1);

    const [itemTotal,setItemTotal] = useState(null);

    const [itemParPage, setItemParPage] = useState(1);

    const [itemVideo, setItemVideo] = useState(null);


    useEffect(()=>{

        if(video){
            setItemTotal(screenshot.length+video.length);
        }else if (screenshot){
            setItemTotal(screenshot.length);
        }

        if(video||screenshot){
            remplirTableauPhoto();

        }

    },[currentItem]);

    const itemSuivant = () => {


            setCurrentItem(currentItem+1);


    }

    const itemPrecedent = () => {


            setCurrentItem(currentItem-1);


    }



    const remplirTableauPhoto = () => {
        let photo = [];



        for(let i=0; i< screenshot.length;i++){
                photo.push({id:i,src: "https://images.igdb.com/igdb/image/upload/t_screenshot_med_2x/"+screenshot[i].image_id+".jpg", width: screenshot[i].width, height: screenshot[i].height});
            }


        if(video){
            setItemVideo(photo.length);
            for(let j = 0; j<video.length ; j++){
                photo.push(video[j]);
            }
        }
        setPhotos(photo);
    }


    if(screenshot || video){
        return (
            <Grid columns='equal' centered>
                <Grid.Column verticalAlign='middle' textAlign='right' >
                    <BouttonDirectionnel direction="prec"
                                         itemActuel={currentItem}
                                         itemTotal={itemTotal-1}
                                         clic={()=> itemPrecedent() }
                                         classeicon="angle double left icon"
                    />
                </Grid.Column>
                <Grid.Column verticalAlign='center'  style={{width:300+'px'}}>
                    <Photos photos={photos} nbItemParPage={itemParPage} currentItem={currentItem} itemVideo={itemVideo}/>
                </Grid.Column>
                <Grid.Column verticalAlign='middle' textAlign='left' >
                    <BouttonDirectionnel direction="next"
                                         itemActuel={currentItem}
                                         itemTotal={itemTotal-1}
                                         clic={()=> itemSuivant() }
                                         classeicon="angle double right icon"
                    />
                </Grid.Column>
            </Grid>




        )
    }else{
        return <div></div>
    }




}

export default GaleriePhotoVideo;
