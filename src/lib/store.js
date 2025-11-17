import { writable, derived } from 'svelte/store';
import { browser } from '$app/environment';

// --- Helper function for persisting stores ---
function createPersistentStore(key, initialValue) {
    let initialData = initialValue;
    
    if (browser) {
        const storedValue = localStorage.getItem(key);
        if (storedValue) {
            try {
                initialData = JSON.parse(storedValue);
            } catch (e) {
                console.error(`Error parsing ${key} from localStorage`, e);
                localStorage.removeItem(key);
            }
        }
    }

    const store = writable(initialData);

    if (browser) {
        store.subscribe(value => {
            localStorage.setItem(key, JSON.stringify(value));
        });
    }

    return store;
}

// --- Recently Viewed Store ---
const MAX_RECENTLY_VIEWED = 6;
export const recentlyViewedStore = createPersistentStore('recentlyViewed', []);

export function addToRecentlyViewed(item) {
    recentlyViewedStore.update(items => {
        const filteredItems = items.filter(i => i.name !== item.name);
        const newItems = [item, ...filteredItems];
        return newItems.slice(0, MAX_RECENTLY_VIEWED);
    });
}

// Read-only export for subscribing
export const recentlyViewed = derived(recentlyViewedStore, $store => $store);


// --- Shopping Cart Store ---
export const cart = createPersistentStore('cart', []);

// Function to add an item (or increase quantity)
export function addToCart(item) {
    cart.update(items => {
        const existingItem = items.find(i => i.name === item.name);
        
        if (existingItem) {
            // Increase quantity
            return items.map(i => 
                i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
            );
        } else {
            // Add new item with quantity 1
            return [...items, { ...item, quantity: 1 }];
        }
    });
}

// Function to increase quantity
export function increaseQuantity(item) {
    cart.update(items => 
        items.map(i => 
            i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        )
    );
}

// Function to decrease quantity (and remove at 0)
export function decreaseQuantity(item) {
    cart.update(items => {
        const existingItem = items.find(i => i.name === item.name);
        
        if (existingItem && existingItem.quantity > 1) {
            // Decrease quantity
            return items.map(i => 
                i.name === item.name ? { ...i, quantity: i.quantity - 1 } : i
            );
        } else {
            // Remove item
            return items.filter(i => i.name !== item.name);
        }
    });
}

// Derived store to get the total number of items in the cart
export const cartTotalQuantity = derived(cart, $cart => {
    return $cart.reduce((total, item) => total + item.quantity, 0);
});