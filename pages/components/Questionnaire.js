import React from 'react'
import Head from "next/head";
import PageDeQuestionPlateforme from "./PageDeQuestions/PageDeQuestionPlateforme";


class Questionnaire extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            plateforme:[],
            etape:1
        }

    }

    setPlateforme(val){
        this.setState({
            plateforme: val,
            etape:2
        })
    }



    render() {
        const numEtape = this.state.etape;
        let questionnaire;

        switch (numEtape) {
            case 1:
                questionnaire = <PageDeQuestionPlateforme modifierTableauPlateforme={this.setPlateforme.bind(this)} />;
                break;
            case 2:
                questionnaire = <h3>Questionnaire numero 2</h3>;
                break;

        }

        return (
            <div>
                {questionnaire}
                <a className="ui red button icon circular huge" href="/findagame" ><i className="undo icon"></i></a>

            </div>
        )

    }


}

export default Questionnaire;

