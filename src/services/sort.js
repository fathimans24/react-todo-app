// services/sort.js

// Constants for sort options
export const SORT_BY_DUE_DATE = 'dueDate';
export const SORT_BY_PRIORITY = 'priority';

// Priority order mapping: High -> 1, Medium -> 2, Low -> 3
const PRIORITY_ORDER = { High: 1, Medium: 2, Low: 3 };

// Sort tasks by due date
export function sortByDueDate(tasks) {
    return tasks.slice().sort((a, b) => {
        if (a.dueDate && b.dueDate) {
            return new Date(a.dueDate) - new Date(b.dueDate);
        }
        if (a.dueDate) return -1; // Due dates first
        if (b.dueDate) return 1;
        return 0;
    });
}

// Sort tasks by priority (High > Medium > Low)
export function sortByPriority(tasks) {
    return tasks.slice().sort((a, b) => {
        const priorityA = PRIORITY_ORDER[a.priority] || 4; // Default to lowest priority
        const priorityB = PRIORITY_ORDER[b.priority] || 4;
        return priorityA - priorityB; // Ascending order based on priority values
    });
}


export function applySort(tasks, sortOption) {
    switch (sortOption) {
        case SORT_BY_DUE_DATE:
            return sortByDueDate(tasks);
        case SORT_BY_PRIORITY:
            return sortByPriority(tasks);
        default:
            return tasks; 
    }
}
