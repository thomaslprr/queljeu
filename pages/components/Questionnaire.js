import React from 'react'
import Head from "next/head";
import PageDeQuestionPlateforme from "./PageDeQuestions/PageDeQuestionPlateforme";


class Questionnaire extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            plateforme:[]
        }

    }

    setPlateforme(val){
        this.setState({
            plateforme: val
        })
    }

    render() {
        return (
            <div>
            <PageDeQuestionPlateforme modifierTableauPlateforme={this.setPlateforme.bind(this)} />
            </div>
        )

    }


}

export default Questionnaire;

