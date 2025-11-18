<script>
  import MCLogo from '$lib/assets/MCLogo.svg'; 
</script>

<footer class="bg-[#201e1e] text-gray-300 pt-16 pb-8">
  <div class="container mx-auto px-4">
  
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
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
      <div>
        <h5 class="font-bold text-white mb-4">Services</h5>
        <ul class="space-y-2 text-sm">
          <li><a href="#" class="hover:text-white">PC Builder</a></li>
          <li><a href="#" class="hover:text-white">Support</a></li>
          <li><a hef="#" class="hover:text-white">Repairs</a></li>
          <li><a href="#" class="hover:text-white">Protection Plans</a></li>
        </ul>
      </div>
      <div>
        <h5 class="font-bold text-white mb-4">Help</h5>
        <ul class="space-y-2 text-sm">
          <li><a href="#" class="hover:text-white">Contact Us</a></li>
          <li><a href="#" class="hover:text-white">FAQs</a></li>
          <li><a href="#" class="hover:text-white">Shipping</a></li>
          <li><a href="#" class="hover:text-white">Returns</a></li>
        </ul>
      </div>
      <div>
        <h5 class="font-bold text-white mb-4">About</h5>
        <ul class="space-y-2 text-sm">
          <li><a href="#" class="hover:text-white">About Us</a></li>
          <li><a href="#" class="hover:text-white">Careers</a></li>
          <li><a href="#" class="hover:text-white">Store Locations</a></li>
          <li><a href="#" class="hover:text-white">Privacy Policy</a></li>
        </ul>
      </div>
      <!-- Social/Newsletter -->
      <div class="col-span-2">
        <h5 class="font-bold text-white mb-4">Stay Connected</h5>
        <p class="text-sm mb-4">Get the latest deals and more.</p>

      </div>
    </div>

    <!-- Icons & Links -->
    <div class="flex items-center space-x-6 border-t border-gray-700 pt-8">
      <img src={MCLogo} alt="Microcenter Logo" class="h-12 w-auto">
      <div class="grow text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} MicroCenter. All rights reserved.
      </div>
    </div>
  </div>
</footer>    
    