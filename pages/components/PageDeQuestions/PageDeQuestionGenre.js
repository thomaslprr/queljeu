import React from 'react'

import ResetQuizzButton from "../ResetQuizzButton";
import Loader from "../Loader";
import BoutonPrecedentQuestion from "./BoutonPrecedentQuestion";


class PageDeQuestionGenre extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            listeGenres: this.props.tabGenres,
            chargementdonnee:true,
            listeGenresSelectionnes: [],
            titre: this.props.value

        }
    }

    remplirListeApi(val){
        this.setState({
            listeGenres: val
        })
    }

    changerTableauGenre(){
        this.props.modifierTableauGenre(this.state.listeGenresSelectionnes);
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

        if(this.state.listeGenres){
            if(this.state.listeGenres  == "loading"){
                txtDonnee = <Loader/>
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
        }





        let title = this.state.titre;

        let bouttonSuivant;


        bouttonSuivant=<button className="ui vertical animated button blue huge" onClick={this.changerTableauGenre.bind(this)}>
                <div className="hidden content">Suivant</div>
                <div className="visible content"><i aria-hidden="true" className="arrow right icon"></i></div>
            </button>;


        return ( <div>
                <h1 className="ui header center aligned">{title}</h1>

                {txtDonnee}

                <div className="ui centered cards">

                    {listeDesGenres}

                </div>
                <br/>

                <BoutonPrecedentQuestion fonctionClique={this.props.retour || null}/>

                <ResetQuizzButton/>

                {bouttonSuivant}




            </div>

        )
    }


}

export default PageDeQuestionGenre;
