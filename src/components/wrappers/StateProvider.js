import React, { Component } from 'react';
import { FILTER_ALL } from '../../services/filter';
import { MODE_CREATE, MODE_NONE } from '../../services/mode';
import { objectWithOnly, wrapChildrenWith } from '../../util/common';
import { getAll, addToList, updateStatus } from '../../services/todo';
import { applySort, SORT_BY_DUE_DATE, SORT_BY_PRIORITY } from '../../services/sort';

class StateProvider extends Component {
    constructor() {
        super();
        this.state = {
            query: '',
            mode: MODE_CREATE,
            filter: FILTER_ALL,
            list: getAll(), 
            sortOption: null,
        };
    }

    render() {
        
        let sortedList = applySort(this.state.list, this.state.sortOption);
        let children = wrapChildrenWith(this.props.children, {
            data: { ...this.state, list: sortedList },
            actions: objectWithOnly(this, [
                'addNew',
                'changeFilter',
                'changeStatus',
                'changeMode',
                'setSearchQuery',
                'setSortOption',
            ]),
        });

        return <div>{children}</div>;
    }

    addNew({ text, dueDate, priority }) {
        let updatedList = addToList(this.state.list, {
            text,
            dueDate: dueDate || '',
            priority: priority || 'Low',
            completed: false,
        });

        this.setState({ list: updatedList });
    }

    setSortOption(sortOption) {
        this.setState({ sortOption });
    }

    changeFilter(filter) {
        this.setState({ filter });
    }

    changeStatus(itemId, completed) {
        const updatedList = updateStatus(this.state.list, itemId, completed);
        this.setState({ list: updatedList });
    }

    changeMode(mode = MODE_NONE) {
        this.setState({ mode });
    }

    setSearchQuery(text) {
        this.setState({ query: text || '' });
    }
}

export default StateProvider;
