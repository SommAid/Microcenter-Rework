<script>
    import BlackFridayImg from '$lib/assets/black-friday.png'
    
    // Import all our store functions from the new central store
    import { 
        recentlyViewed, 
        addToRecentlyViewed, 
        cart, 
        addToCart, 
        increaseQuantity, 
        decreaseQuantity 
    } from '$lib/store.js';

    // Create a derived map for quick cart lookups
    $: cartMap = $cart.reduce((acc, item) => {
        acc[item.name] = item;
        return acc;
    }, {});

    const categories = [
        // Fixed placeholder URLs
        { name: 'Computer Parts', img: 'https://placehold.co/100x100/e2e8f0/333?text=Parts' },
        { name: 'Computers', img: 'https://placehold.co/100x100/e2e8f0/333?text=Computers' },
        { name: 'Apple', img: 'https://placehold.co/100x100/e2e8f0/333?text=Apple' },
        { name: 'Electronics', img: 'https://placehold.co/100x100/e2e8f0/333?text=Electronics' },
        { name: 'Gaming', img: 'https://placehold.co/100x100/e2e8f0/333?text=Gaming' },
        { name: 'Networking', img: 'https://placehold.co/100x100/e2e8f0/333?text=Network' },
        { name: 'DIY & Tools', img: 'https://placehold.co/100x100/e2e8f0/333?text=DIY' },
        { name: 'Cases & Lighting', img: 'https://placehold.co/100x100/e2e8f0/333?text=Cases' },
    ];
    
    const hotDeals = [
        { name: 'Inland SSD', price: '$49.99', img: 'https://placehold.co/150x150/fef2f2/b91c1c?text=Hot+Deal' },
        { name: 'AMD Ryzen CPU', price: '$299.99', img: 'httpss://placehold.co/150x150/fef2f2/b91c1c?text=Hot+Deal' },
        { name: 'PowerSpec PC', price: '$1299.99', img: 'https://placehold.co/150x150/fef2f2/b91c1c?text=Hot+Deal' },
        { name: 'Intel Core i9', price: '$549.99', img: 'httpss://placehold.co/150x150/fef2f2/b91c1c?text=Hot+Deal' },
    ];
    
    const topDeals = [
        { name: 'Gaming Laptop', price: '$999.99', img: 'https://placehold.co/200x200/e0f2fe/0891b2?text=Top+Deal' },
        { name: '4K Monitor', price: '$349.99', img: 'httpss://placehold.co/200x200/e0f2fe/0891b2?text=Top+Deal' },
        { name: 'Motherboard', price: '$179.99', img: 'https://placehold.co/200x200/e0f2fe/0891b2?text=Top+Deal' },
        { name: 'RTX 4070', price: '$599.99', img: 'httpss://placehold.co/200x200/e0f2fe/0891b2?text=Top+Deal' },
        { name: 'Wireless Mouse', price: '$79.99', img: 'https://placehold.co/200x200/e0f2fe/0891b2?text=Top+Deal' },
        { name: 'VR Headset', price: '$499.99', img: 'httpss://placehold.co/200x200/e0f2fe/0891b2?text=Top+Deal' },
    ];
