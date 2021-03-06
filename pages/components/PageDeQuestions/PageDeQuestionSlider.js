import React from 'react';
import { Slider} from 'antd';
import {Container, Label} from "semantic-ui-react";
import ResetQuizzButton from "../ResetQuizzButton";
import BoutonPrecedentQuestion from "./BoutonPrecedentQuestion";


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
        if(this.state.date){
            this.props.envoyerValeur(this.state.date);
        }else{
            this.props.envoyerValeur([this.state.min,this.state.max]);
        }
    }


    render() {
        let date;
        if(this.state.date){
            date = this.state.date;
        }else if(this.state.rangedepart){
            date = this.state.rangedepart
        }

        let affichagedate;

        if(date!=null){
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
        }


        let titre;
        if(this.state.titre){
             titre = this.state.titre;
        }
        let bouttonSuivant = <button className="ui vertical animated button blue huge" onClick={this.changerTableau.bind(this)}>
                <div className="hidden content">Suivant</div>
                <div className="visible content"><i aria-hidden="true" className="arrow right icon"></i></div>
            </button>;



        let slider;
        let min,max,rang;
        min=this.state.min;
        max= this.state.max;
        rang = this.state.rangedepart;



        if(min!=null && max!=null && rang!=null){
            slider=<Slider range defaultValue={[rang[0], rang[1]]}
                           min={min}
                           max={max}
                           tooltipVisible={false}
                           onChange={(value)=> this.changementDate(value)}
                           style={{width:75+'vw'}}
            />
        }

        return (
            <div>
                <h1 className="ui header center aligned">{titre}</h1>

                {slider}

                    {affichagedate}
                <BoutonPrecedentQuestion fonctionClique={this.props.retour || null}/>
                <ResetQuizzButton/>
                {bouttonSuivant}

            </div>
        );
    }
}

export default PageDeQuestionSlider;
