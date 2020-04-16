import React from 'react'
import Head from "next/head";
import PageDeQuestionPlateforme from "./PageDeQuestions/PageDeQuestionPlateforme";
import PageDeQuestionGenre from "./PageDeQuestions/PageDeQuestionGenre";
import axios from "axios";
import PageDeQuestionSlider from "./PageDeQuestions/PageDeQuestionSlider";
import PageResultat from "./PageDeResultat/PageResultat";
import PageFiltre from "./PageDeQuestions/PageFiltre";
import {Container} from "semantic-ui-react";


const proxyCORS = "https://contre-cors.herokuapp.com/";
const userKey = '634b219991f28ec8c656387de180af49';

const sousTitrePlateforme = "Sélectionne les plateformes sur lesquels tu veux jouer";
const sousTitreGenre = "Sélectionne tes genres préférés";
const sousTitreTheme = "Sélectionne tes thèmes préférés";
const sousTitreMode = "Sélectionne tes modes de jeu préférés";
const sousTitrePerspective = "Sélectionne tes types de perspectives préférés";
const sousTitreNote = "Quelle note veux-tu que le jeu est ?";
const sousTitreAnnee = "Entre quelles dates veux-tu que le jeu soit sorti ?";
const sousTitreResultat = "Voici la sélection des jeux fait pour toi";
const sousTitreTrie = "Quels sont tes critères les plus importants pour choisir un jeu ? (Trie par ordre d'importance)";





class Questionnaire extends React.Component {



    constructor(props) {
        super(props);
        this.state={
            plateforme:[],
            genre:[],
            theme:[],
            mode:[],
            annee:[],
            note:[],
            trie:[],
            perspective:[],
            valeurGenres: "loading",
            valeurThemes: "loading",
            valeurModes: "loading",
            valeurPerspectives: "loading",
            etape:1
        }

        this.setSousTitre(this.state.etape);

        this.PageDeQuestionEnfant1 = React.createRef();
        this.PageDeQuestionEnfant2 = React.createRef();
        this.PageDeQuestionEnfant3 = React.createRef();
        this.PageDeQuestionEnfant4 = React.createRef();
        this.PageDeQuestionEnfant5 = React.createRef();


    }



    setTheme(val){
        this.setState({
            theme: val,
        });
        this.setEtape();
    }

    setPlateforme(val){
        this.setState({
            plateforme: val,
        });
        this.setEtape();
    }

    setGenre(val){
        this.setState({
            genre: val,
        });
        this.setEtape();
    }

    setMode(val){
        this.setState({
            mode: val,
        });
        this.setEtape();
    }

    setPerspective(val){
        this.setState({
            perspective: val,
        });
        this.setEtape();
    }

    setEtape(){
        this.setState({
            etape: this.state.etape + 1
        },()=>{
            this.setSousTitre(this.state.etape);
        })
    }


    setTrie(val){
        this.setState({
            trie: val
        });
        this.setEtape();
    }
    setSousTitre(val){
        if(this.props.setSousTitre){

            switch(val){

            //plateforme
            case 1:
                this.props.setSousTitre(sousTitrePlateforme);
                break;

            //genre
            case 2:
                this.props.setSousTitre(sousTitreGenre);
                break;
            //theme
            case 3:
                this.props.setSousTitre(sousTitreTheme);
                break;

             //mode
            case 4:
                this.props.setSousTitre(sousTitreMode);
                break;

            //perspective
            case 5:
                this.props.setSousTitre(sousTitrePerspective);
                break;
            //annee
            case 6:
                this.props.setSousTitre(sousTitreAnnee);
                break;
            //note
            case 7:
                this.props.setSousTitre(sousTitreNote);
                break;
            //trie
                case 8:
                    this.props.setSousTitre(sousTitreTrie);
                    break;
            //resultat
            case 9:
                this.props.setSousTitre(sousTitreResultat);
                this.executerRequete();
                break;
        }
        }
    }



