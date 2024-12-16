import React from 'react';
import TodoItem from './TodoItem';
import { MSG_NO_ITEMS } from '../../assets/text/en_US';
import { SORT_BY_DUE_DATE, SORT_BY_PRIORITY } from '../../services/sort';

export default function FilteredList(props) {
    const { items, changeStatus, setSortOption } = props;

    if (items.length === 0) {
        return <p className="alert alert-info">{MSG_NO_ITEMS}</p>;
    }

    return (
        <div>
        
            <div className="sorting-controls">
                <label>Sort By:</label>
                <select
                    onChange={(e) => setSortOption(e.target.value)}
                    className="form-control sort-dropdown"
                >
                    <option value="">None</option>
                    <option value={SORT_BY_DUE_DATE}>Due Date</option>
                    <option value={SORT_BY_PRIORITY}>Priority</option>
                </select>
            </div>

            
            <ul className="list-unstyled">
                {items.map((item) => (
                    <TodoItem key={item.id} data={item} changeStatus={changeStatus} />
                ))}
            </ul>
        </div>
    );
}
