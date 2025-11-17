<script>
  // 1. Import the store instead of the raw JSON file
  import { filterGroups } from '$lib/stores.js';

  // 2. This function updates the store, triggering
  //    any components that are listening to it.
  function handleFilterChange() {
    // This tells Svelte the store's value has changed,
    // which forces components subscribed to it to update.
    $filterGroups = $filterGroups;
  }
</script>

<style>
  /* Rotates the chevron icon when the <details> block is open */
  details[open] > summary svg {
    transform: rotate(180deg);
  }
  /* Hides the default disclosure triangle */
  summary::-webkit-details-marker {
    display: none;
  }
</style>

<aside class="w-64 bg-white p-4 border-r border-gray-200 space-y-4">
    
    <!-- Price Range (Slider placeholder) -->
    <div>
      <h3 class="font-semibold text-sm mb-2 uppercase">PRICE RANGE</h3>
      <!-- A simple range input as a placeholder for the complex slider -->
      <input type="range" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" min="0" max="6400" value="6400" />
      <div class="flex justify-between text-xs text-gray-500 mt-1">
        <span>$0</span>
        <span>$6400</span>
      </div>
    </div>

    <hr class="border-gray-200" />

    <!-- 
      3. Loop over the store value, $filterGroups.
         Note the '$' prefix to access the store's value.
    -->
    {#each $filterGroups as group (group.id)}
      <!-- 
        The <details> element is perfect for collapsible sections.
        The 'open' attribute makes them expanded by default.
      -->
      <details class="block" open>
        <!-- The <summary> is the clickable title bar -->
        <summary class="font-semibold text-sm list-none cursor-pointer hover:bg-gray-100 p-1 rounded-md flex justify-between items-center">
          {group.name}
          <!-- Simple chevron icon for open/close state -->
          <svg class="w-4 h-4 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </summary>

        <!-- Loop over all options (e.g., "Apple", "M1 Chip") -->
        <ul class="mt-2 space-y-1 pl-2">
          {#each group.options as option (option.id)}
            <li class="flex items-center">
              <!-- 
                Wrapping in a <label> lets users click the text 
                to check the box.
              -->
              <label class="flex items-center text-sm text-gray-700 hover:text-black cursor-pointer">
                <input 
                  type="checkbox" 
                  class="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
                  
                  checked={option.checked}
                  on:change={() => {
                    option.checked = !option.checked;
                    handleFilterChange();
                  }}
                >
                <span class="ml-2">
                  {option.label} ({option.count})
                </span>
              </label>
            </li>
          {/each}
        </ul>
      </details>
    {/each}
</aside>