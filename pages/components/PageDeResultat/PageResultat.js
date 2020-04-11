import React from 'react'
class PageResultat extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            resultat: this.props.resultat
        }
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
            affichageRes = <h3>Données</h3>
        }


        return(
            <div>
                <h1>Résultats </h1>

                {affichageRes}
            </div>
        )
    }
}

export default PageResultat;
