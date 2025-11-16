<script>
    const categories = [
    { name: 'Computer Parts', img: 'https://www.google.com/search?q=https://placehold.co/100x100/e2e8f0/333%3Ftext%3DParts' },
    { name: 'Computers', img: 'https://www.google.com/search?q=https://placehold.co/100x100/e2e8f0/333%3Ftext%3DComputers' },
    { name: 'Apple', img: 'https://www.google.com/search?q=https://placehold.co/100x100/e2e8f0/333%3Ftext%3DApple' },
    { name: 'Electronics', img: 'https://www.google.com/search?q=https://placehold.co/100x100/e2e8f0/333%3Ftext%3DElectronics' },
    { name: 'Gaming', img: 'https://www.google.com/search?q=https://placehold.co/100x100/e2e8f0/333%3Ftext%3DGaming' },
    { name: 'Networking', img: 'https://www.google.com/search?q=https://placehold.co/100x100/e2e8f0/333%3Ftext%3DNetwork' },
    { name: 'DIY & Tools', img: 'https://www.google.com/search?q=https://placehold.co/100x100/e2e8f0/333%3Ftext%3DDIY' },
    { name: 'Cases & Lighting', img: 'https://www.google.com/search?q=https://placehold.co/100x100/e2e8f0/333%3Ftext%3DCases' },
    ];
    
    const hotDeals = [
    { name: 'Inland SSD', price: '$49.99', img: 'https://placehold.co/150x150/fef2f2/b91c1c?text=Hot+Deal' },
    { name: 'AMD Ryzen CPU', price: '$299.99', img: 'https://www.google.com/search?q=https://placehold.co/150x150/fef2f2/b91c1c%3Ftext%3DHot%2BDeal' },
    { name: 'PowerSpec PC', price: '$1299.99', img: 'https://placehold.co/150x150/fef2f2/b91c1c?text=Hot+Deal' },
    { name: 'Intel Core i9', price: '$549.99', img: 'https://www.google.com/search?q=https://placehold.co/150x150/fef2f2/b91c1c%3Ftext%3DHot%2BDeal' },
    ];
    
    const topDeals = [
    { name: 'Gaming Laptop', price: '$999.99', img: 'https://placehold.co/200x200/e0f2fe/0891b2?text=Top+Deal' },
    { name: '4K Monitor', price: '$349.99', img: 'https://www.google.com/search?q=https://placehold.co/200x200/e0f2fe/0891b2%3Ftext%3DTop%2BDeal' },
    { name: 'Motherboard', price: '$179.99', img: 'https://placehold.co/200x200/e0f2fe/0891b2?text=Top+Deal' },
    { name: 'RTX 4070', price: '$599.99', img: 'https://www.google.com/search?q=https://placehold.co/200x200/e0f2fe/0891b2%3Ftext%3DTop%2BDeal' },
    { name: 'Wireless Mouse', price: '$79.99', img: 'https://placehold.co/200x200/e0f2fe/0891b2?text=Top+Deal' },
    { name: 'VR Headset', price: '$499.99', img: 'https://www.google.com/search?q=https://placehold.co/200x200/e0f2fe/0891b2%3Ftext%3DTop%2BDeal' },
    ];
    </script>

    
    <div class="min-h-screen bg-gray-100 font-sans text-gray-900">
    
    
    <div class="bg-black text-white text-center text-sm p-1">
    Top Secret Deals! Click here for savings.
    </div>
    
    
    <header class="bg-white shadow-md sticky top-0 z-50">
    <div class="container mx-auto px-4 py-4 flex items-center justify-between gap-4">
    
      <!-- Logo -->
      <a href="/" class="text-2xl font-bold text-blue-700 whitespace-nowrap">
        MicroCenter
      </a>
    
      <!-- Hamburger Menu -->
      <button class="lg:hidden p-2 text-gray-600">
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
        <button class="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
      </div>
    
      <!-- Header Icons -->
      <div class="hidden lg:flex items-center gap-6 text-gray-600">
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
    
    <!-- NAVIGATION BAR -->
    
    <nav class="hidden lg:block bg-gray-800 text-white">
    <div class="container mx-auto px-4">
    <ul class="flex items-center justify-center gap-8">
    <li><a href="#" class="py-3 px-2 block font-medium hover:bg-gray-700 rounded-md">PC Parts</a></li>
    <li><a href="#" class="py-3 px-2 block font-medium hover:bg-gray-700 rounded-md">Computers</a></li>
    <li><a href="#" class="py-3 px-2 block font-medium hover:bg-gray-700 rounded-md">Apple</a></li>
    <li><a href="#" class="py-3 px-2 block font-medium hover:bg-gray-700 rounded-md">Gaming</a></li>
    <li><a href="#" class="py-3 px-2 block font-medium hover:bg-gray-700 rounded-md">Electronics</a></li>
    <li><a href="#" class="py-3 px-2 block font-medium hover:bg-gray-700 rounded-md">Networking</a></li>
    <li><a href="#" class="py-3 px-2 block font-medium hover:bg-gray-700 rounded-md">Services</a></li>
    <li><a href="#" class="py-3 px-2 block font-medium hover:bg-gray-700 rounded-md">Support</a></li>
    <li><a href="#" class="py-3 px-2 block font-medium text-red-400 hover:bg-gray-700 rounded-md">Deals</a></li>
    </ul>
    </div>
    </nav>
    
    <!-- MAIN CONTENT -->
    
    <main class="container mx-auto px-4 py-8 space-y-12">
    
    <!-- Hero Banners -->
    <section class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Main Hero Banner -->
      <div class="lg:col-span-2 h-64 lg:h-96 bg-gray-300 rounded-lg shadow-lg flex items-center justify-center">
        <img src="https://placehold.co/800x400/3b82f6/ffffff?text=Main+Promotion" alt="Main Promotion" class="w-full h-full object-cover rounded-lg">
      </div>
      <!-- Side Banners -->
      <div class="space-y-6">
        <div class="h-44 lg:h-[11.25rem] bg-gray-300 rounded-lg shadow-lg">
          <img src="https://placehold.co/400x200/10b981/ffffff?text=Side+Deal+1" alt="Side Deal 1" class="w-full h-full object-cover rounded-lg">
        </div>
        <div class="h-44 lg:h-[11.25rem] bg-gray-300 rounded-lg shadow-lg">
          <img src="https://placehold.co/400x200/f59e0b/ffffff?text=Side+Deal+2" alt="Side Deal 2" class="w-full h-full object-cover rounded-lg">
        </div>
      </div>
    </section>
    
    <!-- Shop All Categories -->
    <section>
      <h2 class="text-2xl font-bold mb-6">Shop All Categories</h2>
      <div class="grid grid-cols-4 md:grid-cols-8 gap-4">
        {#each categories as category}
          <a href="#" class="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow text-center">
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
          <a href="#" class="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
            <img src={deal.img} alt={deal.name} class="w-36 h-36 object-contain mb-4">
            <h3 class="font-semibold text-gray-800">{deal.name}</h3>
            <p class="text-lg font-bold text-red-600 mt-2">{deal.price}</p>
          </a>
        {/each}
      </div>
    </section>
    
    <!-- Mid-page Banners -->
    <section class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <a href="#" class="bg-gray-300 rounded-lg shadow-lg h-48 flex items-center justify-center">
        <img src="https://placehold.co/400x200/6366f1/ffffff?text=Build+Your+PC" alt="PC Builder" class="w-full h-full object-cover rounded-lg">
      </a>
      <a href="#" class="bg-gray-300 rounded-lg shadow-lg h-48 flex items-center justify-center">
        <img src="https://placehold.co/400x200/8b5cf6/ffffff?text=Custom+Builds" alt="Custom Builds" class="w-full h-full object-cover rounded-lg">
      </a>
      <a href="#" class="bg-gray-300 rounded-lg shadow-lg h-48 flex items-center justify-center">
        <img src="https://placehold.co/400x200/ec4899/ffffff?text=Support+Services" alt="Support Services" class="w-full h-full object-cover rounded-lg">
      </a>
    </section>
    
    <!-- Top Deals -->
    <section>
      <h2 class="text-2xl font-bold mb-6">Top Deals</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {#each topDeals as deal}
          <a href="#" class="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
            <img src={deal.img} alt={deal.name} class="w-40 h-40 object-contain mb-4">
            <h3 class_comment="Product title" class="text-sm font-semibold text-gray-800 h-10 mb-2">{deal.name}</h3>
            <p class="text-lg font-bold text-blue-600 mt-2">{deal.price}</p>
          </a>
        {/each}
      </div>
    </section>
    
    
    </main>
    
    <!-- === FOOTER === -->
    
    <footer class="bg-gray-900 text-gray-300 pt-16 pb-8">
    <div class="container mx-auto px-4">
    
      <!-- Footer Links Grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
        <!-- Column 1 -->
        <div>
          <h5 class="font-bold text-white mb-4">Shop</h5>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:text-white">Computers</a></li>
            <li><a href="#" class="hover:text-white">Computer Parts</a></li>
            <li><a href="#" class="hover:text-white">Apple</a></li>
            <li><a href="#" class="hover:text-white">Electronics</a></li>
            <li><a href="#" class="hover:text-white">Gaming</a></li>
          </ul>
        </div>
        <!-- Column 2 -->
        <div>
          <h5 class="font-bold text-white mb-4">Services</h5>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:text-white">PC Builder</a></li>
            <li><a href="#" class="hover:text-white">Support</a></li>
            <li><a href="#" class="hover:text-white">Repairs</a></li>
            <li><a href="#" class="hover:text-white">Protection Plans</a></li>
          </ul>
        </div>
        <!-- Column 3 -->
        <div>
          <h5 class="font-bold text-white mb-4">Help</h5>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:text-white">Contact Us</a></li>
            <li><a href="#" class="hover:text-white">FAQs</a></li>
            <li><a href="#" classs="hover:text-white">Shipping</a></li>
            <li><a href="#" class="hover:text-white">Returns</a></li>
          </ul>
        </div>
        <!-- Column 4 -->
        <div>
          <h5 class="font-bold text-white mb-4">About</h5>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:text-white">About Us</a></li>
            <li><a href="#" class="hover:text-white">Careers</a></li>
            <li><a href="#" class="hover:text-white">Store Locations</a></li>
            <li><a href="#" class="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>
        <!-- Column 5 & 6: Social/Newsletter -->
        <div class="col-span-2">
          <h5 class="font-bold text-white mb-4">Stay Connected</h5>
          <p class="text-sm mb-4">Get the latest deals and more.</p>
          <div class="flex">
            <input type="email" placeholder="Enter your email" class="w-full px-3 py-2 text-gray-900 rounded-l-md focus:outline-none">
            <button class="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700">Sign Up</button>
          </div>
          <!-- Social Icons would go here -->
        </div>
      </div>
      
      <!-- Copyright Bar -->
      <div class="border-t border-gray-700 pt-8 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} MicroCenter. All rights reserved.
      </div>
    </div>
    </footer>
    
</div>