<header class="bg-[#201e1e] shadow-md sticky top-0 z-50">
    <div class="container mx-auto px-4 py-4 flex items-center justify-between gap-4">
        <!-- Logo -->
        <img width="60" src="https://60a99bedadae98078522-a9b6cded92292ef3bace063619038eb1.ssl.cf2.rackcdn.com/MClogoWhiteStacked.svg" alt="Micro Center">

        <button class="lg:hidden p-2 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
        </button>

        <!-- Search Bar -->
        <div class="hidden lg:flex flex-grow max-w-2xl mx-4">
        <input 
            type="text" 
            placeholder="Search for products..." 
            class="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
        <button class="bg-[#201e1e] text-white px-4 py-2 rounded-r-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
        </button>
        </div>

        <div class="hidden lg:flex items-center gap-6 text-white">
        <a href="#" class="flex items-center gap-1 hover:text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span class="text-sm">Store</span>
        </a>
        <a href="#" class="flex items-center gap-1 hover:text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span class="text-sm">Sign In</span>
        </a>
        <a href="#" class="flex items-center gap-1 hover:text-blue-600 relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <span class="text-sm">Cart</span>
            <span class_comment="Cart item count badge" class="absolute -top-2 -right-3 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            0
            </span>
        </a>
        </div>
</div>


</header>