import React from 'react'
import Head from "next/head";
import PageDeQuestionPlateforme from "./PageDeQuestions/PageDeQuestionPlateforme";
import PageDeQuestionGenre from "./PageDeQuestions/PageDeQuestionGenre";
import axios from "axios";


class Questionnaire extends React.Component {



    constructor(props) {
        super(props);
        this.state={
            plateforme:[],
            etape:1,
            valeurGenres: "loading"
        }

    }

    setPlateforme(val){
        this.setState({
            plateforme: val,
            etape:2
        })
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
                    valeurGenres: response.data

                },()=> this.remplirTableaux())

            })
            .catch(err => {
                this.setState({
                    valeurGenres: "err"
                });
                console.error(err);
            });


    }

    remplirTableaux(){


        let listeGenresUpdated = [] ;


        for(let i =0;i<this.state.valeurGenres.length;i++){


            listeGenresUpdated=[...listeGenresUpdated,{
                id: this.state.valeurGenres[i].id,
                created_at: this.state.valeurGenres[i].created_at,
                name: this.state.valeurGenres[i].name,
                slug: this.state.valeurGenres[i].slug,
                url: this.state.valeurGenres[i].url,
                style: "ui card",
                texte: ""

            }]

        }

        this.setState({
            valeurGenres: listeGenresUpdated
        });


    }



    render() {
        const numEtape = this.state.etape;
        let questionnaire;

        switch (numEtape) {
            case 1:
                questionnaire = <PageDeQuestionPlateforme modifierTableauPlateforme={this.setPlateforme.bind(this)} />;
                break;
            case 2:
                questionnaire = <PageDeQuestionGenre tabGenres={this.state.valeurGenres} />;
                break;

        }

        return (
            <div>
                {questionnaire}

            </div>
        )

    }


}

export default Questionnaire;

