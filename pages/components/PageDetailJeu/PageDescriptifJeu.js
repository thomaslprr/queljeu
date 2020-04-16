import React from 'react'
import {useEffect, useState} from "react";
import axios from "axios";
import UnixToDate from "../UnixToDate";
import AffichageListeItem from "./AffichageListeItem";
import Rate from "../Rate";
import LinkList from "./LinkList";
import {Container} from "semantic-ui-react";


const proxyCORS = "https://contre-cors.herokuapp.com/";
const userKey = '634b219991f28ec8c656387de180af49';

const PageDescriptifJeu = ({slug,changerTitreCallBack}) => {

        const [loading, setLoading] = useState(true);

        const [dataGenerale, setDataGenerale] = useState([]);

        const [coverUrl,setCoverUrl] = useState("");

        const req = "fields * , cover.image_id , genres.name, player_perspectives.name, genres.url,themes.name, platforms.name, websites.category, websites.url ; where slug=\""+slug+"\" ; limit 1;";

        useEffect(() => {
                const fetchPosts = async () => {
                        setLoading(true);
                        const res = await axios({
                                url: ""+proxyCORS+"https://api-v3.igdb.com/games",
                                method: 'POST',
                                headers: {
                                        'Accept': 'application/json',
                                        'user-key': userKey
                                },
                                data: req
                        });
                        console.log(res.data[0]);
                        setDataGenerale(res.data[0]);
                        setLoading(false);
                        changerTitreCallBack(res.data[0].name);
                        setCoverUrl("https://images.igdb.com/igdb/image/upload/t_cover_big_2x/"+res.data[0].cover.image_id+".jpg")

                };

                fetchPosts();


        }, []);




        if(loading){
                return <div>Chargement ...</div>
        }else{
                return <div>
                        <div className="ui two column middle aligned stackable center aligned page grid">
                                <div className="row">
                                        <div className="column">
                                                <img className="ui medium rounded large image" src={coverUrl} />
                                        </div>
                                        <div className="column float left aligned" >
                                                <h1 className="ui header">
                                                        {dataGenerale.name}
                                                        <div className="sub header"><UnixToDate unix={dataGenerale.first_release_date}/></div>
                                                </h1>

                                                <Rate note={dataGenerale.total_rating} noteMax={5} /> <br/>
                                                <AffichageListeItem listeItem={dataGenerale.platforms || -1} name="" preTexte="🎮"/>
                                                <br/><br/>

                                                <span>{dataGenerale.summary || ''}</span>
                                                <br/>




                                                <AffichageListeItem listeItem={dataGenerale.genres || -1} name="Genre"/>
                                                <AffichageListeItem listeItem={dataGenerale.themes || -1} name="Thème"/>
                                                <AffichageListeItem listeItem={dataGenerale.player_perspectives || -1} name="Perspective du joueur"/>
                                                <LinkList website={dataGenerale.websites || -1 }/>



                                        </div>
                                </div>
                                <div className="row">
                                </div>

                        </div>

              </div>

        }






}

export default PageDescriptifJeu;
