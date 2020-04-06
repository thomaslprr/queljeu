import React from 'react'
import Head from "next/head";


class PageDeQuestionPlateforme extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            listePlateforme: [],
        }

    }

    cliqueReponse(val){
        let liste= this.state.listePlateforme;
        let i = 0;
        let contientDeja = false;


        for(i=0;i<liste.length;i++){
            if(liste[i]==val){

                //supprime 1 élément à partir de l'élément val
                liste.splice(liste.indexOf(val), 1);
                this.setState({
                    listePlateforme: liste
                },()=>console.log(this.state.listePlateforme));

                contientDeja=true;
            }
        }

        if(!contientDeja){
            this.setState({
                listePlateforme:[...liste,val]
            },()=>console.log(this.state.listePlateforme)
        )
        }


    }

    render() {
        return ( <div>
                <h1 className="ui header">Plateforme</h1>
            <div className="ui centered cards">

            <a className="ui card" onClick={()=> this.cliqueReponse("mac")} >
                    <div className="content">
                        <div className="header">Mac</div>

                    </div>
                </a>



                <a className="ui card" onClick={()=> this.cliqueReponse("linux")}>
                    <div className="content">
                        <div className="header">Linux</div>

                    </div>
                </a>

                <a className="ui card" onClick={()=> this.cliqueReponse("pc")}>
                    <div className="content">
                        <div className="header">PC</div>

                    </div>
                </a>

                <a className="ui card" onClick={()=> this.cliqueReponse("nintendoswitch")}>
                    <div className="content">
                        <div className="header">Nintendo Switch</div>

                    </div>
                </a>

                <a className="ui card" onClick={()=> this.cliqueReponse("ps4")}>
                    <div className="content">
                        <div className="header">PlayStation 4</div>

                    </div>
                </a>

                <a className="ui card" onClick={()=> this.cliqueReponse("xboxone")}>
                    <div className="content">
                        <div className="header">Xbox One</div>

                    </div>
                </a>

                <a className="ui card" onClick={()=> this.cliqueReponse("xbox360")}>
                    <div className="content">
                        <div className="header">Xbox 360</div>

                    </div>
                </a>

                <a className="ui card" onClick={()=> this.cliqueReponse("ps3")}>
                    <div className="content">
                        <div className="header">PlayStation 3</div>

                    </div>
                </a>

                <a className="ui card" onClick={()=> this.cliqueReponse("autre")}>
                    <div className="content">
                        <div className="header">Autre</div>

                    </div>
                </a>



            </div>
            </div>

        )
    }


}

export default PageDeQuestionPlateforme;
