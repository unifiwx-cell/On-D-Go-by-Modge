/**
 * Brand data and menu items for ON D GO BY MODGE
 * Indo Japan House, Sector V, Bidhannagar, Kolkata
 */

import heroImg from '../assets/images/hero_dessert_modge_1791274014514.jpg';
import matildaImg from '../assets/images/matilda_chocolate_cake_1791274033654.jpg';
import cheesecakeImg from '../assets/images/cheesecake_showcase_1791274049552.jpg';
import koreanBunImg from '../assets/images/korean_cheese_bun_1791274065570.jpg';
import coffeeImg from '../assets/images/specialty_coffee_steam_1791274081284.jpg';

export const MODGE_IMAGES = {
  hero: heroImg,
  matilda: matildaImg,
  cheesecake: cheesecakeImg,
  koreanBun: koreanBunImg,
  coffee: coffeeImg,
};

export interface DessertItem {
  id: string;
  number: string;
  name: string;
  bengaliName?: string;
  subtitle: string;
  description: string;
  price: number;
  category: string;
  dietary: ('Vegetarian' | 'Gluten-Free' | 'Sugar-Free' | 'Signature')[];
  image: string;
  notes: string;
  pairWith: string;
}

export interface DrinkItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  temperature: 'Hot' | 'Iced';
  bestPairingId: string;
  tastingNotes: string[];
}

export interface ReviewItem {
  id: string;
  author: string;
  theme: string;
  rating: number;
  timeAgo: string;
  quote: string;
  highlightDish: string;
}

export const BRAND_INFO = {
  name: 'On D Go by Modge',
  bengaliName: 'অন ডি গো বাই মধ্যে',
  shortName: 'MODGE',
  tagline: 'SWEET THINGS TAKE TIME.',
  subTagline: 'COFFEE · DESSERTS · GOOD MOODS',
  rating: 4.6,
  reviewsCount: 241,
  priceRange: '₹200–₹400 per person',
  location: {
    building: 'Indo Japan House, 1/12, EP Block',
    area: 'Sector V, Bidhannagar',
    city: 'Kolkata, West Bengal 700091',
    floor: 'Floor 0 · Indo Japan Horological Pvt Ltd',
    mapsUrl: 'https://maps.google.com/?q=Indo+Japan+House+EP+Block+Sector+V+Bidhannagar+Kolkata',
  },
  phone: '090739 56262',
  phoneClean: '+919073956262',
  hours: 'Open daily · Closes 10:00 PM',
  services: ['Dine-in', 'Takeaway', 'Table reservation', 'Custom Celebration Cakes'],
};

