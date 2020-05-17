import React from 'react'
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';
import ResetQuizzButton from "../ResetQuizzButton";
import BoutonPrecedentQuestion from "./BoutonPrecedentQuestion";



const SortableItem = SortableElement(({value}) => <div className="ui blue segment center aligned" >
    <div className="ui inverted relaxed divided list center aligned">{value}</div></div>);


const SortableList = SortableContainer(({items}) => {
    return (
        <div className="item">
        {items.map((value, index) => (
                <SortableItem key={`item-${value}`} index={index} value={value} />
            ))}
        </div>
    );
});

class PageFiltre extends React.Component {
    state = {
        items: ['Le mieux noté 💯','Le plus populaire 📊',  'Le plus récent 📅'],
        titre: this.props.titre
    };

    changerTableauTrie(){
        this.props.changerTableauTrie(this.state.items[0]);
    }

    onSortEnd = ({oldIndex, newIndex}) => {
        this.setState(({items}) => ({
            items: arrayMove(items, oldIndex, newIndex),
        }), ()=> console.log(this.state.items));
    };


    render() {
        return (<div>
            <h1 className="ui header center aligned">{this.state.titre || ''}</h1>

            <div className="ui blue relaxed divided list center aligned" style={{width:70+'vw',marginLeft:'auto',marginRight:'auto'}}>
                        <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />
                    </div>
            <BoutonPrecedentQuestion fonctionClique={this.props.retour || null}/>
            <ResetQuizzButton/>

            <br/> <br/>

            <button className="ui huge button green" onClick={this.changerTableauTrie.bind(this)}>Voir les résultats</button>

        </div>);
    }
}

export default PageFiltre;
