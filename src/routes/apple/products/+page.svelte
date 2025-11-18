<!-- 
  This flex container holds the main content 
-->
<div class="min-h-screen bg-gray-100 font-sans text-gray-900">
    <div class="flex container mx-28 px-4 py-4"> 
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
                        <a href="/apple" class="hover:text-blue-600 hover:underline">Apple</a>
                    </li>
                    <li class="flex items-center mx-2" aria-hidden="true">
                        <span>/</span>
                    </li>
                    <li class="flex items-center">
                        <a href="/apple/products" class="font-medium" aria-current="page">Sample Product</a>
                    </li>
                </ol>
            </nav>
            
            <div class="mb-6 bg-white rounded-lg shadow-md overflow-hidden">
                <div class="flex flex-col md:flex-row">
                    <div class="md:w-1/3">
                        <!-- You can replace this div with an <img> tag -->
                        <div class="h-64 md:h-full w-full bg-gray-200 flex items-center justify-center">
                            <span class="text-gray-500">Image Placeholder</span>
                        </div>
                    </div>
                    
                    <!-- Product Details -->
                    <div class="md:w-2/3 p-6">
                        <h2 class="text-2xl font-bold text-gray-900 mb-2">MacBook Air 13" M2</h2>
                        <p class="text-gray-700 mb-4">
                            MacBook Pro packs an array of ports for connecting high-speed peripherals, driving high-resolution displays, or directly offloading SDXC cards. Models with the M5 chip feature Thunderbolt 4. Models with M4 Pro or M4 Max feature Thunderbolt 5, which offers transfer speeds of up to 120Gb/s.51

                            MacBook Pro also supports both Wi-Fi 6E52 and Bluetooth 5.3 to connect to the internet and your wireless devices.
                        </p>
                        
                        <div class="mt-2 pb-4">
                            <span class="text-3xl font-bold text-gray-900">$999.99</span>
                            <span class="text-lg text-gray-500 line-through ml-2">$1199.99</span>
                        </div>
                        
                        <ul class="list-disc list-inside text-gray-700 mb-4 space-y-1 border-t border-gray-500 pt-4">
                            <li>Longest battery life in a macbook</li>
                            <li>Aluminum chasis for the most rigorous adventures</li>
                            <li>A whopping 16g of system memory</li>
                            <li>The fastest that Apple silicon can offer</li>
                            <li>A slew of ports ranging from USB-C all the way to USB-Z</li>
                        </ul>
                        
                        
                        <div class="list-disc list-inside text-gray-700 mb-4 space-y-1 border-t border-gray-500 pt-4">
                            <h2 class="text-2xl font-bold text-gray-900 mb-2">Sample Specifications:</h2>
                            <ul>
                                <li>CPU: M2</li>
                                <li>Memory: 16gb</li>
                                <li>Storage: 256gb</li>
                            </ul>
                        </div>                       
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>