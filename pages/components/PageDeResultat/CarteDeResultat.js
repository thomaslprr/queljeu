import React from 'react';


class CarteDeResultat extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            titre:this.props.titre,
            note: this.props.note,
            console:this.props.console,
            imageid: this.props.idimage,
            datesortie: this.props.date

        }
    }



    render() {

        let dateAConvertir = this.state.date;
        let date = new Intl.DateTimeFormat('en-US', {year: 'numeric'}).format(dateAConvertir);

        let image = "https://images.igdb.com/igdb/image/upload/t_720p/"+this.state.imageid+".jpg";

        return (
            <a className="ui card" >
                    <div className="image">
                        <img src={image}/>
                    </div>
                    <div className="content">
                        <div className="header">{this.state.titre}</div>
                        <div className="meta">
                            <a>{this.state.console}</a>
                        </div>
                        <div className="description">
                        </div>
                    </div>
                    <div className="extra content">
                      <span className="right floated">
                          {date}
                      </span>
                      <span>
                        <i className="user icon"></i>
                        {this.state.note}
                      </span>
                    </div>
            </a>


    );

    }

}

export default CarteDeResultat
