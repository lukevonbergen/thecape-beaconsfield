// config/siteConfig.js
export const siteConfig = {
  siteName: 'The Cape',
  logo: {
    text: 'The Cape',
    src: '/logo/cape-logo.avif',
    alt: 'The Cape Logo',
    height: 60,
  },
  metadata: {
    base: {
      title: 'The Cape – South African Café & Restaurant | Beaconsfield',
      description:
        'The Cape restaurant in Beaconsfield - your local neighbourhood café serving South African-inspired breakfasts, lunches & homebaked treats for over 19 years.',
      icons: {
        icon: [
          { url: '/logo/favicon.png', type: 'image/png' },
        ],
        apple: [
          { url: '/logo/favicon.png', type: 'image/png' },
        ],
      },
      manifest: '/site.webmanifest',
    },
  },

  fonts: {
    base: `'Lato', sans-serif`,
    heading: `'Playfair Display', serif`,
    accent: `'Dancing Script', cursive`,
    baseClass: 'font-lato',
    headingClass: 'font-playfair',
    accentClass: 'font-dancing',
    google: { base: 'Lato', heading: 'Playfair Display', accent: 'Dancing Script' },
  },

  // The Cape color scheme - warm, earthy South African tones
  brand: {
    primary: '#C4653A', // warm terracotta/rust
    secondary: '#5C6B4A', // deep olive/sage
    accent: '#F5EDE0', // warm cream
    dark: '#2D2D2D', // dark text
    background: '#FFFBF7', // off-white/warm white
  },

  styles: {
    bgLight: 'bg-background',
    bgPrimary: 'bg-primary',
    bgSecondary: 'bg-secondary',
    bgAccent: 'bg-accent',
    textPrimary: 'text-dark',
    textMuted: 'text-[#666666]',
    textLight: 'text-white',
    borderLight: 'border-accent',
    borderPrimary: 'border-primary',
  },

  banner: {
    show: true,
    text: 'THE CAPE IS OPEN FOR DINE IN MONDAY - SATURDAY 8AM - 4PM | SUNDAY 9.30AM - 3PM',
    scrolling: false,
  },

  nav: {
    links: [
      { label: 'Home', href: '/' },
      { label: 'Menu', href: '/menu' },
      { label: 'Events', href: '/events' },
    ],
    cta: {
      text: 'Make a Booking',
      href: 'https://book.mysimpleerb.com/1019/the-cape-restaurant/?__type=text&__target=nw',
    },
  },

  footer: {
    copyright: 'The Cape',
    columns: [
      {
        title: 'Explore',
        links: [
          { label: 'Home', href: '/' },
          { label: 'Menu', href: '/menu' },
          { label: 'Events', href: '/events' },
        ],
      },
      {
        title: 'Opening Hours',
        links: [
          { label: 'Mon - Sat: 8am - 4pm', href: '#' },
          { label: 'Sunday: 9.30am - 3pm', href: '#' },
        ],
      },
    ],
    social: {
      instagram: 'https://www.instagram.com/thecapebeaconsfield',
      facebook: 'https://www.facebook.com/thecapebeaconsfield',
    },
    location: {
      name: 'Beaconsfield',
      address: '6A Burkes Parade',
      town: 'Beaconsfield',
      postcode: 'HP9 1NN',
    },
    contact: {
      email: 'info@thecapebeaconsfield.co.uk',
      phone: '01494 681137',
    },
  },

  hero: {
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1920&q=80',
    imageAlt: 'The Cape café interior',
    heading: {
      line1: 'for the love of',
      line2: 'FOOD',
      line3: 'WINE &',
      line4: 'COFFEE',
    },
  },

  welcome: {
    heading: 'Welcome to The Cape',
    content: `The Cape restaurant has been in the heart of Beaconsfield New Town for over 19 years.

Your 'local' that welcomes you through the door offering a respite from day to day, serving breakfasts, lunches & homebaked treats.

On Friday and Saturday night, The Cape puts on her little black dress, serves up some gin cocktails & a delicious seasonal dinner menu.

We cook to order - fresh, comforting & honest fare with a South African twist in honour of our roots.`,
    ctaText: 'Make a Booking',
    ctaHref: 'https://book.mysimpleerb.com/1019/the-cape-restaurant/?__type=text&__target=nw',
  },

  contact: {
    address: {
      line1: '6A Burkes Parade',
      line2: 'Beaconsfield',
      postcode: 'HP9 1NN',
    },
    phone: '01494 681137',
    mapUrl: 'https://maps.google.com/?q=6A+Burkes+Parade+Beaconsfield+HP9+1NN',
    hours: [
      { days: 'Monday - Saturday', time: '8am - 4pm' },
      { days: 'Sunday', time: '9.30am - 3pm' },
    ],
    groupNote: 'For groups over 8, events and private hire, please get in touch',
  },

  gallery: {
    heading: 'From Our Kitchen',
    items: [
      { image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&q=80', caption: 'Koeksisters - the real thing!' },
      { image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&q=80', caption: 'Decadent dessert board' },
      { image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80', caption: 'Breaking bread' },
      { image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80', caption: 'Seriously delicious burger' },
      { image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600&q=80', caption: 'Famous Carrot Cake' },
      { image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=600&q=80', caption: 'Gluten Free sweetness' },
      { image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80', caption: 'Bobotie the old fashioned way' },
      { image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80', caption: 'Gooey Chocolate Brownies' },
    ],
  },

  menuPreview: {
    heading: 'Our Menu',
    intro: 'Fresh, comforting & honest fare with a South African twist. From hearty breakfasts to delicious lunches, there\'s something for everyone.',
    buttons: [
      { text: 'Dine-In Menu', href: '/menu?tab=dine-in' },
      { text: 'Takeaway Menu', href: '/menu?tab=takeaway' },
    ],
  },

  catering: {
    heading: 'Catering & Takeaway',
    content: 'We are catering for outside events if you are in need of any yummy treats! Keep an eye on our Facebook and Instagram for updates.',
    ctaText: 'Get in Touch',
    ctaHref: 'tel:01494681137',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80',
    imageAlt: 'Catering boards and platters',
  },

  events: {
    heroTitle: 'Events',
    heroSubtitle: "What's happening at The Cape",
    upcomingTitle: 'Coming Up',
    noEventsMessage: 'Check back soon for upcoming events, or follow us on social media for announcements',
    upcoming: [
      {
        title: 'Friday Night Supper Club',
        description: 'Join us for an evening of delicious South African-inspired cuisine, gin cocktails, and great company.',
        date: 'Every Friday',
        time: 'From 6pm',
        ctaText: 'Book Now',
        ctaHref: 'tel:01494681137',
      },
      {
        title: 'Wine Tasting Evening',
        description: 'Discover exceptional South African wines paired with specially crafted dishes.',
        date: 'Coming Soon',
        time: 'TBC',
        ctaText: 'Learn More',
        ctaHref: 'tel:01494681137',
      },
    ],
    pastTitle: 'Previous Events',
    pastEvents: [
      { image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80', caption: 'Wine Tasting Night' },
      { image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80', caption: 'Supper Club Evening' },
      { image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80', caption: 'Private Celebration' },
    ],
    privateHire: {
      heading: 'Host Your Event With Us',
      content: "Looking to book The Cape for a private function? We'd love to help make your event special. Get in touch to discuss options.",
      ctaText: 'Enquire Now',
      ctaHref: 'tel:01494681137',
    },
    socialCta: {
      text: 'Want to stay updated? Follow us on Instagram and Facebook',
    },
  },

  menu: {
    heading: 'Our Menu',
    subheading: 'Fresh, comforting & honest fare with a South African twist',
    tabs: ['Dine-In', 'Takeaway'],
    dineIn: {
      note: 'Kitchen open 8am-3pm Monday-Saturday and 9.30am-2.30pm on Sunday (Bank Holiday hours may differ)',
      sections: [
        {
          title: 'Light Breakfast',
          subtitle: 'Served until 12pm Mon-Fri / All day Sat+Sun',
          items: [
            { name: 'Cape Kitchen Granola', description: 'with yoghurt, berry compote and drizzled with honey' },
            { name: 'Bowl of Porridge', description: 'creamy oats with a choice of toasted almonds / berry compote / honey or banana' },
            { name: 'Eggs on Toast', description: '2 poached, fried or scrambled eggs on choice of buttered toast' },
            { name: 'French Toast', description: 'with homemade berry compote, Greek yoghurt and honey' },
          ],
        },
        {
          title: 'Signature Breakfasts',
          subtitle: 'Served until 12pm Mon-Fri / All day Sat+Sun',
          items: [
            { name: 'Cape Town', description: 'Cape seed toast with rocket, tomatoes and bacon with either scrambled or poached eggs' },
            { name: 'Farmers Breakfast', description: 'boerewors, bacon, mushroom, tomato, fried banana, 2 eggs of your choice and toast' },
            { name: 'Greyton', description: '2 slices of cape seed bread with mashed avocado (Add 2 poached eggs)' },
            { name: 'Mandela', description: 'potato rosti with 2 poached eggs and a rasher of bacon with chorizo and tomatoes' },
            { name: 'Elgin', description: 'potato rosti, sliced avocado, rocket, smoked salmon and poached eggs' },
            { name: 'The V (Vegetarian)', description: 'potato rosti, spinach, mushroom, tomatoes and avocado with baked beans' },
            { name: 'The Royale', description: 'smoked salmon / spinach / ham or bacon - toasted cape seed or sourdough, poached eggs, hollandaise' },
          ],
        },
        {
          title: 'All Day Breakfast',
          items: [
            { name: 'Sausage Sandwich', description: 'three grilled Cumberland sausages between 2 slices of farmhouse granary or white bread (Add a fried egg)' },
            { name: 'Bacon Sandwich', description: 'three slices of grilled bacon between 2 slices of farmhouse granary or white bread (Add a fried egg)' },
            { name: 'BIG 5', description: 'scrambled or fried eggs, tomatoes, mushroom, Cumberland sausage, bacon and toast (Add baked beans / Add rosti)' },
            { name: 'Three Egg Omelette', description: 'ham and cheese or spinach, cheese and mushroom (Add toast or add chips)' },
          ],
        },
        {
          title: 'Roosterbrood',
          subtitle: 'South African fire cooked roll',
          items: [
            { name: 'Cumberland Sausage', description: 'caramelised red onion chutney, cheese, wholegrain mustard and mayo' },
            { name: 'Smoked Salmon', description: 'dill crème fraiche, avocado and rocket' },
          ],
        },
        {
          title: 'Cape Salad Bar',
          subtitle: 'Available Mon-Fri',
          items: [
            { name: 'Pick 1 main and up to 3 salads', description: 'or pick up to 4 salads' },
            { name: 'Homemade soup', description: 'served with cape seed bread' },
          ],
        },
        {
          title: 'Closed Sandwiches',
          items: [
            { name: 'Cape Malay chicken and banana chutney', description: '' },
            { name: 'Tuna mayo with spring onion', description: '' },
            { name: 'Free range egg mayo and rocket', description: '' },
            { name: 'Bacon, lettuce and tomato', description: '' },
          ],
        },
        {
          title: 'Open Sandwiches',
          subtitle: 'Cape seed / sourdough / white / brown / gluten-free / wraps',
          items: [
            { name: 'Chargrilled Chicken', description: 'avocado, tomato, coriander and lime dressing, spiced Malay chutney' },
            { name: 'Chargrilled Chicken Caesar', description: 'with bacon, avocado, cos and parmesan' },
            { name: 'Prawn Marie Rose', description: 'with cos, avocado, coriander and ground black pepper' },
            { name: 'Scottish Smoked Salmon', description: 'with avocado, cucumber and dill crème fraiche' },
            { name: 'Open Vegan', description: 'cape seed bread with avocado, rocket, chargrilled vegetables and hummus' },
          ],
        },
        {
          title: 'Toasted Sandwiches',
          subtitle: 'Sourdough / brown / white',
          items: [
            { name: 'Cheese and red onion / Cheese and tomato', description: '' },
            { name: 'Cheese and ham', description: '' },
            { name: 'Tuna, cheese and red onion', description: '' },
            { name: 'Chicken mayo, red onion, bacon & mozzarella', description: '' },
            { name: 'Mushroom, spinach, red onion and cheese', description: '' },
            { name: 'Reuben', description: 'salt beef, cheese, pickled cabbage and mayo' },
            { name: 'Buffalo mozzarella, tomato and basil', description: '' },
            { name: 'Add-ons', description: 'Add chips / Add sweet potato fries / Add mini house salad' },
          ],
        },
        {
          title: 'From the Chargrill',
          items: [
            { name: 'Beef Burger', description: 'Homemade 8oz Aberdeen Angus beef burger served in a seeded bun, mayo, tomato, red onion, gherkin and chips (Add cheese and/or bacon)' },
            { name: 'Skinny Burger', description: 'no bun, large mixed salad with feta, onion, olives, pumpkin seeds and avocado (Add cheese and/or bacon)' },
            { name: 'Boerewors Burger', description: 'boerewors served in a seeded bun with homemade chakalaka, mayonnaise and chips' },
            { name: 'Cape Triple Decker Vegan Club', description: 'sweet potato and black bean, avocado, spiced aioli, chakalaka, cos' },
            { name: 'Cape Classic Triple Decker Club', description: 'chicken, tomato, bacon, egg, mayo and mixed leaves' },
            { name: 'Steak Roosterbrood', description: 'with mayo, red onion chutney, rocket, tomato and chips' },
          ],
        },
        {
          title: 'Salads',
          items: [
            { name: 'House Salad', description: 'mixed leaves, avocado, feta, red onion, chargrilled veg, olives, toasted pumpkin seeds and house dressing' },
            { name: 'Caesar', description: 'cos lettuce, warm chargrilled chicken breast, egg, homemade croutons, parmesan shavings and Caesar dressing' },
            { name: 'Goats', description: 'mixed leaves, warmed chargrilled vegetables and goat\'s cheese with house dressing' },
            { name: 'Malay', description: 'tempura king prawns, avocado, spring onions, mixed leaves, mango and corn salsa with coriander and a mild chilli dressing' },
            { name: 'South Easter', description: 'warm teriyaki chicken breast with noodles, mixed leaves, shredded carrot, ginger, coriander and toasted sesame seeds' },
          ],
        },
        {
          title: 'Coffee',
          items: [
            { name: 'Americano, Cappuccino, Latte', description: '' },
            { name: 'Espresso, Double Espresso', description: '' },
            { name: 'Macchiato (single/double), Cortado', description: '' },
            { name: 'Mocha, Flat White, Cafetiere', description: '' },
            { name: 'Add syrups', description: '' },
          ],
        },
        {
          title: 'Teas',
          subtitle: 'All loose leaf',
          items: [
            { name: 'Breakfast, Earl Grey, Moroccan Mint', description: '' },
            { name: 'Lemon and Ginger, Green, Berry Punch, Rooibos', description: '' },
            { name: 'Tea bags: Camomile, Assam', description: '' },
            { name: 'Hot water and Lemon', description: '' },
          ],
        },
        {
          title: 'Hot Chocolate',
          items: [
            { name: 'Luxury Melt', description: 'milk, dark or white' },
            { name: 'Cadburys', description: '' },
            { name: 'Add cream / Add marshmallows', description: '' },
          ],
        },
        {
          title: 'Smoothies & Shakes',
          items: [
            { name: 'Fruit or veggie smoothies', description: 'ask the team for daily flavours' },
            { name: 'Shakes', description: 'Vanilla, strawberry, chocolate, peanut butter or banoffee (served with cream and toppings)' },
          ],
        },
        {
          title: 'Cold Drinks',
          items: [
            { name: 'Still / Sparkling water (small/large)', description: '' },
            { name: 'Freshly squeezed OJ', description: '' },
            { name: 'Cloudy organic apple', description: '' },
            { name: 'Cranberry / Tropical', description: '' },
            { name: 'Elderflower or Ginger Beer', description: '' },
            { name: 'Coke / Diet Coke / 7 Up', description: '' },
            { name: 'San Pellegrino (lemon or blood orange)', description: '' },
            { name: 'Tonic / Soda', description: '' },
          ],
        },
        {
          title: 'Beers, Booze & Bubbles',
          items: [
            { name: 'Mimosa, Bloody Mary', description: '' },
            { name: 'Rebellion Lager / Blonde', description: '' },
            { name: 'Becks Blue', description: '' },
            { name: 'Sxollie Cider', description: '' },
            { name: 'House White (175ml or bottle)', description: '' },
            { name: 'House Red (175ml or bottle)', description: '' },
            { name: 'Prosecco (glass or bottle)', description: '' },
          ],
        },
      ],
      cakesNote: 'Cakes, scones, pastries and sweet treats - all available from our bar. Please just ask the team!',
      allergenNote: 'Please advise your waiting staff of any allergies or food intolerances prior to ordering. Menu items may contain trace levels of allergens due to the way products are prepared.',
    },
    takeaway: {
      note: 'Allow 10-20 minutes for all orders',
      sections: [
        {
          title: 'Daily Deli',
          items: [
            { name: 'Meat/Fish and Salad', description: '' },
            { name: 'Meat/Fish Only', description: '' },
            { name: 'Quiche Only', description: '' },
            { name: '2 Salad Box', description: '' },
            { name: '3 Salad Box', description: '' },
            { name: 'Daily Soup and Homemade Bread', description: '' },
          ],
        },
        {
          title: 'Salads',
          items: [
            { name: 'Goats Cheese Salad with Med Veggies', description: '' },
            { name: 'House Salad with Feta', description: '' },
            { name: 'Caesar Salad with Egg and Chicken', description: '' },
          ],
        },
        {
          title: 'Roosterbrood',
          items: [
            { name: 'Cumberland Sausage Roosterbrood', description: '' },
            { name: 'Smoked Salmon Roosterbrood', description: '' },
            { name: 'Steak Roosterbrood with Chips', description: '' },
          ],
        },
        {
          title: 'Burgers',
          items: [
            { name: 'Homemade Beef Burger with Chips', description: '' },
            { name: 'Boerewors Burger with Chips', description: '' },
          ],
        },
        {
          title: 'Sandwiches',
          items: [
            { name: 'Tuna Mayo with Spring Onion', description: '' },
            { name: 'Egg Mayo with Rocket', description: '' },
            { name: 'BLT', description: '' },
            { name: 'Cape Malay Chicken and Banana Chutney', description: '' },
            { name: 'Chargrilled Chicken', description: 'with Avocado, Tomato, Coriander, Malay Chutney and Mayo' },
            { name: 'Smoked Salmon', description: 'Cucumber, Avocado, Dill Crème Fraiche, Lettuce' },
            { name: 'Open Hummus', description: 'Med Veggies, Avocado, Lettuce' },
            { name: 'Prawn Marie Rose', description: 'with Cos, Avocado, Coriander' },
            { name: 'Chargrilled Chicken Caesar', description: 'with Avocado, Bacon, Cos, Parmesan and Caesar Dressing' },
          ],
        },
        {
          title: 'Toasties',
          items: [
            { name: 'Ham and Cheese', description: '' },
            { name: 'Cheese and Tomato', description: '' },
            { name: 'Cheese and Red Onion', description: '' },
            { name: 'Chicken Mayo, Red Onion, Bacon and Cheese', description: '' },
            { name: 'Tuna Mayo, Red Onion, Cheese', description: '' },
            { name: 'Mushroom, Red Onion, Spinach and Cheese', description: '' },
            { name: 'Reuben with Pickles', description: '' },
            { name: 'Mozzarella, Tomato, Basil', description: '' },
            { name: 'Cape Classic Club Sandwich', description: '' },
            { name: 'Cape Vegan Classic Club', description: '' },
            { name: 'Add-ons', description: 'Add chips or sweet potato fries' },
          ],
        },
        {
          title: 'Cakes & Treats',
          items: [
            { name: 'Cake, Scone', description: '' },
            { name: 'White Chocolate or Chocolate Cookie', description: '' },
            { name: 'Flapjack / Brownie', description: '' },
            { name: 'Love Cake', description: '' },
            { name: 'Vegan Chocolate Cake', description: '' },
            { name: 'Carrot Cake', description: '' },
            { name: 'Chocolate Pastry Cake', description: '' },
            { name: 'Wheat Free Orange Polenta Cake', description: '' },
          ],
        },
        {
          title: 'Hot Drinks',
          items: [
            { name: 'Single Espresso, Double Espresso', description: '' },
            { name: 'Americano, Cappuccino/Latte, Mocha', description: '' },
            { name: 'Chai Latte', description: '' },
            { name: 'Cadburys Hot Chocolate, Hot Chocolate Melt', description: '' },
            { name: 'Tea', description: '' },
            { name: 'Add-ons', description: 'Extra shot / Add syrup / Add cream' },
            { name: 'Alternatives', description: 'Decaf / Soya / Almond / Oat / Coconut available' },
          ],
        },
        {
          title: 'Cold Drinks',
          items: [
            { name: 'Daily Smoothies', description: '' },
            { name: 'Daily Milkshakes', description: '' },
            { name: 'Fresh OJ', description: '' },
            { name: 'Selection of Soft Drinks', description: '' },
            { name: 'Fanta Grape and Cream Soda', description: '' },
          ],
        },
      ],
      footerNote: 'For any large takeaway orders or sample menus for catering functions please call the team directly on 01494 681137',
    },
  },

  testimonials: {
    heading: 'What Our Customers Say',
    entries: [
      {
        quote: 'The best brunch spot in Beaconsfield! The South African touches make it so unique. Love the boerewors burger!',
        name: 'Sarah M.',
        location: 'Beaconsfield',
      },
      {
        quote: 'We\'ve been coming to The Cape for years. It truly feels like our local - warm, welcoming, and the food is always delicious.',
        name: 'The Johnson Family',
        location: 'Beaconsfield',
      },
      {
        quote: 'Friday night supper club is a hidden gem. Amazing food, great wine, lovely atmosphere. Can\'t recommend it enough!',
        name: 'David & Emma',
        location: 'Gerrards Cross',
      },
    ],
  },
};
