<script>
    // 1. Import the Sidebar component
    import Sidebar from '$lib/components/Sidebar.svelte';
    
    // 2. Import the store
    import { filterGroups } from '$lib/stores.js';
    
    // 3. Import the full product list from our new JSON file
    import allProducts from '$lib/data/apple.json';

    // 4. This is a "reactive" block.
    // It will re-run whenever any variable inside it (like $filterGroups) changes.
    let filteredProducts = [];
    $: {
        // 1. Get all active filters, grouped by their category name.
        // e.g., { "CPU": ["Apple M1 Chip", "Apple M2 Chip"], "Brand": ["Apple"] }
        const activeFilters = {};
        
        if ($filterGroups && Array.isArray($filterGroups)) {
            $filterGroups.forEach(group => {
                // Ensure group.options is also an array
                if (group && group.options && Array.isArray(group.options)) {
                    
                    const checkedValues = group.options
                        .filter(option => option.checked)
                        .map(option => option.value); // Use the 'value' field from filters.json

                    if (checkedValues.length > 0) {
                        activeFilters[group.name] = checkedValues;
                    }
                }
            });
        }

        // 2. Filter the products
        if (Object.keys(activeFilters).length === 0) {
            // If no filters are checked, show all products
            filteredProducts = allProducts;
        } else {
            // Otherwise, filter the list
            filteredProducts = allProducts.filter(product => {
                // 'every' means the product must match ALL active filter *groups* (AND logic)
                // e.g., Must be "Apple" AND ("M1" OR "M2")
                return Object.entries(activeFilters).every(([groupName, activeValues]) => {
                    
                    // Get the product's tag value for this group, e.g., product.tags.CPU
                    const productValue = product.tags[groupName];

                    // If product doesn't have this tag category (e.g., tag "Color" but filter "CPU"), skip
                    if (productValue === undefined) {
                        return false; 
                    }

                    // If the product's tag is an array (e.g., Ports: ["HDMI x1", "Thunderbolt 4 x3"])
                    if (Array.isArray(productValue)) {
                        // Check if *at least one* of the product's tags
                        // is in the list of active filters for this group (OR logic)
                        // e.g., activeValues is ["HDMI x1"]. Check if productValue.includes("HDMI x1")
                        return activeValues.some(activeValue => productValue.includes(activeValue));
                    }
                    
                    // If the product's tag is a string (e.g., CPU: "Apple M2 Chip")
                    // Check if the product's value is in the list
                    // of active filters for that group (OR logic)
                    // e.g., activeValues is ["Apple M1 Chip", "Apple M2 Chip"]. Check if it includes "Apple M2 Chip"
                    return activeValues.includes(productValue);
                });
            });
        }
    }
</script>

<!-- 
  This new flex container holds the sidebar and the main content 
     for *this page only*.
-->
<div class="flex">
    
    <!-- The Sidebar -->
    <Sidebar></Sidebar>

    <!-- 
      This div contains all the content for this specific page.
      'flex-1' makes it grow to fill the remaining space next to the sidebar.
    -->
    <div class="flex-1 p-6 bg-gray-100">
        
        <!-- 1. Top navigation/filter bar -->
        <div class="flex justify-between items-center mb-4 p-4 bg-white rounded-lg shadow">
            <div class="flex items-center space-x-4">
                <!-- Sort By -->
                <div>
                    <label for="sort" class="text-sm font-medium text-gray-700">Sort by:</label>
                    <select id="sort" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md">
                        <option>Most Popular</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                    </select>
                </div>
                
                <!-- Items per page -->
                <div>
                    <label for="per-page" class="text-sm font-medium text-gray-700">Items per page:</label>
                    <select id="per-page" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md">
                        <option>24</option>
                        <option>48</option>
                        <option>96</option>
                    </select>
                </div>
            </div>

            <!-- View toggles (Grid/List) -->
            <div class="flex items-center space-x-2">
                <button class="p-2 rounded-md bg-red-600 text-white shadow">
                    <!-- Grid Icon -->
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                </button>
                <button class="p-2 rounded-md bg-white text-gray-600 border border-gray-300 hover:bg-gray-100">
                    <!-- List Icon -->
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
                </button>
            </div>
        </div>

        <!-- 
          5. Product Grid
             We now loop over our new 'filteredProducts' list
             and use the properties from products.json
        -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {#each filteredProducts as product (product.id)}
                <!-- Product Card -->
                <div class="border border-gray-200 rounded-lg shadow bg-white overflow-hidden">
                    <!-- Use the color and text color from the product data -->
                    <div class="{product.color} {product.textColor} h-48 w-full flex items-center justify-center p-4">
                        <h3 class="text-xl font-semibold">{product.name}</h3>
                    </div>
                    
                    <div class="p-4 flex flex-col items-center">
                        <button class="w-full bg-red-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-700 transition-colors">
                            Add to Cart
                        </button>
                    </div>
                </div>
            {:else}
                <!-- This block will show if 'filteredProducts' is empty -->
                <div class="col-span-full text-center text-gray-600 p-8">
                    <p class="text-lg">No products match your selected filters.</p>
                    <p class="text-sm">Try unchecking some filters to see more results.</p>
                </div>
            {/each}
        </div>

    </div>
</div>