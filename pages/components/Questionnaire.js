import React from 'react'
import Head from "next/head";
import PageDeQuestionPlateforme from "./PageDeQuestions/PageDeQuestionPlateforme";
import PageDeQuestionGenre from "./PageDeQuestions/PageDeQuestionGenre";
import axios from "axios";
import PageResultat from "./PageDeResultat/PageResultat";
import PageDeQuestionSlider from "./PageDeQuestions/PageDeQuestionSlider";


class Questionnaire extends React.Component {



    constructor(props) {
        super(props);
        this.state={
            plateforme:[],
            genre:[],
            theme:[],
            mode:[],
            perspective:[],
            valeurGenres: "loading",
            valeurThemes: "loading",
            valeurModes: "loading",
            valeurPerspectives: "loading",
            etape:1,
        }

        this.PageDeQuestionEnfant1 = React.createRef();
        this.PageDeQuestionEnfant2 = React.createRef();
        this.PageDeQuestionEnfant3 = React.createRef();
        this.PageDeQuestionEnfant4 = React.createRef();
        this.PageDeQuestionEnfant5 = React.createRef();


    }


    setTheme(val){
        this.setState({
            theme: val,
        },()=>{console.log(this.state.theme); console.log("THEME !!!")});
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
        },()=> {console.log(this.state.genre); console.log("GENRE !")});
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
        })
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
                console.log(response.data);
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
                console.log(response.data);
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



    render() {
        const numEtape = this.state.etape;
        let questionnaire;
        let questionnaire2;
        let questionnaire3;
        let questionnaire4;
        let questionnaire5;



        switch (numEtape) {
            case 1:
                questionnaire = <PageDeQuestionPlateforme modifierTableauPlateforme={this.setPlateforme.bind(this)} />;
                break;
            case 2:
                console.log(this.state.valeurGenres);
                questionnaire = <PageDeQuestionGenre ref={this.PageDeQuestionEnfant1} tabGenres={this.state.valeurGenres} modifierTableauGenre={this.setGenre.bind(this)} value="Genre" />;
                break;
            case 3:
                console.log(this.state.valeurThemes);
                questionnaire2 = <PageDeQuestionGenre ref={this.PageDeQuestionEnfant2} tabGenres={this.state.valeurThemes}  modifierTableauGenre={this.setTheme.bind(this)} value="Thème" />;
                break;
            case 4:
                questionnaire3 = <PageDeQuestionGenre ref={this.PageDeQuestionEnfant3} tabGenres={this.state.valeurModes}  modifierTableauGenre={this.setMode.bind(this)} value="Mode" />;
                break;
            case 5:
                questionnaire4 = <PageDeQuestionGenre ref={this.PageDeQuestionEnfant4} tabGenres={this.state.valeurPerspectives}  modifierTableauGenre={this.setPerspective.bind(this)} value="Perspective du joueur" />;
                break;
            case 6:
                questionnaire5 = <PageDeQuestionSlider/>;



        }

        return (
            <div>
                {questionnaire}
                {questionnaire2}
                {questionnaire3}
                {questionnaire4}
                {questionnaire5}


            </div>
        )

    }


}

export default Questionnaire;

