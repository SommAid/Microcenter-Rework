<script>
  // 1. Import your SVG image. This works inside a .svelte file.
  import MCLogo from '$lib/assets/MCLogo.svg';
  import ShopeImg from '$lib/assets/storeWHITE.svg'
  import UserImg from '$lib/assets/UWhite.svg'
  
</script>

<!-- 
  This is the component's style. 
  It's "scoped," meaning it only applies to this file.
-->
<style>
    .cart-badge {
        position: absolute;
        top: -8px;
        right: -10px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: red;
        color: white;
        font-size: 12px;
        font-weight: bold;
    }
</style>

<!-- 
  This is the component's HTML. 
  Notice there is no <!DOCTYPE html>, <head>, or <body>.
-->
<header class="bg-[#201E1E] shadow-md w-full p-4 border-b border-gray-700">
    <div class="container mx-auto max-w-7xl">
        <nav class="flex items-center justify-between space-x-6">

            <!-- 1. Far Left: Logo -->
            <!-- We use the imported {MyImage} variable here -->
            <a href="/" class="flex items-center space-x-2">
                <img src={MCLogo} alt="Microcenter Logo" class="h-12 w-auto">
            </a>

            <!-- 2. Center: Search Bar -->
            <div class="relative flex-grow">
                <input 
                    type="search" 
                    placeholder="Search Products..." 
                    class="w-full py-2 pl-10 pr-4 border border-gray-600 bg-gray-800 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                <!-- Search Icon (Embedded SVG for Svelte) -->
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search w-5 h-5 text-gray-400"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                </div>
            </div>

            <!-- 3. Right Side: Icons & Links -->
            <div class="flex items-center space-x-6">
            
                <!-- Store Hours (Updated text color for dark bg) -->
                <a href="#" class="flex items-center space-x-2 text-gray-300 hover:text-red-600">
                    <img src={ShopeImg} alt="Store Location Image" class="h-5 w-auto">
                    <div class="flex flex-col text-xs leading-tight">
                        <span class="font-semibold">Sharonville:</span>
                        <span>10:00 AM - 9:00 PM</span>
                    </div>
                </a>

                <!-- Profile / Sign In (Updated text color) -->
                <a href="#" class="flex items-center space-x-2 text-gray-300 hover:text-red-600">
                     <img src={UserImg} alt="User Icon" class="h-6 w-auto">
                    <div class="flex flex-col text-sm leading-tight">
                        <span class="font-semibold">Sign In</span>
                    </div>
                </a>

                <!-- Cart (Updated text color) -->
                <a href="#" class="relative flex items-center space-x-2 text-gray-300 hover:text-red-600">
                    <!-- Cart Icon (Embedded SVG) -->
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart w-7 h-7 flex-shrink-0"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                    <!-- Cart count badge -->
                    <span class="cart-badge">
                        3
                    </span>
                </a>

            </div>
        </nav>
    </div>
</header>