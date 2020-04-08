import React from 'react'
import Head from "next/head";
import axios from "axios";



class PageDeQuestionGenre extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            listeGenres: this.props.tabGenres,
            chargementdonnee:true,
            listeGenresSelectionnes: []

        }

    }

    changerTableauPlateforme(){
        //this.props.modifierTableauPlateforme(this.state.listePlateforme);
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

        if(this.state.listeGenres  == "loading"){
            txtDonnee = <h1>Chargement des données</h1>
        }else if(this.state.listeGenres =="err"){
            txtDonnee = <h1>Erreur lors du chargement des données</h1>
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