// Verified signature items from customer reviews and brief
export const SIGNATURE_DESSERTS: DessertItem[] = [
  {
    id: 'tiramisu',
    number: '01',
    name: 'Artisanal Tiramisu',
    bengaliName: 'টিরামিসু',
    subtitle: 'Rich, creamy and indulgent',
    description: 'Savoiardi ladyfingers steeped in freshly pulled Modge espresso, layered with velvety whipped mascarpone cream and generous Valrhona cocoa dust.',
    price: 280,
    category: 'Signature Classics',
    dietary: ['Vegetarian', 'Signature'],
    image: heroImg,
    notes: 'Espresso soak · Italian Mascarpone · Valrhona cocoa',
    pairWith: 'Modge Cortado or Single Origin Americano',
  },
  {
    id: 'matilda-cake',
    number: '02',
    name: 'The Matilda Cake',
    bengaliName: 'মাটিল্ডা কেক',
    subtitle: 'A dramatic chocolate-forward signature',
    description: 'Towering multi-layered dark chocolate sponge soaked with chocolate syrup and enveloped in molten 70% dark chocolate fudge ganache. Pure chocolate indulgence without apologies.',
    price: 340,
    category: 'Signature Cakes',
    dietary: ['Vegetarian', 'Signature'],
    image: matildaImg,
    notes: '70% Dark Ganache · Triple Layer Sponge · Glossy Pour',
    pairWith: 'Flat White or Cold Brew Tonic',
  },
  {
    id: 'nutella-cheesecake',
    number: '03',
    name: 'Nutella Cheesecake',
    bengaliName: 'নুটেলা চিজকেক',
    subtitle: 'Creamy cheesecake with rich hazelnut depth',
    description: 'Ultra-silky Philadelphia cream cheese base infused with roasted hazelnut butter, set atop a buttery biscuit crust and finished with warm Nutella swirl.',
    price: 320,
    category: 'Cheesecakes',
    dietary: ['Vegetarian', 'Signature'],
    image: cheesecakeImg,
    notes: 'Hazelnut Printe · Philly Cream Cheese · Swirled Ganache',
    pairWith: 'Pour-Over Coffee or Artisanal Cappuccino',
  },
  {
    id: 'korean-cheese-bun',
    number: '04',
    name: 'Korean Cream Cheese Bun',
    bengaliName: 'কোরিয়ান চিজ বান',
    subtitle: 'A customer-favorite savory-sweet pastry',
    description: 'Freshly baked brioche bun scored into petal segments, loaded with sweet garlic-infused cream cheese and toasted golden with herb butter.',
    price: 240,
    category: 'Savory & Buns',
    dietary: ['Vegetarian', 'Signature'],
    image: koreanBunImg,
    notes: 'Garlic Butter Crust · Sweet Cream Cheese · Warm Brioche',
    pairWith: 'Iced Americano or Ceremonial Uji Matcha',
  },
  {
    id: 'tea-cake',
    number: '05',
    name: 'Spiced Vanilla Tea Cake',
    bengaliName: 'টি কেক',
    subtitle: 'Simple, comforting and perfect with coffee',
    description: 'Moist golden loaf infused with Madagascar vanilla bean, toasted almonds, and subtle cardamom notes. The classic Kolkata afternoon companion.',
    price: 210,
    category: 'Daily Bakes',
    dietary: ['Vegetarian'],
    image: koreanBunImg,
    notes: 'Madagascar Vanilla · Sliced Almonds · Warm Crumb',
    pairWith: 'First Flush Darjeeling Tea or Latte',
  },
  {
    id: 'brownies',
    number: '06',
    name: 'Fudgy Dark Chocolate Brownie',
    bengaliName: 'চকোলেট ব্রাউনি',
    subtitle: 'Dense, chocolatey and deeply comforting',
    description: 'Baked to that elusive crackly-top fudgy perfection using Belgian dark chocolate chunks and sea salt flakes. Served warm on request.',
    price: 220,
    category: 'Brownies & Bars',
    dietary: ['Vegetarian', 'Gluten-Free'],
    image: matildaImg,
    notes: 'Belgian Chunks · Flaky Maldon Salt · Fudgy Center',
    pairWith: 'Modge Signature Cappuccino',
  },
];

// Additional menu items for the full menu experience
export const ALL_MENU_ITEMS: DessertItem[] = [
  ...SIGNATURE_DESSERTS,
  {
    id: 'blueberry-cheesecake',
    number: '07',
    name: 'Wild Blueberry Compote Cheesecake',
    bengaliName: 'ব্লুবেরি চিজকেক',
    subtitle: 'Tangy wild blueberries over slow-baked cream cheese',
    description: 'House-made wild blueberry compote with natural citrus zest, layered over a slow-baked New York style cream cheese foundation.',
    price: 330,
    category: 'Cheesecakes',
    dietary: ['Vegetarian'],
    image: cheesecakeImg,
    notes: 'Wild Mountain Berries · Graham Base · Citrus Zest',
    pairWith: 'Aeropress Light Roast or Earl Grey',
  },
  {
    id: 'biscoff-cheesecake',
    number: '08',
    name: 'Lotus Biscoff Speculoos Cheesecake',
    bengaliName: 'বিসকফ চিজকেক',
    subtitle: 'Spiced caramel biscuit indulgence',
    description: 'Caramelized speculoos crumb base with melted Biscoff cream infusion, topped with melted cookie butter spread and crunchy biscuit pieces.',
    price: 330,
    category: 'Cheesecakes',
    dietary: ['Vegetarian'],
    image: cheesecakeImg,
    notes: 'Speculoos Cookie Butter · Caramel Notes · Crunchy Finish',
    pairWith: 'Cortado or Double Espresso',
  },
  {
    id: 'sugarfree-chocolate-mousse',
    number: '09',
    name: 'Sugar-Free Dark Chocolate Pot',
    bengaliName: 'সুগার-ফ্রি চকোলেট মুজ',
    subtitle: 'Guilt-free decadence for mindful cravings',
    description: 'Whipped organic 75% dark chocolate pot sweetened naturally with monk fruit, topped with freeze-dried raspberries and raw cacao nibs.',
    price: 290,
    category: 'Mindful Desserts',
    dietary: ['Vegetarian', 'Sugar-Free', 'Gluten-Free'],
    image: matildaImg,
    notes: 'Monk Fruit Sweetened · 75% Single Origin · Raspberry Dust',
    pairWith: 'Americano or Chamomile Herbal Tea',
  },
];

