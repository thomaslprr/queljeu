import React from 'react'
import Head from "next/head";
import Questionnaire from "./components/Questionnaire";


class findagame extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            questionnaireCommence: false,
            soustitre:"Répond à 10 questions et trouve les meilleurs jeux faits pour toi !"
        };
    }

    startClick() {
        this.setState({
            questionnaireCommence: true
        });

    }

    setSousTitre(val){
        this.setState({
            soustitre: val
        })
    }


    render() {
        const aCommence = this.state.questionnaireCommence;
        let button;
        if (!aCommence) {
            button = <button className="ui animated button massive blue" onClick={this.startClick.bind(this)}>
                        <div className="visible content">Commencer</div>
                        <div className="hidden content"><i aria-hidden="true" className="arrow right icon"></i></div>
                    </button>;
        } else {
            button = <Questionnaire setSousTitre={this.setSousTitre.bind(this)}/>;
        }

        return (<div className="container">

            <Head>
                <title>QuelJeu</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
                <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/antd/4.1.1/antd.min.css" />


            </Head>
            <main>

                <h1 className="title">
                Trouve ton  <a>jeu vidéo</a>
            </h1><p className="description">{this.state.soustitre}</p>

                {button}




            </main>

            <footer>
                <a
                    href=""
                    target="_blank"
                >
                    Réalisé par Thomas Lapierre
                </a>
            </footer>
            <style jsx>{`
      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      footer img {
        margin-left: 0.5rem;
      }

      footer a {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      .title a {
        color: #2185d0;
        text-decoration: none;
      }

      .title a:hover,
      .title a:focus,
      .title a:active {
        text-decoration: underline;
      }

      .title {
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
      }

      .title,
      .description {
        text-align: center;
      }

      .description {
        line-height: 1.5;
        font-size: 1.5rem;
      }

      code {
        background: #fafafa;
        border-radius: 5px;
        padding: 0.75rem;
        font-size: 1.1rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
      }

      .grid {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        max-width: 800px;
        margin-top: 3rem;
      }

      .card {
        margin: 1rem;
        flex-basis: 45%;
        padding: 1.5rem;
        text-align: left;
        color: inherit;
        text-decoration: none;
        border: 1px solid #eaeaea;
        border-radius: 10px;
        transition: color 0.15s ease, border-color 0.15s ease;
      }

      .card:hover,
      .card:focus,
      .card:active {
        color: #0070f3;
        border-color: #0070f3;
      }

      .card h3 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
      }

      .card p {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
      }

      @media (max-width: 600px) {
        .grid {
          width: 100%;
          flex-direction: column;
        }
      }
    `}</style>

            <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>

            </div>)
    }
}

export default findagame;
