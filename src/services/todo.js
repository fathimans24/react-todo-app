import update from 'immutability-helper';

/**
 * Get the list of todo items.
 * @return {Array}
 */
export function getAll() {
    return [
        {
            id: 1,
            text: 'Learn Javascript',
            completed: false,
            priority:'High',
            dueDate:'2024-06-22'
        },
        {
            id: 2,
            text: 'Learn React',
            completed: false,
            priority:'Medium',
            dueDate:'2024-06-22'

        },
        {
            id: 3,
            text: 'Build a React App',
            completed: false,
            priority:'Medium',
            dueDate:'2024-7-25'
        },
        {
            id: 4,
            text: 'Build a React App',
            completed: false,
            priority:'Medium',
            dueDate:'2024-06-25'
        },
        {
            id: 5,
            text: 'Build a React App',
            completed: true,
            priority:'Medium',
            dueDate:'2024-06-2'
        },
        {
            id: 6,
            text: 'Build a React App',
            completed: false,
            priority:'Medium',
            dueDate:'2024-7-2'
        },
        {
            id: 7,
            text: 'Build a React App',
            completed: true,
            priority:'Medium',
            dueDate:'2024-7-2'
        }
    ]
}

export function getItemById(itemId) {
    return getAll().find(item => item.id === itemId);
}

export function updateStatus(items, itemId, completed) {
    let index = items.findIndex(item => item.id === itemId);

    
    return update(items, {
        [index]: {
            completed: {$set: completed}
        }
    });
}

/**
 * @type {Number}
 */
let todoCounter = 1;

function getNextId() {
    return getAll().length + todoCounter++;
}

/**
 * Adds a new item on the list and returns the new updated list (immutable).
 *
 * @param {Array} list
 * @param {Object} data
 * @return {Array}
 */
export function addToList(list, data) {
    let item = Object.assign({
        id: getNextId()
    }, data);

    return list.concat([item]);
}
