import { writable } from 'svelte/store';
import allProducts from '$lib/data/apple.json';

/**
 * Creates the initial state for our filters
 * by dynamically reading all products.
 */
function createFilterStore() {
    // 1. Create a map to hold all filter keys and their value counts
    //    e.g., { "CPU": { "Apple M1 Chip": 2, "Apple M2 Chip": 4 } }
    const filterCounts = {};

    for (const product of allProducts) {
        for (const [key, value] of Object.entries(product.tags)) {
            // If the filter group (e.g., "CPU") doesn't exist, create it
            if (!filterCounts[key]) {
                filterCounts[key] = {};
            }

            // If the tag value is an array (like "Ports")
            if (Array.isArray(value)) {
                for (const v of value) {
                    filterCounts[key][v] = (filterCounts[key][v] || 0) + 1;
                }
            } 
            // If the tag value is a string (like "CPU")
            else {
                filterCounts[key][value] = (filterCounts[key][value] || 0) + 1;
            }
        }
    }

    // 2. Convert the map into the array structure our components expect
    //    (This is the same structure that was in filters.json)
    const initialFilterData = Object.entries(filterCounts).map(([groupName, optionsMap]) => {
        
        const options = Object.entries(optionsMap).map(([value, count]) => {
            return {
                id: value.toLowerCase().replace(/[^a-z0-9]/g, '-'), // create a unique ID
                value: value,
                label: value,
                count: count,
                checked: false
            };
        });

        return {
            id: groupName.toLowerCase().replace(/[^a-z0-9]/g, '-'),
            name: groupName,
            options: options
        };
    });

    return initialFilterData;
}

const initialData = createFilterStore();

/**
 * Creates a writable Svelte store that holds the 
 * complete state of our filter groups and their options.
 */
export const filterGroups = writable(initialData);