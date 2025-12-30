// config/siteConfig.js
export const siteConfig = {
  siteName: 'Nena Craft Bakery',
  logo: {
    text: 'Nena Craft Bakery',
    src: '/logo/nena-logo.png',
    alt: 'Nena Craft Bakery Logo',
    height: 60,
  },
  metadata: {
    base: {
      title: 'Nena Craft Bakery – Sourdough Bakery, Cafe & Speciality Coffee',
      description:
        'Artisan sourdough bakery, cafe and speciality coffee in Buckinghamshire. Freshly baked pastries, celebration cakes, and locally sourced seasonal ingredients.',
      icons: {
        icon: [
          { url: '/logo/favicon.ico', sizes: 'any' },
          { url: '/logo/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
          { url: '/logo/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        ],
        apple: [
          { url: '/logo/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
        ],
      },
      manifest: '/site.webmanifest',
    },
  },

  fonts: {
    base: `'Nunito Sans', sans-serif`,
    heading: `'Cormorant Garamond', serif`,
    baseClass: 'font-nunito',
    headingClass: 'font-cormorant',
    google: { base: 'Nunito Sans', heading: 'Cormorant Garamond', accent: 'Nunito Sans' },
  },

  // Warm bakery color scheme
  brand: {
    primary: '#94B087', // sage green from logo
    secondary: '#F2C4C4', // warm pink/blush
    accent: '#F9E5A0', // soft yellow
    mint: '#D4E8D1', // light mint
    dark: '#2D2D2D', // dark text
    background: '#FFFFFF', // clean white
  },

  styles: {
    bgLight: 'bg-white',
    bgPrimary: 'bg-[#94B087]',
    bgSecondary: 'bg-[#F2C4C4]',
    bgAccent: 'bg-[#F9E5A0]',
    bgMint: 'bg-[#D4E8D1]',
    textPrimary: 'text-[#2D2D2D]',
    textMuted: 'text-[#666666]',
    textLight: 'text-white',
    borderLight: 'border-[#D4E8D1]',
    borderPrimary: 'border-[#94B087]',
  },

  banner: {
    show: true,
    text: 'Sourdough Bakery, Cafe & Speciality Coffee • local • seasonal • independent',
    scrolling: true,
  },

  nav: {
    links: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Pastries', href: '/pastries' },
      { label: 'Menu', href: '/menu' },
      { label: 'Locations', href: '/locations' },
    ],
    cta: {
      text: 'Order Now',
      href: '/locations',
    },
  },

  footer: {
    copyright: 'Nena Craft Bakery',
    columns: [
      {
        title: 'Explore',
        links: [
          { label: 'About', href: '/about' },
          { label: 'Pastries', href: '/pastries' },
          { label: 'Menu', href: '/menu' },
          { label: 'Locations', href: '/locations' },
        ],
      },
      {
        title: 'Info',
        links: [
          { label: 'Contact', href: '/locations#contact' },
          { label: 'Careers', href: '/careers' },
          { label: 'Privacy Policy', href: '/privacy' },
        ],
      },
    ],
    social: {
      instagram: 'https://www.instagram.com/nena_craftbakery',
      facebook: 'https://www.facebook.com/p/Nena-Craft-Bakery-100094162370332',
      tiktok: '',
    },
    locations: [
      {
        name: 'Berkhamsted',
        address: '214 High Street',
      },
      {
        name: 'Amersham',
        address: '53 Sycamore Road',
      },
    ],
    contact: {
      email: 'hello@nenacraftbakery.co.uk',
      phone: '01234 567890',
    },
  },

  hero: {
    slides: [
      {
        image: '/images/sourdough-loaves.jpg',
        imageAlt: 'Fresh artisan sourdough bread',
        heading: 'Freshly Baked, Every Day',
        subheading: 'Artisan sourdough, pastries and speciality coffee in the heart of Buckinghamshire',
        ctaText: 'View Our Menu',
        ctaHref: '/menu',
      },
      {
        image: '/images/croissants.jpg',
        imageAlt: 'Fresh croissants and pastries',
        heading: 'Handcrafted Pastries',
        subheading: 'Buttery croissants, flaky danishes, and sweet treats baked fresh every morning',
        ctaText: 'See Pastries',
        ctaHref: '/pastries',
      },
      {
        image: '/images/coffee-latte.jpg',
        imageAlt: 'Speciality coffee latte art',
        heading: 'Speciality Coffee',
        subheading: 'Expertly roasted, carefully brewed - the perfect companion to your morning pastry',
        ctaText: 'Visit Us',
        ctaHref: '/locations',
      },
    ],
  },

  products: {
    heading: 'Our Products',
    subheading: 'Handcrafted with love using locally sourced, seasonal ingredients',
    items: [
      {
        title: 'Sourdough Loaves',
        image: '/images/bread-loaf.jpg',
        href: '/pastries?category=sourdough',
      },
      {
        title: 'Pastries & Viennoiserie',
        image: '/images/croissants.jpg',
        href: '/pastries?category=viennoiserie',
      },
      {
        title: 'Cakes & Celebration',
        image: '/images/cakes-display.jpg',
        href: '/pastries?category=cakes',
      },
      {
        title: 'Sweet Treats',
        image: '/images/sweet-treats.jpg',
        href: '/pastries?category=sweet',
      },
      {
        title: 'Coffee & Drinks',
        image: '/images/coffee-latte.jpg',
        href: '/menu#drinks',
      },
    ],
  },

  occasions: {
    heading: 'Treats for Any Occasion',
    subheading: "From birthday cakes to morning pastries, we've got you covered",
    items: [
      {
        title: 'Best Sellers',
        image: '/images/pastries-display.jpg',
        href: '/pastries',
      },
      {
        title: 'Celebration Cakes',
        image: '/images/celebration-cake.jpg',
        href: '/pastries?category=cakes',
      },
      {
        title: 'Gifts & Hampers',
        image: '/images/baked-goods.jpg',
        href: '/pastries?category=gifts',
      },
      {
        title: 'Seasonal Specials',
        image: '/images/sweet-treats.jpg',
        href: '/pastries?category=seasonal',
      },
    ],
  },

  visitUs: {
    heading: 'Delivery and Pick Up',
    subheading: 'Pop into one of our two locations or order ahead for collection',
    options: [
      {
        title: 'Order Ahead',
        description: 'Skip the queue - order online for collection at your preferred time',
        icon: 'smartphone',
        href: '/locations',
      },
      {
        title: 'Cafe Dine-In',
        description: 'Enjoy your treats in our cosy cafe with a freshly brewed coffee',
        icon: 'coffee',
        href: '/locations',
      },
      {
        title: 'Catering & Events',
        description: 'Let us make your special occasion even sweeter',
        icon: 'calendar',
        href: '/locations#contact',
      },
    ],
  },

  catering: {
    heading: 'Catering, Gifting & Events',
    subheading: 'Our team is ready to make your event special with custom orders and catering packages. No occasion too big or small!',
    ctaText: 'Get Started',
    ctaHref: '/locations#contact',
    image: '/images/cakes-display.jpg',
    imageAlt: 'Beautiful celebration cakes display',
  },

  newsletter: {
    heading: 'Join Our Newsletter',
    subheading: 'Get the freshest Nena updates, offers and a treat on your birthday!',
    placeholder: 'Enter your email',
    buttonText: 'Subscribe',
  },

  about: {
    heading: 'Our Story',
    intro: 'Baked with Love, Served with Care',
    content: `At Nena Craft Bakery, we believe that great bread starts with great ingredients and even better intentions. Founded in the heart of Buckinghamshire, our bakery is a labour of love dedicated to the art of sourdough and artisan baking.

Every loaf we bake begins with a 24-hour fermentation process, using only the finest organic flours and our carefully nurtured sourdough starter. This slow approach creates bread with exceptional flavour, beautiful texture, and natural goodness.

We work closely with local farmers and suppliers to source seasonal ingredients, ensuring that every croissant, cake, and coffee reflects our commitment to quality and community. Our cafe is a gathering place for neighbours and friends, where the aroma of fresh bread fills the air and every visit feels like coming home.`,
    image: '/images/bakery-counter.jpg',
    imageAlt: 'Bakery counter with fresh baked goods',
    values: [
      {
        title: 'Local & Seasonal',
        description: 'We source ingredients from local farms and suppliers, celebrating the seasons in every bake.',
        icon: 'leaf',
      },
      {
        title: 'Handcrafted Daily',
        description: 'Every item is made fresh each morning by our skilled bakers using traditional techniques.',
        icon: 'heart',
      },
      {
        title: 'Community Focused',
        description: 'We are proud to be part of our local community, supporting local causes and creating a welcoming space for all.',
        icon: 'users',
      },
    ],
  },

  pastries: {
    heading: 'Our Pastries',
    subheading: 'Freshly baked every morning',
    categories: ['All', 'Viennoiserie', 'Sweet Pastries', 'Savoury', 'Cakes', 'Sourdough'],
    items: [
      {
        name: 'Classic Croissant',
        description: 'Buttery, flaky layers of perfection',
        price: '3.50',
        category: 'Viennoiserie',
        image: '/images/croissants.jpg',
      },
      {
        name: 'Pain au Chocolat',
        description: 'Classic chocolate-filled pastry',
        price: '3.95',
        category: 'Viennoiserie',
        image: '/images/pastries-display.jpg',
      },
      {
        name: 'Almond Croissant',
        description: 'Filled with frangipane, topped with flaked almonds',
        price: '4.50',
        category: 'Viennoiserie',
        image: '/images/croissants.jpg',
      },
      {
        name: 'Cinnamon Bun',
        description: 'Soft, swirled with cinnamon and topped with cream cheese frosting',
        price: '4.25',
        category: 'Sweet Pastries',
        image: '/images/sweet-treats.jpg',
      },
      {
        name: 'Cardamom Bun',
        description: 'Swedish-style with aromatic cardamom and pearl sugar',
        price: '4.25',
        category: 'Sweet Pastries',
        image: '/images/baked-goods.jpg',
      },
      {
        name: 'Danish Pastry',
        description: 'Seasonal fruit and vanilla custard',
        price: '4.50',
        category: 'Sweet Pastries',
        image: '/images/pastries-display.jpg',
      },
      {
        name: 'Sausage Roll',
        description: 'Flaky pastry with premium pork filling',
        price: '4.50',
        category: 'Savoury',
        image: '/images/baked-goods.jpg',
      },
      {
        name: 'Cheese & Ham Croissant',
        description: 'Gruyere cheese and oak-smoked ham',
        price: '4.95',
        category: 'Savoury',
        image: '/images/croissants.jpg',
      },
      {
        name: 'Spinach & Feta Swirl',
        description: 'Flaky pastry with spinach and tangy feta',
        price: '4.50',
        category: 'Savoury',
        image: '/images/pastries-display.jpg',
      },
      {
        name: 'Victoria Sponge',
        description: 'Classic British cake with jam and cream',
        price: '4.95',
        category: 'Cakes',
        image: '/images/cakes-display.jpg',
      },
      {
        name: 'Carrot Cake',
        description: 'Moist spiced cake with cream cheese frosting',
        price: '4.95',
        category: 'Cakes',
        image: '/images/celebration-cake.jpg',
      },
      {
        name: 'Chocolate Brownie',
        description: 'Rich, fudgy, and deeply chocolatey',
        price: '3.95',
        category: 'Cakes',
        image: '/images/sweet-treats.jpg',
      },
      {
        name: 'Classic Sourdough',
        description: 'Our signature 24-hour fermented loaf',
        price: '5.50',
        category: 'Sourdough',
        image: '/images/sourdough-loaves.jpg',
      },
      {
        name: 'Seeded Sourdough',
        description: 'Packed with sunflower, pumpkin and sesame seeds',
        price: '6.00',
        category: 'Sourdough',
        image: '/images/bread-loaf.jpg',
      },
      {
        name: 'Focaccia',
        description: 'Olive oil, rosemary and sea salt',
        price: '5.95',
        category: 'Sourdough',
        image: '/images/sourdough-loaves.jpg',
      },
    ],
  },

  menu: {
    heading: 'Our Menu',
    subheading: 'Sourdough, pastries, speciality coffee & more',
    note: 'Menus may vary by location. Pop in to see today\'s selection!',
    dietaryKey: [
      { label: 'V', description: 'Vegetarian' },
      { label: 'VG', description: 'Vegan' },
      { label: 'GF', description: 'Gluten-Free Available' },
    ],
    sections: [
      {
        title: 'Bakery',
        categories: [
          {
            name: 'Sourdough Loaves',
            items: [
              { name: 'Classic White Sourdough', price: '5.50', dietary: ['V'] },
              { name: 'Seeded Sourdough', price: '6.00', dietary: ['V', 'VG'] },
              { name: 'Rye Sourdough', price: '6.00', dietary: ['V', 'VG'] },
              { name: 'Olive & Rosemary Focaccia', price: '5.95', dietary: ['V', 'VG'] },
            ],
          },
          {
            name: 'Pastries & Viennoiserie',
            items: [
              { name: 'Classic Croissant', price: '3.50', dietary: ['V'] },
              { name: 'Pain au Chocolat', price: '3.95', dietary: ['V'] },
              { name: 'Almond Croissant', price: '4.50', dietary: ['V'] },
              { name: 'Cinnamon Bun', price: '4.25', dietary: ['V'] },
            ],
          },
          {
            name: 'Sweet Treats',
            items: [
              { name: 'Chocolate Brownie', price: '3.95', dietary: ['V', 'GF'] },
              { name: 'Victoria Sponge Slice', price: '4.95', dietary: ['V'] },
              { name: 'Carrot Cake', price: '4.95', dietary: ['V'] },
              { name: 'Lemon Drizzle', price: '4.50', dietary: ['V'] },
            ],
          },
        ],
      },
      {
        title: 'Cafe',
        categories: [
          {
            name: 'Breakfast',
            items: [
              { name: 'Sourdough Toast & Jam', price: '4.50', dietary: ['V', 'VG'] },
              { name: 'Avocado on Sourdough', price: '8.95', dietary: ['V', 'VG'] },
              { name: 'Eggs Your Way on Toast', price: '7.95', dietary: ['V', 'GF'] },
              { name: 'Full English', price: '12.95', dietary: ['GF'] },
              { name: 'Veggie Breakfast', price: '11.95', dietary: ['V', 'GF'] },
            ],
          },
          {
            name: 'Lunch',
            items: [
              { name: 'Soup of the Day', price: '6.95', dietary: ['V', 'VG', 'GF'] },
              { name: 'Grilled Cheese Toastie', price: '7.95', dietary: ['V'] },
              { name: 'Ham & Cheese Toastie', price: '8.50', dietary: [] },
              { name: 'Seasonal Salad', price: '9.95', dietary: ['V', 'VG', 'GF'] },
              { name: 'Quiche of the Day', price: '8.95', dietary: ['V'] },
            ],
          },
          {
            name: 'Kids Menu',
            items: [
              { name: 'Mini Toast Soldiers', price: '3.95', dietary: ['V'] },
              { name: 'Cheese Toastie', price: '5.50', dietary: ['V'] },
              { name: 'Mini Pancakes', price: '5.95', dietary: ['V'] },
            ],
          },
        ],
      },
      {
        title: 'Drinks',
        categories: [
          {
            name: 'Speciality Coffee',
            items: [
              { name: 'Espresso', price: '2.50', dietary: ['V', 'VG', 'GF'] },
              { name: 'Americano', price: '3.20', dietary: ['V', 'VG', 'GF'] },
              { name: 'Flat White', price: '3.80', dietary: ['V', 'GF'] },
              { name: 'Latte', price: '3.80', dietary: ['V', 'GF'] },
              { name: 'Cappuccino', price: '3.80', dietary: ['V', 'GF'] },
              { name: 'Oat Milk +', price: '0.50', dietary: ['VG'] },
            ],
          },
          {
            name: 'Tea & Hot Drinks',
            items: [
              { name: 'English Breakfast Tea', price: '2.80', dietary: ['V', 'VG', 'GF'] },
              { name: 'Earl Grey', price: '2.80', dietary: ['V', 'VG', 'GF'] },
              { name: 'Herbal Tea Selection', price: '3.00', dietary: ['V', 'VG', 'GF'] },
              { name: 'Hot Chocolate', price: '3.95', dietary: ['V', 'GF'] },
              { name: 'Chai Latte', price: '4.20', dietary: ['V', 'GF'] },
            ],
          },
          {
            name: 'Cold Drinks',
            items: [
              { name: 'Iced Latte', price: '4.20', dietary: ['V', 'GF'] },
              { name: 'Iced Americano', price: '3.50', dietary: ['V', 'VG', 'GF'] },
              { name: 'Fresh Orange Juice', price: '3.95', dietary: ['V', 'VG', 'GF'] },
              { name: 'Homemade Lemonade', price: '3.50', dietary: ['V', 'VG', 'GF'] },
            ],
          },
        ],
      },
    ],
  },

  locations: {
    heading: 'Find Us',
    subheading: 'Two locations, one love for great food',
    sites: [
      {
        name: 'Berkhamsted',
        address: '214 High Street, Berkhamsted',
        postcode: 'HP4 1AG',
        image: '/images/bakery-interior-1.jpg',
        hours: [
          { days: 'Mon - Fri', time: '8am - 5pm' },
          { days: 'Saturday', time: '8am - 5pm' },
          { days: 'Sunday', time: '9am - 4pm' },
        ],
        mapUrl: 'https://maps.google.com/?q=214+High+Street+Berkhamsted',
      },
      {
        name: 'Amersham',
        address: '53 Sycamore Road, Amersham',
        postcode: 'HP6 5EQ',
        image: '/images/cafe-interior.jpg',
        hours: [
          { days: 'Mon - Fri', time: '8am - 5pm' },
          { days: 'Saturday', time: '8am - 5pm' },
          { days: 'Sunday', time: '9am - 4pm' },
        ],
        mapUrl: 'https://maps.google.com/?q=53+Sycamore+Road+Amersham',
      },
    ],
    contact: {
      heading: 'Get in Touch',
      email: 'hello@nenacraftbakery.co.uk',
      phone: '01234 567890',
      form: {
        heading: 'Send us a message',
        fields: {
          name: { label: 'Name', placeholder: 'Your name' },
          email: { label: 'Email', placeholder: 'you@example.com' },
          message: { label: 'Message', placeholder: 'How can we help?' },
        },
        button: 'Send Message',
      },
    },
  },

  testimonials: {
    heading: 'What Our Customers Say',
    entries: [
      {
        quote: 'The best sourdough I have ever tasted! The crust is perfectly crispy and the inside is so soft and flavourful. A must-visit bakery.',
        name: 'Emma S.',
        location: 'Berkhamsted',
      },
      {
        quote: 'My go-to spot for weekend brunch. The pastries are incredible and the coffee is exactly how I like it. The staff are always so welcoming!',
        name: 'James & Sophie',
        location: 'Amersham',
      },
      {
        quote: 'Ordered a birthday cake for my daughter and it was absolutely stunning. Not only beautiful but delicious too. Will definitely be back!',
        name: 'Rachel T.',
        location: 'Chesham',
      },
    ],
  },
};
