<script>
    // Image imports for items in stock
    import BlackFridayImg from '$lib/assets/black-friday.png' 
    import InlandSSD from '$lib/assets/inland.jpg'
    import RyzenCPU from '$lib/assets/ryzen.png'
    import PowerSpec from '$lib/assets/powerspec_pc.jpg'
    import Inteli9 from '$lib/assets/inteli9.jpg'

    import GamingLaptop from '$lib/assets/gaming_laptop.jpg'
    import Monitor from '$lib/assets/4k_monitor.jpg'
    import Motherboard from '$lib/assets/motherboard.png'
    import RTX4070 from '$lib/assets/rtx4070.png'
    import Mouse from '$lib/assets/wireless_mouse.png'
    import SteamFrame from '$lib/assets/steam-frame.jpg'

    
    import { 
        recentlyViewed, 
        addToRecentlyViewed, 
        cart, 
        addToCart, 
        increaseQuantity, 
        decreaseQuantity 
    } from '$lib/store.js';

    // Sets the banner for deals / other future additions
    const heroBanners = [
        { src: BlackFridayImg, alt: 'Black Friday Deals' },
        { src: 'https://placehold.co/1200x400/6366f1/ffffff?text=Cyber+Monday', alt: 'Cyber Monday Deals' },
        { src: 'https://placehold.co/1200x400/ec4899/ffffff?text=Holiday+Specials', alt: 'Holiday Specials' }
    ];

    let currentImageIndex = 0;
    $: currentImage = heroBanners[currentImageIndex];

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % heroBanners.length;
    }

    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + heroBanners.length) % heroBanners.length;
    }
    
    // Creates a map of cart items for quick lookup
    $: cartMap = $cart.reduce((acc, item) => {
        acc[item.name] = item;
        return acc;
    }, {});

    // Temporary JSON-like data for items in stock
    const categories = [
        { name: 'Computer Parts'  },
        { name: 'Computers', img: 'https://placehold.co/100x100/e2e8f0/333?text=Computers' },
        { name: 'Apple', img: 'https://placehold.co/100x100/e2e8f0/333?text=Apple' },
        { name: 'Electronics', img: 'https://placehold.co/100x100/e2e8f0/333?text=Electronics' },
        { name: 'Gaming', img: 'https://placehold.co/100x100/e2e8f0/333?text=Gaming' },
        { name: 'Networking', img: 'https://placehold.co/100x100/e2e8f0/333?text=Network' },
        { name: 'DIY & Tools', img: 'https://placehold.co/100x100/e2e8f0/333?text=DIY' },
        { name: 'Cases & Lighting', img: 'https://placehold.co/100x100/e2e8f0/333?text=Cases' },
    ];
    
    const hotDeals = [
        { name: 'Inland SSD', originalPrice: '$69.99', price: '$49.99', img: InlandSSD },
        { name: 'AMD Ryzen CPU', originalPrice: '$349.99', price: '$299.99', img: RyzenCPU },
        { name: 'PowerSpec PC', originalPrice: '$1499.99', price: '$1299.99', img: PowerSpec },
        { name: 'Intel Core i9', originalPrice: '$599.99', price: '$549.99', img: Inteli9 },
    ];
    
    const topDeals = [
        { name: 'Gaming Laptop', price: '$999.99', img: GamingLaptop },
        { name: '4K Monitor', price: '$349.99', img: Monitor },
        { name: 'Motherboard', price: '$179.99', img: Motherboard },
        { name: 'RTX 4070', price: '$599.99', img: RTX4070 },
        { name: 'Wireless Mouse', price: '$79.99', img: Mouse },
        { name: 'VR Headset', price: '$499.99', img: SteamFrame },
    ];

</script>
    
