import React from 'react';
import {Rating} from "semantic-ui-react";

const monthNamesEn = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const monthNamesFr = ["Janvier", "Février", "Mars", "Avril", "Mail", "Juin",
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
            datesortie: this.props.date

        }
    }



    render() {

        let time_to_show = this.state.datesortie; // unix timestamp in seconds
        console.log("date unix : "+time_to_show);
        let t = new Date(time_to_show * 1000);
        console.log("date format date : "+t);

        let moisEnString = monthNamesFr[t.getMonth()];

        let formatted = moisEnString+" "+t.getFullYear();

        console.log("date formatée : "+formatted);


        let image;
        if(this.state.cover && this.state.cover.image_id ){
            image = "https://images.igdb.com/igdb/image/upload/t_cover_big_2x/"+this.state.cover.image_id+".jpg";
        }else{
            image = "https://via.placeholder.com/720.jpg";
        }


        return (
            <a className="ui card" >
                    <div className="image">
                        <img src={image} height="290" width="360"/>
                    </div>
                    <div className="content">
                        <div className="header">{this.state.titre}</div>
                        <div className="meta">
                            <a>{this.state.console}</a>
                        </div>
                        <div className="description">
                            {formatted}
                        </div>
                    </div>
                    <div className="extra">
                        <Rating icon='star' rating={this.state.note / 20} maxRating={5} disabled/>
                    </div>
            </a>


    );

    }

}

export default CarteDeResultat