export const SPECIALTY_DRINKS: DrinkItem[] = [
  {
    id: 'cappuccino',
    name: 'Modge Velvet Cappuccino',
    description: 'Double shot of our medium-dark house roast with microfoam textured to glossy silk, dusted with single-origin cocoa.',
    price: 210,
    category: 'Espresso Bar',
    temperature: 'Hot',
    bestPairingId: 'nutella-cheesecake',
    tastingNotes: ['Toasted hazelnut', 'Brown sugar', 'Velvety microfoam'],
  },
  {
    id: 'cortado',
    name: 'Artisan Cortado',
    description: 'Equal parts vibrant espresso and steamed whole milk, balanced in a 4.5oz glass for purists who love the coffee character.',
    price: 190,
    category: 'Espresso Bar',
    temperature: 'Hot',
    bestPairingId: 'tiramisu',
    tastingNotes: ['Dark cocoa', 'Roasted caramel', 'Balanced acidity'],
  },
  {
    id: 'pourover',
    name: 'Single Origin Pour Over',
    description: 'Carefully brewed via V60 using seasonal specialty Indian Arabica beans (Chikmagalur / Araku Valley), revealing floral clarity.',
    price: 240,
    category: 'Slow Brew Bar',
    temperature: 'Hot',
    bestPairingId: 'tea-cake',
    tastingNotes: ['Stone fruit', 'Jasmine bloom', 'Clean honey finish'],
  },
  {
    id: 'espresso-tonic',
    name: 'Espresso Tonic & Citrus',
    description: 'Chilled artisanal tonic water poured over ice, crowned with a floating shot of espresso and expressed orange peel.',
    price: 250,
    category: 'Cold Brew & Signatures',
    temperature: 'Iced',
    bestPairingId: 'matilda-cake',
    tastingNotes: ['Bright citrus', 'Quinine sparkle', 'Coffee cream'],
  },
  {
    id: 'matcha-latte',
    name: 'Ceremonial Uji Matcha Latte',
    description: 'Stone-ground first harvest Japanese green tea whisked by hand with silky warm oat or dairy milk.',
    price: 260,
    category: 'Botanical & Teas',
    temperature: 'Hot',
    bestPairingId: 'korean-cheese-bun',
    tastingNotes: ['Sweet umami', 'Fresh grassy notes', 'Creamy texture'],
  },
  {
    id: 'darjeeling-tea',
    name: 'First Flush Makaibari Tea',
    description: 'Whole leaf Darjeeling tea steeped precisely to preserve delicate muscatel grape character and amber clarity.',
    price: 180,
    category: 'Botanical & Teas',
    temperature: 'Hot',
    bestPairingId: 'tea-cake',
    tastingNotes: ['Muscatel grapes', 'Fresh floral bouquet', 'Crisp finish'],
  },
];