<div class="min-h-screen bg-gray-100 font-sans text-gray-900">
    <main class="container mx-auto px-4 py-8 space-y-12">
    
        <!-- Image Carousel -->
        <div class="pt-5 rounded-lg shadow-lg flex items-center justify-center relative group overflow-hidden">
            <img src={currentImage.src} alt={currentImage.alt} class="w-full h-full max-h-69 object-cover rounded-lg transition-transform duration-500 ease-in-out">
            <!-- Previous Button -->
            <button 
                on:click={prevImage} 
                class="absolute left-0 top-1/2 -translate-y-1/2 ml-4 p-3 bg-black/30 text-white rounded-full hover:bg-black/50 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
                aria-label="Previous Image"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>
        
            <!-- Next Button -->
            <button 
                on:click={nextImage} 
                class="absolute right-0 top-1/2 -translate-y-1/2 mr-4 p-3 bg-black/30 text-white rounded-full hover:bg-black/50 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
                aria-label="Next Image"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>
        </div>
    
        <!-- Shop All Categories Section -->
        <section>
            <h2 class="text-2xl font-bold mb-6">Shop All Categories</h2>
            <div class="grid grid-cols-4 md:grid-cols-8 gap-4">
                {#each categories as category}
                    <a href="/{category.name.toLocaleLowerCase()}" 
                       class="flex items-center justify-center p-2 aspect-square 
                              bg-white rounded-lg shadow-md 
                              hover:shadow-xl hover:bg-red-400
                              transition-all text-center">
                        
                        <span class="font-semibold text-xl text-black">{category.name}</span>
                    </a>
                {/each}
            </div>
        </section>
    
        <!-- Hot Deals Section -->
        <section>
            <h2 class="text-2xl font-bold mb-6 text-red-600">Hot Deals</h2>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                {#each hotDeals as deal}
                {@const cartItem = cartMap[deal.name]}
                    <div class="bg-white rounded-lg shadow-md flex flex-col items-center text-center transition-shadow hover:shadow-xl overflow-hidden">
                        <a href="#" on:click|preventDefault={() => addToRecentlyViewed(deal)} class="flex-grow w-full relative group p-4">
                            
                            <img src={deal.img} alt={deal.name} class="w-36 h-36 object-contain mb-4 mx-auto">
                            
                            <div> 
                                <h3 class="font-semibold text-gray-800">{deal.name}</h3>
                                <p class="text-base text-gray-500 line-through mt-2">{deal.originalPrice}</p>
                                <p class="text-lg font-bold text-red-600">{deal.price}</p>
                            </div>

                            <div class="absolute inset-0 flex items-center justify-center
                                        bg-black bg-opacity-30 text-white text-lg font-semibold
                                        opacity-0 group-hover:opacity-50 transition-opacity duration-300">
                                See Details
                            </div>
                        </a>
                        
                        <div class="w-full px-4 pb-4 mt-4">
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
    
        <!-- Promo Banners Section -->
        <section class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="#" class="bg-gray-300 rounded-lg shadow-lg h-48 flex items-center justify-center overflow-hidden">
                <img src="https://placehold.co/400x200/6366f1/ffffff?text=Build+Your+PC" alt="PC Builder" class="w-full h-full object-cover rounded-lg transition-transform hover:scale-105 duration-300">
            </a>
            <a href="#" class="bg-gray-300 rounded-lg shadow-lg h-48 flex items-center justify-center overflow-hidden">
                <img src="https://placehold.co/400x200/8b5cf6/ffffff?text=Custom+Builds" alt="Custom Builds" class="w-full h-full object-cover rounded-lg transition-transform hover:scale-105 duration-300">
            </a>
            <a href="#" class="bg-gray-300 rounded-lg shadow-lg h-48 flex items-center justify-center overflow-hidden">
                <img src="https://placehold.co/400x200/ec4899/ffffff?text=Support+Services" alt="Support Services" class="w-full h-full object-cover rounded-lg transition-transform hover:scale-105 duration-300">
            </a>
        </section>
    
        <!-- Top Deals Section -->
        <section>
            <h2 class="text-2xl font-bold mb-6">New Products</h2>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {#each topDeals as deal}
                {@const cartItem = cartMap[deal.name]}
                    <div class="bg-white rounded-lg shadow-md flex flex-col items-center text-center transition-shadow hover:shadow-xl overflow-hidden">
                        <a href="#" on:click|preventDefault={() => addToRecentlyViewed(deal)} class="flex-grow w-full relative group p-4">
                            
                            <img src={deal.img} alt={deal.name} class="w-40 h-40 object-contain mb-4 mx-auto">
                            
                            <div>
                                <h3 class="text-sm font-semibold text-gray-800 h-10 mb-2">{deal.name}</h3>
                                <p class="text-lg font-bold text-blue-600 mt-2">{deal.price}</p>
                            </div>


                            <div class="absolute inset-0 flex items-center justify-center
                                        bg-black bg-opacity-30 text-white text-lg font-semibold
                                        opacity-0 group-hover:opacity-50 transition-opacity duration-300">
                                See Details
                            </div>
                        </a>
                        
                        <div class="w-full px-4 pb-4 mt-4">
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

        <!-- Recently Viewed Section -->
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