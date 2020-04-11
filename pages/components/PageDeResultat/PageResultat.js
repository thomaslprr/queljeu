import React from 'react'
import CarteDeResultat from "./CarteDeResultat";
class PageResultat extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            resultat: this.props.resultat,
            defaultActivePage:1,
            firstItem: 1,
            lastItem:10,
            totalPages:10,
            resultPerPage: 10
        };
    }


    setResultat(val){
        this.setState({
            resultat:val
        })
    }

    render() {

        const resultat = this.state.resultat;


        let affichageRes;
        if(resultat=="loading"){
            affichageRes = <h3>Chargement des données</h3>
        }else{

            const resultatPage = resultat.splice(this.state.defaultActivePage,this.state.resultPerPage);


            affichageRes = resultatPage.map(({ id, name, total_rating,release_dates,cover }) => (


                <CarteDeResultat
                    titre={name}
                    note={total_rating}
                    date={release_dates}
                    idimage={cover.image_id}





                />



            ))
        }


        return(
            <div>
                <h1>Résultats </h1>
                <div className="ui cards">


                {affichageRes}
                </div>

            </div>
        )
    }
}

export default PageResultat;
