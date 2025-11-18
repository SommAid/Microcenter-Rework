<script>
    // Import the Sidebar component
    import Sidebar from '$lib/components/Sidebar.svelte';
    import { onMount } from 'svelte';
    import Computer from '$lib/assets/laptop.png'
    
    // Import the store
    import { filterGroups } from '$lib/stores.js';
    
    // Import the product list json file
    import allProducts from '$lib/data/apple.json';

    // Reactive block to determine the products that are available after filter
    let filteredProducts = [];
    $: {
        const activeFilters = {};
        
        if ($filterGroups && Array.isArray($filterGroups)) {
            $filterGroups.forEach(group => {
                // Ensure group.options is also an array
                if (group && group.options && Array.isArray(group.options)) {
                    
                    const checkedValues = group.options
                        .filter(option => option.checked)
                        .map(option => option.value);

                    if (checkedValues.length > 0) {
                        activeFilters[group.name] = checkedValues;
                    }
                }
            });
        }

        // Filter the products
        if (Object.keys(activeFilters).length === 0) {
            filteredProducts = allProducts;
        } else {
            // Filter the list
            filteredProducts = allProducts.filter(product => {
                return Object.entries(activeFilters).every(([groupName, activeValues]) => {
                    
                    // Get the product's tag value for this group
                    const productValue = product.tags[groupName];

                    // Check if the current product has defined the current tag
                    if (productValue === undefined) {
                        return false; 
                    }

                    // Do a check for if the product's tag datatype is an array
                    if (Array.isArray(productValue)) {
                        return activeValues.some(activeValue => productValue.includes(activeValue));
                    }
                    
                    // If the product's tag is a string check if the product's value is in the list
                    return activeValues.includes(productValue);
                });
            });
        }
    }

    // Derived list of active filters for the pills
    let activeFiltersList = [];
    $: {
        activeFiltersList = [];
        if ($filterGroups && Array.isArray($filterGroups)) {
            $filterGroups.forEach(group => {
                if (group && group.options && Array.isArray(group.options)) {
                    group.options.forEach(option => {
                        if (option.checked) {
                            activeFiltersList.push(option);
                        }
                    });
                }
            });
        }
    }

    // Function to remove the filter pills in the header
    function removeFilter(optionToToggle) {
        optionToToggle.checked = false;
        
        $filterGroups = $filterGroups;

        if (hiddenFilters.length === 0) {
            showHiddenFilters = false;
        }
    }

    // filters dropdown

    const VISIBLE_FILTER_LIMIT = 3; 
    let showHiddenFilters = false;
    let dropdownRef;

    // Reactive lists based on the limit of 3 visible fiters
    let visibleFilters = [];
    let hiddenFilters = [];

    $: {
        visibleFilters = activeFiltersList.slice(0, VISIBLE_FILTER_LIMIT);
        hiddenFilters = activeFiltersList.slice(VISIBLE_FILTER_LIMIT);
    }

    function toggleHiddenFilters(event) {
        event.stopPropagation(); 
        showHiddenFilters = !showHiddenFilters;
    }

    // If the dropdown is open and the click is outside of it close the dropdown
    function handleClickOutside(event) {
        if (showHiddenFilters && dropdownRef && !dropdownRef.contains(event.target)) {
            showHiddenFilters = false;
        }
    }
    
    onMount(() => {
        document.addEventListener('click', handleClickOutside);
        
        // Return cleanup function
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    });

</script>

<!-- 
  This flex container holds the sidebar and the main content 
