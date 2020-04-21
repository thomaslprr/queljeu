import React, {useEffect, useState} from "react";
import {Grid, Segment} from "semantic-ui-react";
import Photos from "./Photos";
import BouttonDirectionnel from "./BouttonDirectionnel";

const GaleriePhotoVideo = ({screenshot, video}) => {

    const [photos,setPhotos] = useState([]);

    const [currentItem, setCurrentItem] = useState(1);

    const [itemTotal,setItemTotal] = useState(null);

    const [itemParPage, setItemParPage] = useState(2);


    useEffect(()=>{

        if(screenshot){
            setItemTotal(screenshot.length);
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


        setPhotos(photo);
    }


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
            <Grid.Column width={10}>
                    <Photos photos={photos} nbItemParPage={itemParPage} currentItem={currentItem}/>
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



}

export default GaleriePhotoVideo;
