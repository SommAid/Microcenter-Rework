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
    
    <!-- NAVIGATION BAR -->
    
    <nav class="hidden lg:block bg-[#201e1e] text-white">
    <div class="container mx-auto px-4">
    <ul class="flex items-center justify-center gap-8">
    <li><a href="#" class="py-3 px-2 block font-medium hover:bg-gray-700 rounded-md">PC Parts</a></li>
    <li><a href="#" class="py-3 px-2 block font-medium hover:bg-gray-700 rounded-md">Computers</a></li>
    <li><a href="/apple" class="py-3 px-2 block font-medium hover:bg-gray-700 rounded-md">Apple</a></li>
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
</div>