    async componentDidMount() {
        //on charge tous les genres de l'api
        await axios({
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
                    valeurGenres: response.data

                },()=> {
                    if(this.PageDeQuestionEnfant1.current != null){
                        this.PageDeQuestionEnfant1.current.remplirListeApi(this.remplirTableaux(this.state.valeurGenres))
                    }else{
                        this.setValeursGenres(this.state.valeurGenres);
                    }

                })

            })
            .catch(err => {
                this.setState({
                    valeurGenres: "err"
                });
                console.error(err);
            });

        //on charge tous les themes de l'api
        await axios({
            url: ""+proxyCORS+"https://api-v3.igdb.com/themes",
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'user-key': userKey
            },
            data: "fields created_at,name,slug,updated_at,url; limit 500;"
        })
            .then(response => {
                this.setState({
                    valeurThemes: response.data

                },()=>{
                    if(this.PageDeQuestionEnfant2.current != null){
                        this.PageDeQuestionEnfant2.current.remplirListeApi(this.remplirTableaux(this.state.valeurThemes))
                    }else{
                        this.setValeursTheme(this.state.valeurThemes);
                    }
                })

            })
            .catch(err => {
                this.setState({
                    valeurThemes: "err"
                });
                console.error(err);
            });

        await axios({
            url: ""+proxyCORS+"https://api-v3.igdb.com/game_modes",
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'user-key': userKey
            },
            data: "fields created_at,name,slug,updated_at,url;"
        })
            .then(response => {
                this.setState({
                    valeurModes: response.data
                },()=>{
                    if(this.PageDeQuestionEnfant3.current != null){
                        this.PageDeQuestionEnfant3.current.remplirListeApi(this.remplirTableaux(this.state.valeurModes))
                    }else{
                        this.setValeursMode(this.state.valeurModes);
                    }
                })
            })
            .catch(err => {
                this.setState({
                    valeurModes: "err"
                });
                console.error(err);
            });

         await axios({
            url: ""+proxyCORS+"https://api-v3.igdb.com/player_perspectives",
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'user-key': userKey
            },
            data: "fields created_at,name,slug,updated_at,url;"
        })
            .then(response => {
                this.setState({
                    valeurPerspectives: response.data
                },()=>{
                    if(this.PageDeQuestionEnfant4.current != null){
                        this.PageDeQuestionEnfant4.current.remplirListeApi(this.remplirTableaux(this.state.valeurPerspectives))
                    }else{
                        this.setValeursPerspective(this.state.valeurPerspectives);
                    }
                })
            })
            .catch(err => {
                this.setState({
                    valeurModes: "err"
                });
                console.error(err);
            });

    }

    genererationRequete(plateforme,genre,theme,mode,perspective,annee,note,trie){
        let val= [];

        let plat = "";
        if(plateforme!="()"){
            plat+="platforms = "+plateforme+" ";
            val=[...val,plat];
        }

        let gen = "";
        if(genre!="()"){
            gen+="genres = "+genre+" ";
            val=[...val,gen];

        }

        let the = "";
        if(theme!="()"){
            the+="themes = "+theme+" ";
            val=[...val,the];
        }

        let mod = "";
        if(mode!="()"){
            mod+="game_modes = "+mode+" ";
            val=[...val,mod];
        }

        let pers = "";
        if(perspective!="()"){
            pers+="player_perspectives = "+perspective+" ";
            val=[...val,pers];
        }

        let not="(total_rating >=  "+note[0]+" & total_rating <= "+note[1]+")";
        val=[...val,not];

        let ann = "first_release_date >= "+annee[0]+" & first_release_date <= "+annee[1];
        val=[...val,ann];

        let tri="sort "+trie+" desc;"

        let request = "fields *, cover.image_id ;";
        if(val.length>0){
            request+=" w ";
            for(let i=0; i < val.length ;i++){
                if(i+1!=val.length){
                    request+=val[i]+" & ";
                }else{
                    request+=val[i];
                }
            }
            request+="; "+tri;
        }

        return request;


    }

    miseEnFormeAnnee(tableauAnnee){
        let tabAnnee;

        let date1 = new Date(Date.UTC(tableauAnnee[0],0,1,0,0,0));
        let date2 = new Date(Date.UTC(tableauAnnee[1],11,31,23,59,59));


        let stamp1 = Math.round(date1.getTime()/1000);
        let stamp2 = Math.round(date2.getTime()/1000);

        tabAnnee=[stamp1,stamp2];

        return tabAnnee;
    }

    executerRequete(){
        const modeJeuFilter = this.miseEnFormeTableauDeReponse(this.state.mode);
        const genreJeuFilter = this.miseEnFormeTableauDeReponse(this.state.genre);
        const themeJeuFilter = this.miseEnFormeTableauDeReponse(this.state.theme);

        const plateformeJeuFilter = this.miseEnFormeTableauDeReponse(this.state.plateforme);

        const perspectiveJeuFilter = this.miseEnFormeTableauDeReponse(this.state.perspective);

        const noteJeuFilter = this.state.note;

        const anneeJeuFilter = this.miseEnFormeAnnee(this.state.annee);

        const trieJeuFilter = this.trierPar(this.state.trie);

        let requete =this.genererationRequete(plateformeJeuFilter,genreJeuFilter,themeJeuFilter,modeJeuFilter,perspectiveJeuFilter,anneeJeuFilter,noteJeuFilter,trieJeuFilter);

        this.setState({
            requete: requete
        })
    }

    trierPar(filtre){
        let valeurFiltre;
        switch (filtre) {
            case "Le mieux noté 💯":
                valeurFiltre="total_rating";
                break;
            case "Le plus populaire 📊":
                valeurFiltre="popularity";
                break;
            case "Le plus récent 📅":
                valeurFiltre="first_release_date";
                break;
            default:
                valeurFiltre="total_rating";
                break;
        }

        return valeurFiltre;
    }

    miseEnFormeTableauDeReponse(val){
        let result="(";
        for(let i =0; i<val.length;i++){
            result+=val[i];
            if(i+1!=val.length){
                result+=",";
            }

        }
        result+=")";
        return result;
    }

    remplirTableaux(tab){


        let listeGenresUpdated = [] ;


        for(let i =0;i<tab.length;i++){


            listeGenresUpdated=[...listeGenresUpdated,{
                id: tab[i].id,
                created_at: tab[i].created_at,
                name: tab[i].name,
                slug: tab[i].slug,
                url: tab[i].url,
                style: "ui card",
                texte: ""

            }]

        }

        return listeGenresUpdated;


    }

    setValeursGenres(val){
        this.setState({
            valeurGenres: this.remplirTableaux(val)
        });

    }

    setValeursTheme(val){
        this.setState({
            valeurThemes: this.remplirTableaux(val)
        });
    }

    setValeursMode(val){
        this.setState({
            valeurModes: this.remplirTableaux(val)
        });

    }

    setValeursPerspective(val){
        this.setState({
            valeurPerspectives: this.remplirTableaux(val)
        });
    }

    setAnnee(val){
        this.setState({
            annee:val
        });
        this.setEtape();
    }

    setNote(val){
        this.setState({
            note:val
        });
        this.setEtape();

    }



    render() {
        const numEtape = this.state.etape;

        let questionnaire;
        let questionnaire2;
        let questionnaire3;
        let questionnaire4;
        let questionnaire5;
        let questionnaire6;




        switch (numEtape) {
            case 1:
                questionnaire = <PageDeQuestionPlateforme modifierTableauPlateforme={this.setPlateforme.bind(this)} />;
                break;
            case 2:
                questionnaire = <PageDeQuestionGenre ref={this.PageDeQuestionEnfant1} tabGenres={this.state.valeurGenres} modifierTableauGenre={this.setGenre.bind(this)} value="Genre" />;
                break;
            case 3:
                questionnaire2 = <PageDeQuestionGenre ref={this.PageDeQuestionEnfant2} tabGenres={this.state.valeurThemes}  modifierTableauGenre={this.setTheme.bind(this)} value="Thème" />;
                break;
            case 4:
                questionnaire3 = <PageDeQuestionGenre ref={this.PageDeQuestionEnfant3} tabGenres={this.state.valeurModes}  modifierTableauGenre={this.setMode.bind(this)} value="Mode" />;
                break;
            case 5:
                questionnaire4 = <PageDeQuestionGenre ref={this.PageDeQuestionEnfant4} tabGenres={this.state.valeurPerspectives}  modifierTableauGenre={this.setPerspective.bind(this)} value="Perspective du joueur" />;
                break;
            case 6:
                questionnaire5 = <PageDeQuestionSlider min={1972} max={2022} range={[2010,2020]} envoyerValeur={this.setAnnee.bind(this)} titre="Année"/>;
                break;
            case 7:
                questionnaire6 = <PageDeQuestionSlider min={0} max={100} range={[0,100]} envoyerValeur={this.setNote.bind(this)} titre="Note"/>;
                break;
            case 8:
                questionnaire6 = <PageFiltre changerTableauTrie={this.setTrie.bind(this)} />;
                break;
            case 9:
                if(this.state.requete){
                    questionnaire6 = <PageResultat  req={this.state.requete}/>
                }
                break;



        }

        return (
            <div>
                <Container textAlign='center'>

                    {questionnaire}
                    {questionnaire2}
                    {questionnaire3}
                    {questionnaire4}
                    {questionnaire5}
                    {questionnaire6}

                </Container>


            </div>
        )

    }


}

export default Questionnaire;

