import React from 'react'
import Head from "next/head";
import PageDeQuestionPlateforme from "./PageDeQuestions/PageDeQuestionPlateforme";


class Questionnaire extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return <PageDeQuestionPlateforme />
    }


}

export default Questionnaire;