</script>

    
<div class="min-h-screen bg-gray-100 font-sans text-gray-900">
    
    <!-- NAVIGATION BAR -->
    <!-- This is now handled by +layout.svelte -->
    
    <!-- MAIN CONTENT -->
    <main class="container mx-auto px-4 py-8 space-y-12">
    
        <!-- Hero Banners -->
        <section class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <!-- Main Hero Banner -->
            <div class="lg:col-span-2 pt-5 rounded-lg shadow-lg flex items-center justify-center">
                <img src={BlackFridayImg} alt="Black Friday Deals" class="w-full h-full object-contain rounded-lg">
            </div>
        </section>
    
        <!-- Shop All Categories -->
        <section>
            <h2 class="text-2xl font-bold mb-6">Shop All Categories</h2>
            <div class="grid grid-cols-4 md:grid-cols-8 gap-4">
                {#each categories as category}
                    <a href="/{category.name.toLocaleLowerCase()}" class="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow text-center">
                        <img src={category.img} alt={category.name} class="w-20 h-20 object-contain mb-2">
                        <span class="text-sm font-semibold">{category.name}</span>
                    </a>
                {/each}
            </div>
        </section>
    
        <!-- Hot Deals -->
        <section>
            <h2 class="text-2xl font-bold mb-6 text-red-600">Hot Deals</h2>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                {#each hotDeals as deal}
                {@const cartItem = cartMap[deal.name]}
                    <div class="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center transition-shadow hover:shadow-xl">
                        <a href="#" on:click|preventDefault={() => addToRecentlyViewed(deal)} class="flex-grow">
                            <img src={deal.img} alt={deal.name} class="w-36 h-36 object-contain mb-4">
                            <h3 class="font-semibold text-gray-800">{deal.name}</h3>
                            <p class="text-lg font-bold text-red-600 mt-2">{deal.price}</p>
                        </a>
                        
                        <!-- Add to Cart / Quantity Controls -->
                        <div class="mt-4 w-full">
                            {#if cartItem}
                                <div class="flex items-center justify-center space-x-3">
                                    <button on:click={() => decreaseQuantity(deal)} class="bg-gray-200 text-gray-800 font-bold w-8 h-8 rounded-full hover:bg-gray-300">-</button>
                                    <span class="text-lg font-semibold w-10 text-center">{cartItem.quantity}</span>
                                    <button on:click={() => increaseQuantity(deal)} class="bg-gray-200 text-gray-800 font-bold w-8 h-8 rounded-full hover:bg-gray-300">+</button>
                                </div>
                            {:else}
                                <button on:click={() => addToCart(deal)} class="w-full bg-red-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-700 transition-colors">
                                    Add to Cart
                                </button>
                            {/if}
                        </div>
                    </div>
                {/each}
            </div>
        </section>
    
        <!-- Mid-page Banners -->
        <section class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="#" class="bg-gray-300 rounded-lg shadow-lg h-48 flex items-center justify-center">
                <img src="https://placehold.co/400x200/6366f1/ffffff?text=Build+Your+PC" alt="PC Builder" class="w-full h-full object-cover rounded-lg">
            </a>
            <a href="#" class="bg-gray-300 rounded-lg shadow-lg h-48 flex items-center justify-center">
                <img src="httpss://placehold.co/400x200/8b5cf6/ffffff?text=Custom+Builds" alt="Custom Builds" class="w-full h-full object-cover rounded-lg">
            </a>
            <a href="#" class="bg-gray-300 rounded-lg shadow-lg h-48 flex items-center justify-center">
                <img src="httpss://placehold.co/400x200/ec4899/ffffff?text=Support+Services" alt="Support Services" class="w-full h-full object-cover rounded-lg">
            </a>
        </section>
    
        <!-- Top Deals -->
        <section>
            <h2 class="text-2xl font-bold mb-6">Top Deals</h2>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {#each topDeals as deal}
                {@const cartItem = cartMap[deal.name]}
                    <div class="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center transition-shadow hover:shadow-xl">
                        <a href="#" on:click|preventDefault={() => addToRecentlyViewed(deal)} class="flex-grow">
                            <img src={deal.img} alt={deal.name} class="w-40 h-40 object-contain mb-4">
                            <h3 class_comment="Product title" class="text-sm font-semibold text-gray-800 h-10 mb-2">{deal.name}</h3>
                            <p class="text-lg font-bold text-blue-600 mt-2">{deal.price}</p>
                        </a>
                        
                        <!-- Add to Cart / Quantity Controls -->
                        <div class="mt-4 w-full">
                            {#if cartItem}
                                <div class="flex items-center justify-center space-x-3">
                                    <button on:click={() => decreaseQuantity(deal)} class="bg-gray-200 text-gray-800 font-bold w-8 h-8 rounded-full hover:bg-gray-300">-</button>
                                    <span class="text-lg font-semibold w-10 text-center">{cartItem.quantity}</span>
                                    <button on:click={() => increaseQuantity(deal)} class="bg-gray-200 text-gray-800 font-bold w-8 h-8 rounded-full hover:bg-gray-300">+</button>
                                </div>
                            {:else}
                                <button on:click={() => addToCart(deal)} class="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                                    Add to Cart
                                </button>
                            {/if}
                        </div>
                    </div>
                {/each}
            </div>
        </section>

        <!-- Recently Viewed Items -->
        <section>
            <h2 class="text-2xl font-bold mb-6">Your Recently Viewed Items</h2>
            {#if $recentlyViewed.length > 0}
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {#each $recentlyViewed as deal}
                        <div class="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center transition-shadow hover:shadow-xl">
                            <a href="#" class="flex-grow w-full">
                                <img src={deal.img} alt={deal.name} class="w-40 h-40 object-contain mb-4 mx-auto">
                                <h3 class="text-sm font-semibold text-gray-800 h-10 mb-2">{deal.name}</h3>
                                <p class="text-lg font-bold text-gray-700 mt-2">{deal.price}</p>
                            </a>
                        </div>
                    {/each}
                </div>
            {:else}
                <div class="bg-white rounded-lg shadow-md p-8 text-center text-gray-600">
                    <p>You haven't viewed any items yet. Start shopping!</p>
                </div>
            {/if}
        </section>
    </main>
</div>