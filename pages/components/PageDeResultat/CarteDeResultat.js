import React from 'react';
import {Rating} from "semantic-ui-react";
import Link from "next/link";
import UnixToDate from "../UnixToDate";


class CarteDeResultat extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            titre:this.props.titre,
            note: this.props.note,
            console:this.props.console,
            cover: this.props.cover,
            datesortie: this.props.date,
            slug: this.props.slug

        }
    }



    render() {

        let image;
        if(this.state.cover && this.state.cover.image_id ){
            image = "https://images.igdb.com/igdb/image/upload/t_cover_big_2x/"+this.state.cover.image_id+".jpg";
        }else{
            image = "https://via.placeholder.com/720.jpg";
        }

        let datesortie = "";
        if(this.state.datesortie){
            datesortie= <UnixToDate unix={this.state.datesortie}/>
        }


        return (
            <Link href="/game/[slug]" as={`/game/${this.state.slug}`} passHref={true}>
            <a className="ui card" target="_blank">
                    <div className="image">
                        <img src={image} height="290" width="360"/>
                    </div>
                    <div className="content">
                        <div className="header">{this.state.titre}</div>
                        <div className="meta">
                        </div>
                        <div className="description">
                            {datesortie}
                        </div>
                    </div>
                    <div className="extra">
                        <Rating icon='star' rating={this.state.note / 20} maxRating={5} disabled/>
                    </div>
            </a>
            </Link>


    );

    }

}

export default CarteDeResultat
