import React from 'react';
import {Rating} from "semantic-ui-react";
import Link from "next/link";

const monthNamesEn = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const monthNamesFr = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
    "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
];


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

        let time_to_show = this.state.datesortie; // unix timestamp in seconds
        let t = new Date(time_to_show * 1000);

        let moisEnString = monthNamesFr[t.getMonth()];

        let formatted = moisEnString+" "+t.getFullYear();



        let image;
        if(this.state.cover && this.state.cover.image_id ){
            image = "https://images.igdb.com/igdb/image/upload/t_cover_big_2x/"+this.state.cover.image_id+".jpg";
        }else{
            image = "https://via.placeholder.com/720.jpg";
        }


        return (
            <Link href="/game/[slug]" as={`/game/${this.state.slug}`}>
            <a className="ui card" >
                    <div className="image">
                        <img src={image} height="290" width="360"/>
                    </div>
                    <div className="content">
                        <div className="header">{this.state.titre}</div>
                        <div className="meta">
                        </div>
                        <div className="description">
                            {formatted}
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
