import React from 'react'
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';
import ResetQuizzButton from "../ResetQuizzButton";



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
        items: ['Le mieux noté 💯','Le plus populaire 📊',  'Le plus récent 📅']
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
                    <div className="ui blue relaxed divided list center aligned">
                        <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />
                    </div>
                 <button className="ui massive button green" onClick={this.changerTableauTrie.bind(this)}>Voir les résultats</button>

        </div>);
    }
}

export default PageFiltre;
