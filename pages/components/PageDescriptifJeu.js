import React from 'react'
import {useEffect, useState} from "react";
import axios from "axios";


const proxyCORS = "https://contre-cors.herokuapp.com/";
const userKey = '634b219991f28ec8c656387de180af49';

const PageDescriptifJeu = ({slug,changerTitreCallBack}) => {

        const [loading, setLoading] = useState(true);

        const [dataGenerale, setDataGenerale] = useState([]);
        const req = "fields * ; where slug=\""+slug+"\" ; limit 1;";

        useEffect(() => {
                console.log(slug);
                const fetchPosts = async () => {
                        console.log(req);
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
                        setDataGenerale(res.data[0]);
                        setLoading(false);
                        changerTitreCallBack(res.data[0].name);

                };

                fetchPosts();


        }, []);





        if(loading){
                return <div>Chargement ...</div>
        }else{
                return <div><h1>{dataGenerale.name}</h1>
                        <h3>{dataGenerale.summary}</h3>

              </div>

        }






}

export default PageDescriptifJeu;
