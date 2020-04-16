import React from "react";
import {Button, Popup} from "semantic-ui-react";

class ResetQuizzButton extends React.Component {

    render() {
        return (
            <Popup
                trigger={
                    <Button className="ui red button icon circular huge" color='red' ><i className="undo icon"></i></Button>
                }
                content={<a  className="ui red button" href="/findagame">RECOMMENCER</a>}
                on='click'
                position='top right'
            />
        )

    }
}

export default  ResetQuizzButton;