-->
<div class="min-h-screen bg-gray-100 font-sans text-gray-900">
    <div class="flex container mx-28 px-4 py-4"> 
        
        <!-- Sidebar -->
        <Sidebar />

        <!-- 
        This div contains all the content for this specific page.
        -->
        <div class="flex-1 w-full px-6 bg-gray-100">

            <!-- Breadcrumbs -->
            <nav class="mb-2 text-sm text-sky-500" aria-label="Breadcrumb">
                <ol class="list-none p-0 inline-flex">
                    <li class="flex items-center">
                        <a href="/" class="hover:text-blue-600 hover:underline">Home</a>
                    </li>
                    <li class="flex items-center mx-2" aria-hidden="true">
                        <span>/</span>
                    </li>
                    <li class="flex items-center">
                        <a href="/apple" class="font-medium" aria-current="page">Apple</a>
                    </li>
                </ol>
            </nav>
            
            <!-- Top navigation/filter bar -->
            <div class="flex justify-end items-center mb-4 p-4 bg-white rounded-lg shadow">
                
                <!--Right-side controls -->
                <div class="flex items-center space-x-4 flex-wrap-reverse justify-end">

                    <!-- Filter Pills Container -->
                    <div class="flex items-center gap-2 flex-wrap">
                        
                        {#each visibleFilters as filterOption (filterOption.id)}
                            <span class="flex items-center bg-black text-white text-s font-medium px-2.5 py-0.5 rounded-full">
                                {filterOption.label}
                                
                                <button 
                                    on:click={() => removeFilter(filterOption)}
                                    class="ml-1.5 -mr-0.5 p-0.5 rounded-full text-white/70 hover:text-white hover:bg-white/20 transition-colors"
                                    aria-label="Remove filter: {filterOption.label}"
                                >
                                    <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                      <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </span>
                        {/each}

                        <!-- "Show More" button and Dropdown -->
                        {#if hiddenFilters.length > 0}
                            <div class="relative" bind:this={dropdownRef}>
                                <button 
                                    on:click={toggleHiddenFilters}
                                    class="flex items-center bg-gray-200 text-gray-700 text-s font-medium px-2.5 py-0.5 rounded-full hover:bg-gray-300 transition-colors"
                                >
                                    + {hiddenFilters.length} more
                                </button>

                                <!-- The Dropdown Menu -->
                                {#if showHiddenFilters}
                                    <div class="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-xl z-10 p-2 space-y-1">
                                        {#each hiddenFilters as filterOption (filterOption.id)}
                                            <span class="flex items-center justify-between w-full bg-black text-white text-s font-medium px-2.5 py-0.5 rounded-full">
                                                <span>{filterOption.label}</span>
                                                <button 
                                                    on:click={() => removeFilter(filterOption)}
                                                    class="ml-1.5 -mr-0.5 p-0.5 rounded-full text-white/70 hover:text-white hover:bg-white/20 transition-colors"
                                                    aria-label="Remove filter: {filterOption.label}"
                                                >
                                                    <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                      <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                                                    </svg>
                                                </button>
                                            </span>
                                        {/each}
                                    </div>
                                {/if}
                            </div>
                        {/if}
                    </div>

                    {#if activeFiltersList.length > 0}
                        <div class="h-6 w-px bg-gray-300 hidden sm:block"></div>
                    {/if}

                    <!-- Sort By -->
                    <div class="flex items-center space-x-2">
                        <label for="sort" class="text-s font-medium text-gray-700 whitespace-nowrap">Sort by:</label>
                        <select id="sort" class="block w-auto pl-3 pr-3 py-2 text-base border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-s rounded-md">
                            <option>Most Popular</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                        </select>
                    </div>
                    
                    <!-- Items per page -->
                    <div class="flex items-center space-x-2">
                        <label for="per-page" class="text-s font-medium text-gray-700 whitespace-nowrap">Items per page:</label>
                        <select id="per-page" class="block w-auto pl-3 pr-3 py-2 text-base border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-s rounded-md">
                            <option>24</option>
                            <option>48</option>
                            <option>96</option>
                        </select>
                    </div>

                    <!-- Grid/List Buttons -->
                    <div class="flex items-center space-x-2">
                        <button class="p-2 rounded-md bg-black text-white shadow">
                            <!-- Grid Icon -->
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                        </button>
                        <button class="p-2 rounded-md bg-white text-gray-600 border border-gray-300 hover:bg-gray-100">
                            <!-- List Icon -->
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
                        </button>
                    </div>
                </div>
            </div>

       <!-- Product Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {#each filteredProducts as product (product.id)}
                    <!-- Product Card -->
                    <div class="relative group border border-gray-200 rounded-lg shadow bg-white overflow-hidden transition-all duration-300 hover:shadow-xl">
                        
                        <div class="bg-gray-200 h-64 w-full flex items-center justify-center p-4 relative rounded-t-lg">
                            <img src={Computer} alt="{product.name}" class="absolute inset-0 w-full h-full object-cover z-0 rounded-t-lg">
                            <div class="absolute inset-0 bg-black/30 z-5 rounded-t-lg"></div>
                            <h3 class="text-xl font-semibold relative z-10 text-white">{product.name}</h3>
                            <a href="/apple/products"
                               class="absolute inset-0 z-20 bg-black/75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-lg">
                                <span class="text-white text-lg font-bold">See Details</span>
                            </a>

                        </div>
                        
                        <div class="p-4 flex flex-col items-center">
                            <button href="" class="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                                Add to Cart
                            </button>
                        </div>

                    </div>
                {:else}
                    <div class="col-span-full text-center text-gray-600 p-8">
                        <p class="text-lg">No products match your selected filters.</p>
                        <p class="text-sm">Try unchecking some filters to see more results.</p>
                    </div>
                {/each}
            </div>

        </div>
    </div>
</div>