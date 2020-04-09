import React from 'react';
import { Slider, Switch } from 'antd';


class PageDeQuestionSlider extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            date:[]
        }
    }

    changementDate(val){
        this.setState({
            date:val
        })
    }


    render() {
        return (
            <div>
                <div style={{width: 500+'px'}}>
                    <Slider range defaultValue={[2010, 2020]} min={1990} max={2020} onChange={(value)=> this.changementDate(value)}/>
                </div>
            </div>
        );
    }
}

export default PageDeQuestionSlider;