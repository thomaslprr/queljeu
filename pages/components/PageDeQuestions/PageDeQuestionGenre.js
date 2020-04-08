import React from 'react'
import Head from "next/head";
import axios from "axios";



class PageDeQuestionGenre extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            listeGenres: [],
            chargementdonnee:true,
            listeGenresSelectionnes: []

        }
    }

    remplirTableaux(){


        let listeGenresUpdated = [] ;


        for(let i =0;i<this.state.listeGenres.length;i++){


            listeGenresUpdated=[...listeGenresUpdated,{
                id: this.state.listeGenres[i].id,
                created_at: this.state.listeGenres[i].created_at,
                name: this.state.listeGenres[i].name,
                slug: this.state.listeGenres[i].slug,
                url: this.state.listeGenres[i].url,
                style: "ui card",
                texte: ""

            }]

        }

        this.setState({
            listeGenres: listeGenresUpdated
        },()=>console.log(this.state.listeGenres));


    }

    async componentDidMount() {

        axios({
            url: ""+proxyCORS+"https://api-v3.igdb.com/genres",
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'user-key': userKey
            },
            data: "fields created_at,name,slug,updated_at,url; limit 500;"
        })
            .then(response => {
                this.setState({
                    chargementdonnee:false,
                    listeGenres: response.data

                },() => this.remplirTableaux())

            })
            .catch(err => {
                console.error(err);
            });


    }

    changerTableauPlateforme(){
        //this.props.modifierTableauPlateforme(this.state.listePlateforme);
    }

    cliqueReponse1(){
        console.log("ok");
    }

    cliqueReponse(id){

        let listeSelection= this.state.listeGenresSelectionnes;

        let liste = this.state.listeGenres;

        let trouver=false;


        for(let i=0;i<listeSelection.length;i++){
            if(id == listeSelection[i]){
                trouver=true;
                listeSelection.splice(listeSelection.indexOf(id),1);
                for(let j=0;j<liste.length;j++){
                    if(liste[j].id == id){
                        liste[j].style="ui card";
                        liste[j].texte="";
                    }
                }

            }
        }


        if(!trouver){
            listeSelection = [...listeSelection,id];
            for(let j=0;j<liste.length;j++){
                if(liste[j].id == id){
                    liste[j].style="ui card blue";
                    liste[j].texte=" ✔️";
                }
            }
        }


        this.setState({
            listeGenresSelectionnes: listeSelection,
            listeGenres: liste
        }

        );




    }

    render() {

        let txtDonnee;
        let listeDesGenres;

        if(this.state.chargementdonnee){
            txtDonnee = <h1>Chargement des données</h1>
        }else {

           listeDesGenres = this.state.listeGenres.map(({ id, name,style,texte}) => (


                   <a className={style} key={id} onClick={() => this.cliqueReponse(id)} >
                       <div className="content">
                           <div className="header">{name} {texte}</div>

                       </div>
                   </a>



           ))


        }



        return ( <div>
                <h1 className="ui header center aligned">Plateforme</h1>

                {txtDonnee}

                <div className="ui centered cards">

                    {listeDesGenres}




                </div>




            </div>

        )
    }


}

export default PageDeQuestionGenre;
