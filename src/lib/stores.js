import { writable } from 'svelte/store';
import allProducts from '$lib/data/apple.json';

// Creates the initial state for filters by dynamically reading all products.
function createFilterStore() {
    // Create a map to hold all filter keys and their value counts

    const filterCounts = {};

    for (const product of allProducts) {
        for (const [key, value] of Object.entries(product.tags)) {
            // If the filter group doesn't exist create it
            if (!filterCounts[key]) {
                filterCounts[key] = {};
            }

            // Tag value is an array
            if (Array.isArray(value)) {
                for (const v of value) {
                    filterCounts[key][v] = (filterCounts[key][v] || 0) + 1;
                }
            } 
            // Tag value is a string 
            else {
                filterCounts[key][value] = (filterCounts[key][value] || 0) + 1;
            }
        }
    }

    // Convert the map to our components structure to be read in by the page and the sidebar
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

//Export storage that holds the filter groups and their options 
export const filterGroups = writable(initialData);