import {Rating} from "semantic-ui-react";
import React from "react";

const Rate = ({note,noteMax}) => {

    const noteAAfficher = ()=>{
        let n;
        if(note>99 && note<100){
            n = Math.floor(note);
        }else{
            n=Math.ceil(note);
        }
        return n;
    }


    return (
        <div>
            <Rating rating={note/20} maxRating={noteMax || 5} />
            <a className="item">
                <div className="ui black tiny horizontal label">{noteAAfficher()}/100</div>
            </a>
        </div>

        )


}

export default Rate;