export const PAIRING_RULES = [
  {
    drinkId: 'cappuccino',
    drinkName: 'Velvet Cappuccino',
    dessertId: 'nutella-cheesecake',
    dessertName: 'Nutella Cheesecake',
    reason: 'The microfoam texture softens the rich hazelnut ganache, creating a harmonious cafe morning balance.',
  },
  {
    drinkId: 'cortado',
    drinkName: 'Artisan Cortado',
    dessertId: 'brownies',
    dessertName: 'Fudgy Brownie',
    reason: 'The concentrated espresso cut cuts straight through the dense Belgian dark chocolate fudge.',
  },
  {
    drinkId: 'pourover',
    drinkName: 'Single Origin Pour Over',
    dessertId: 'tea-cake',
    dessertName: 'Spiced Tea Cake',
    reason: 'Delicate floral acidity in the V60 allows the warm vanilla and cardamom aromatics of the tea cake to shine.',
  },
  {
    drinkId: 'espresso-tonic',
    drinkName: 'Espresso Tonic & Citrus',
    dessertId: 'matilda-cake',
    dessertName: 'The Matilda Cake',
    reason: 'The effervescent tonic and bright citrus cut cleanly across the heavy, glossy chocolate ganache.',
  },
  {
    drinkId: 'matcha-latte',
    drinkName: 'Ceremonial Matcha Latte',
    dessertId: 'korean-cheese-bun',
    dessertName: 'Korean Cheese Bun',
    reason: 'The earthy umami of Kyoto green tea contrasts deliciously against sweet garlic cream and toasted butter.',
  },
  {
    drinkId: 'darjeeling-tea',
    drinkName: 'Makaibari Darjeeling Tea',
    dessertId: 'tiramisu',
    dessertName: 'Artisanal Tiramisu',
    reason: 'A classic light afternoon contrast that leaves the palate clean after rich whipped mascarpone.',
  },
];

export const REVIEWS_LIST: ReviewItem[] = [
  {
    id: 'r1',
    author: 'Ananya S.',
    theme: 'Cheesecake Heaven in Sector V',
    rating: 5,
    timeAgo: 'Recently',
    quote: 'Ordered the customized blueberry cheesecake for my sister’s birthday and it was divine. Not overly sweet, beautifully decorated, and everyone in our IT office went crazy for it.',
    highlightDish: 'Blueberry Cheesecake',
  },
  {
    id: 'r2',
    author: 'Debanjan M.',
    theme: 'The Matilda Cake is Ridiculous',
    rating: 5,
    timeAgo: '2 weeks ago',
    quote: 'If you love chocolate, this is the Holy Grail in Bidhannagar. Thick, rich, warm ganache dripping down. The coffee is serious too — proper espresso with thick crema.',
    highlightDish: 'Matilda Cake',
  },
  {
    id: 'r3',
    author: 'Rhea B.',
    theme: 'Korean Cheese Bun & Tiramisu',
    rating: 5,
    timeAgo: '1 month ago',
    quote: 'The Korean garlic cheese bun is pure comfort food. Golden crust outside, warm sweet cheese inside. Paired with their tiramisu and a cold brew, it’s my weekly ritual.',
    highlightDish: 'Korean Cheese Bun',
  },
  {
    id: 'r4',
    author: 'Siddharth K.',
    theme: 'Cozy Atmosphere in Indo Japan House',
    rating: 4.5,
    timeAgo: '3 weeks ago',
    quote: 'Tucked quietly in Indo Japan House away from the Sector V traffic. Peaceful corner with great music, warm lighting, and polite staff who explain each dessert carefully.',
    highlightDish: 'Specialty Coffee & Bakes',
  },
];

export const ATMOSPHERE_MOMENTS = [
  {
    title: 'COFFEE BREAK',
    subtitle: '11:00 AM — 01:00 PM',
    description: 'A quiet pause from Sector V work meetings with a single-origin pour-over and freshly sliced tea cake.',
    tag: 'Mid-Morning Sanctuary',
  },
  {
    title: 'DESSERT DATE',
    subtitle: '04:00 PM — 07:00 PM',
    description: 'Sharing a Matilda slice and tiramisu under warm amber pendant lamps while the evening sets in.',
    tag: 'Sweet Afternoons',
  },
  {
    title: 'AFTER WORK',
    subtitle: '07:30 PM — 10:00 PM',
    description: 'Unwinding after long hours with savory Korean buns, warm dessert pots, and good conversation.',
    tag: 'Evening Unwind',
  },
  {
    title: 'SLOW AFTERNOON',
    subtitle: 'Anytime you need stillness',
    description: 'A cozy corner table, your favorite book, and a ceramic cup of slow-poured velvety cappuccino.',
    tag: 'Unrushed Hours',
  },
];
