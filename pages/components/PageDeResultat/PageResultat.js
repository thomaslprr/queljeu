import React from 'react'
import CarteDeResultat from "./CarteDeResultat";
import {Container, Pagination} from "semantic-ui-react";
class PageResultat extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            resultat: this.props.resultat,
            defaultActivePage:0,
            resultPerPage: 10
        };
    }


    setResultat(val){
        this.setState({
            resultat:val
        })

    }

    changementPage(){
        this.setState({
            defaultActivePage: this.state.defaultActivePage+1
        }, ()=>{
            console.log(this.state.defaultActivePage );
            this.render();
        })
    }

    render() {

        let resultat = this.state.resultat;


        let affichageRes;

        let indexDepart = this.state.defaultActivePage*this.state.resultPerPage;

        let resultPerPage = this.state.resultPerPage;

        if(resultat=="loading"){
            affichageRes = <h3>Chargement des données</h3>
        }else{

            let resultatPage = resultat.splice(indexDepart,resultPerPage);


            affichageRes = resultatPage.map(({ id, name, total_rating,cover,first_release_date }) => (


                <CarteDeResultat
                    titre={name}
                    note={total_rating}
                    date={first_release_date}
                    cover={cover}

                />



            ))
        }


        return(
            <div>
                <Container textAlign='center'>

                <h1>Résultats </h1>
                <div className="ui centered cards">
                {affichageRes}
                </div>

                    <button className="ui button blue" onClick={this.changementPage.bind(this)}>Suivant</button>
                </Container>

            </div>
        )
    }
}

export default PageResultat;
