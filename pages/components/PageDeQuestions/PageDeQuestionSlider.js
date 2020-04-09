import React from 'react';
import { Slider, Switch } from 'antd';
import {Container, Label} from "semantic-ui-react";


class PageDeQuestionSlider extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            min:1990,
            max:2020,
            rangedepart:[2010,2020]
        }

    }

    changementDate(val){
        this.setState({
            date:val
        })
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
                    {date[0]}
                </Label>
                    <Label className="ui blue basic label">
                        {date[1]}
                    </Label></div>
         }

        return (
            <div>
                <h1 className="ui header center aligned">Année</h1>

                    <Slider range defaultValue={[this.state.rangedepart[0], this.state.rangedepart[1]]}
                            min={this.state.min}
                            max={this.state.max}
                            tooltipVisible={false}
                            onChange={(value)=> this.changementDate(value)}
                    />
                <Container textAlign='center'>

                    {affichagedate}

                 </Container>

            </div>
        );
    }
}

export default PageDeQuestionSlider;