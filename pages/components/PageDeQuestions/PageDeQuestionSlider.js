import React from 'react';
import { Slider} from 'antd';
import {Container, Label} from "semantic-ui-react";


class PageDeQuestionSlider extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            titre: this.props.titre,
            min:this.props.min,
            max:this.props.max,
            rangedepart:this.props.range
        }

    }

    changementDate(val){
        this.setState({
            date:val
        })
    }

    changerTableau(){
        this.props.envoyerValeur([this.state.min,this.state.max]);
    }


    render() {
        let date;
        if(this.state.date!=null){
            date = this.state.date;
        }else{
            date = this.state.rangedepart
        }

        let affichagedate;

        if(date[0]==date[1]){
            affichagedate=<div className="ui huge circular labels "><Label className="ui blue basic label">
                {date[0]}
            </Label></div>

        }else{
                affichagedate=<div className="ui huge circular labels ">

                <Label className="ui blue basic label">
                    {date[0]} - {date[1]}
                </Label>
                </div>
         }

        let titre = this.state.titre;
        let bouttonSuivant;
        if(titre=="Note" && this.props.changerEtat!=null){
            bouttonSuivant= <button className="ui massive button green" onClick={this.props.changerEtat.bind(this)}>Voir les résultats</button>

        }else{
           bouttonSuivant = <button className="ui vertical animated button blue huge" onClick={this.changerTableau.bind(this)}>
                <div className="hidden content">Suivant</div>
                <div className="visible content"><i aria-hidden="true" className="arrow right icon"></i></div>
            </button>

        }

        return (
            <div>
                <h1 className="ui header center aligned">{this.state.titre}</h1>

                    <Slider range defaultValue={[this.state.rangedepart[0], this.state.rangedepart[1]]}
                            min={this.state.min}
                            max={this.state.max}
                            tooltipVisible={false}
                            onChange={(value)=> this.changementDate(value)}
                    />
                <Container textAlign='center'>

                    {affichagedate}
                    {bouttonSuivant}


                 </Container>

            </div>
        );
    }
}

export default PageDeQuestionSlider;
