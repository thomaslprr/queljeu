import React from 'react'
import Head from "next/head";


class PageDeQuestionPlateforme extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            listePlateforme: [],
            style: ["ui card","ui card","ui card","ui card","ui card","ui card","ui card","ui card","ui card"],
            texte: ["","","","","","","","",""]

        }

    }

    changerTableauPlateforme(){
        this.props.modifierTableauPlateforme(this.state.listePlateforme);
    }

    cliqueReponse(val,index){

        let liste= this.state.listePlateforme;
        let i = 0;
        let contientDeja = false;

        let styles = this.state.style

        let textes = this.state.texte;


        for(i=0;i<liste.length;i++){
            if(liste[i]==val){

                //supprime 1 élément à partir de l'élément val
                liste.splice(liste.indexOf(val), 1);

                styles[index]="ui card";

                textes[index]=""

                this.setState({
                    listePlateforme: liste,
                    style: styles
                },()=>console.log(this.state.listePlateforme));

                contientDeja=true;
            }
        }

        if(!contientDeja){
            styles[index]="ui card blue";
            textes[index]=" ✔️"

            this.setState({
                listePlateforme:[...liste,val],
                style: styles
            },()=>console.log(this.state.listePlateforme)
        )
        }


    }

    render() {



        return ( <div>
                <h1 className="ui header center aligned">Plateforme</h1>

            <div className="ui centered cards">

                <a className={this.state.style[0]} onClick={()=> this.cliqueReponse("mac",0)} >
                    <div className="content">
                        <div className="header">Mac {this.state.texte[0]}</div>

                    </div>
                </a>


                <a className={this.state.style[1]} onClick={()=> this.cliqueReponse("linux",1)}>
                    <div className="content">
                        <div className="header">Linux {this.state.texte[1]}</div>

                    </div>
                </a>

                <a className={this.state.style[2]} onClick={()=> this.cliqueReponse("pc",2)}>
                    <div className="content">
                        <div className="header">PC {this.state.texte[2]}</div>

                    </div>
                </a>

                <a className={this.state.style[3]} onClick={()=> this.cliqueReponse("nintendoswitch",3)}>
                    <div className="content">
                        <div className="header">Nintendo Switch {this.state.texte[3]}</div>

                    </div>
                </a>

                <a className={this.state.style[4]} onClick={()=> this.cliqueReponse("ps4",4)}>
                    <div className="content">
                        <div className="header">PlayStation 4 {this.state.texte[4]}</div>

                    </div>
                </a>

                <a className={this.state.style[5]} onClick={()=> this.cliqueReponse("xboxone",5)}>
                    <div className="content">
                        <div className="header">Xbox One {this.state.texte[5]}</div>

                    </div>
                </a>

                <a className={this.state.style[6]} onClick={()=> this.cliqueReponse("xbox360",6)}>
                    <div className="content">
                        <div className="header">Xbox 360 {this.state.texte[6]}</div>

                    </div>
                </a>

                <a className={this.state.style[7]} onClick={()=> this.cliqueReponse("ps3",7)}>
                    <div className="content">
                        <div className="header">PlayStation 3 {this.state.texte[7]}</div>

                    </div>
                </a>

                <a className={this.state.style[8]} onClick={()=> this.cliqueReponse("autre",8)}>
                    <div className="content">
                        <div className="header">Autre {this.state.texte[8]}</div>

                    </div>
                </a>
            </div>

                <button className="ui vertical animated button blue huge" onClick={this.changerTableauPlateforme.bind(this)}>
                    <div className="hidden content">Suivant</div>
                    <div className="visible content"><i aria-hidden="true" className="arrow right icon"></i></div>
                </button>

            </div>

        )
    }


}

export default PageDeQuestionPlateforme;
