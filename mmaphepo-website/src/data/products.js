// Product data extracted from the reference homepage, grouped by category and subcategory
const products = [
  // Chain
  {
    id: 1,
    name: "X Series BS Roller Chain 64B-3 Rivet Link",
    category: "Chain",
    subcategory: "Roller Chain",
    image: "https://challengeptmedia.b-cdn.net/catalog/product/cache/7e4c0598f62cd972eb8388ae445facd1/0/1/01-v-rbc-64b-3xrl-chain-roller_chain-british_standard_roller_chain-1_4.jpg",
    price: "Price on Request"
  },
  {
    id: 2,
    name: "X Series BS Roller Chain 64B-3 Offset Link",
    category: "Chain",
    subcategory: "Roller Chain",
    image: "https://challengeptmedia.b-cdn.net/catalog/product/cache/7e4c0598f62cd972eb8388ae445facd1/0/1/01-v-rbc-64b-3l-chain-roller_chain-british_standard_roller_chain-1_3.jpg",
    price: "Price on Request"
  },
  {
    id: 3,
    name: "X Series BS Roller Chain 64B-3 Cotter Pin Connecting Link",
    category: "Chain",
    subcategory: "Roller Chain",
    image: "https://challengeptmedia.b-cdn.net/catalog/product/cache/7e4c0598f62cd972eb8388ae445facd1/0/1/01-v-rbc-64b-3xs-chain-roller_chain-british_standard_roller_chain-1_4.jpg",
    price: "Price on Request"
  },
  {
    id: 4,
    name: "X Series BS Roller Chain 64B-3",
    category: "Chain",
    subcategory: "Roller Chain",
    image: "https://challengeptmedia.b-cdn.net/catalog/product/cache/7e4c0598f62cd972eb8388ae445facd1/0/1/01-v-rbc-64b-3x-chain-roller_chain-british_standard_roller_chain-1_4.jpg",
    price: "Price on Request"
  },
  {
    id: 5,
    name: "X Series BS Roller Chain 56B-3 Rivet Link",
    category: "Chain",
    subcategory: "Roller Chain",
    image: "https://challengeptmedia.b-cdn.net/catalog/product/cache/7e4c0598f62cd972eb8388ae445facd1/0/1/01-v-rbc-56b-3xrl-chain-roller_chain-british_standard_roller_chain-1_4.jpg",
    price: "Price on Request"
  },
  {
    id: 6,
    name: "X Series BS Roller Chain 56B-3 Offset Link",
    category: "Chain",
    subcategory: "Roller Chain",
    image: "https://challengeptmedia.b-cdn.net/catalog/product/cache/7e4c0598f62cd972eb8388ae445facd1/0/1/01-v-rbc-56b-3l-chain-roller_chain-british_standard_roller_chain-1_3.jpg",
    price: "Price on Request"
  },
  // Pulleys
  {
    id: 7,
    name: "Taper Bored Pulley SPC 1250-12 (6050)",
    category: "Pulleys",
    subcategory: "V-Pulleys",
    image: "https://challengeptmedia.b-cdn.net/catalog/product/cache/7e4c0598f62cd972eb8388ae445facd1/0/1/01-tbp-spc1250x12-pulleys-v-pulleys-1_1.jpg",
    price: "Price on Request"
  },
  {
    id: 8,
    name: "Taper Bored Pulley SPC 1250-10 (5050)",
    category: "Pulleys",
    subcategory: "V-Pulleys",
    image: "https://challengeptmedia.b-cdn.net/catalog/product/cache/7e4c0598f62cd972eb8388ae445facd1/0/1/01-tbp-spc1250x10-pulleys-v-pulleys-1_1.jpg",
    price: "Price on Request"
  },
  {
    id: 9,
    name: "Taper Bored Pulley SPC 1250-8 (5050)",
    category: "Pulleys",
    subcategory: "V-Pulleys",
    image: "https://challengeptmedia.b-cdn.net/catalog/product/cache/7e4c0598f62cd972eb8388ae445facd1/0/1/01-tbp-spc1250x8-pulleys-v-pulleys-1_1.jpg",
    price: "Price on Request"
  },
  {
    id: 10,
    name: "Taper Bored Pulley SPC 1250-6 (5050)",
    category: "Pulleys",
    subcategory: "V-Pulleys",
    image: "https://challengeptmedia.b-cdn.net/catalog/product/cache/7e4c0598f62cd972eb8388ae445facd1/0/1/01-tbp-spc1250x6-pulleys-v-pulleys-1_1.jpg",
    price: "Price on Request"
  },
  {
    id: 11,
    name: "Taper Bored Pulley SPC 1250-5 (5050)",
    category: "Pulleys",
    subcategory: "V-Pulleys",
    image: "https://challengeptmedia.b-cdn.net/catalog/product/cache/7e4c0598f62cd972eb8388ae445facd1/0/1/01-tbp-spc1250x5-pulleys-v-pulleys-1_2.jpg",
    price: "Price on Request"
  },
  {
    id: 12,
    name: "Taper Bored Pulley SPC 1250-4 (5050)",
    category: "Pulleys",
    subcategory: "V-Pulleys",
    image: "https://challengeptmedia.b-cdn.net/catalog/product/cache/7e4c0598f62cd972eb8388ae445facd1/0/1/01-tbp-spc1250x4-pulleys-v-pulleys-1_2.jpg",
    price: "Price on Request"
  },
  // Shaft Couplings
  {
    id: 13,
    name: "FFX Coupling FRAS Tyre 250",
    category: "Shaft Couplings",
    subcategory: "FFX Tyre Couplings",
    image: "https://challengeptmedia.b-cdn.net/catalog/product/cache/7e4c0598f62cd972eb8388ae445facd1/0/1/01-ffx250fras-shaft_couplings-ffx_tyre_couplings-1_2.jpg",
    price: "Price on Request"
  },
  {
    id: 14,
    name: "FFX Coupling Natural Tyre 250",
    category: "Shaft Couplings",
    subcategory: "FFX Tyre Couplings",
    image: "https://challengeptmedia.b-cdn.net/catalog/product/cache/7e4c0598f62cd972eb8388ae445facd1/0/1/01-ffx250t-shaft_couplings-ffx_tyre_couplings-1_2.jpg",
    price: "Price on Request"
  },
  {
    id: 15,
    name: "FFX Tyre Coupling Flange 250H (5040)",
    category: "Shaft Couplings",
    subcategory: "FFX Tyre Couplings",
    image: "https://challengeptmedia.b-cdn.net/catalog/product/cache/7e4c0598f62cd972eb8388ae445facd1/0/1/01-ffx250h-shaft_couplings-ffx_tyre_couplings-1_1.jpg",
    price: "Price on Request"
  },
  {
    id: 16,
    name: "FFX Tyre Coupling Flange 250F (5040)",
    category: "Shaft Couplings",
    subcategory: "FFX Tyre Couplings",
    image: "https://challengeptmedia.b-cdn.net/catalog/product/cache/7e4c0598f62cd972eb8388ae445facd1/0/1/01-ffx250f-shaft_couplings-ffx_tyre_couplings-1_1.jpg",
    price: "Price on Request"
  },
  {
    id: 17,
    name: "FFX Tyre Coupling Flange 250B",
    category: "Shaft Couplings",
    subcategory: "FFX Tyre Couplings",
    image: "https://challengeptmedia.b-cdn.net/catalog/product/cache/7e4c0598f62cd972eb8388ae445facd1/0/1/01-ffx250b-shaft_couplings-ffx_tyre_couplings-1_1.jpg",
    price: "Price on Request"
  },
  {
    id: 18,
    name: "FFX Coupling FRAS Tyre 220",
    category: "Shaft Couplings",
    subcategory: "FFX Tyre Couplings",
    image: "https://challengeptmedia.b-cdn.net/catalog/product/cache/7e4c0598f62cd972eb8388ae445facd1/0/1/01-ffx220fras-shaft_couplings-ffx_tyre_couplings-1_2.jpg",
    price: "Price on Request"
  },
  // Add Sprockets products from homepage.html
  {
    id: 19,
    name: 'British Standard Taper Bore Sprockets',
    category: 'Sprockets',
    image: 'https://challengeptmedia.b-cdn.net/wysiwyg/custom_website_images/menu_drop_down/sprockets_top.jpg',
  },
  {
    id: 20,
    name: 'British Standard Pilot Bore Sprockets',
    category: 'Sprockets',
    image: 'https://challengeptmedia.b-cdn.net/wysiwyg/custom_website_images/menu_drop_down/sprockets_left.jpg',
  },
  {
    id: 21,
    name: 'British Standard Pilot Bore Plate Wheels',
    category: 'Sprockets',
    image: 'https://challengeptmedia.b-cdn.net/wysiwyg/custom_website_images/menu_drop_down/sprockets_top.jpg',
  },
  {
    id: 22,
    name: 'Taper Bore Double Simplex Sprockets',
    category: 'Sprockets',
    image: 'https://challengeptmedia.b-cdn.net/wysiwyg/custom_website_images/menu_drop_down/sprockets_left.jpg',
  },
  {
    id: 23,
    name: 'Pilot Bore Double Simplex Sprockets',
    category: 'Sprockets',
    image: 'https://challengeptmedia.b-cdn.net/wysiwyg/custom_website_images/menu_drop_down/sprockets_top.jpg',
  },
  {
    id: 24,
    name: 'Idler Sprockets',
    category: 'Sprockets',
    image: 'https://challengeptmedia.b-cdn.net/wysiwyg/custom_website_images/menu_drop_down/sprockets_left.jpg',
  },
  {
    id: 25,
    name: 'ANSI Pilot Bore Sprockets',
    category: 'Sprockets',
    image: 'https://challengeptmedia.b-cdn.net/wysiwyg/custom_website_images/menu_drop_down/sprockets_top.jpg',
  },
  // Add Belts products from homepage.html
  {
    id: 26,
    name: 'Classical V-Belts',
    category: 'Belts',
    image: 'https://challengeptmedia.b-cdn.net/catalog/product/cache/7e4c0598f62cd972eb8388ae445facd1/0/1/01-v-belt-classical-v-belts-1_1.jpg',
  },
  {
    id: 27,
    name: 'Classical CRE V-Belts',
    category: 'Belts',
    image: 'https://challengeptmedia.b-cdn.net/catalog/product/cache/7e4c0598f62cd972eb8388ae445facd1/0/1/01-v-belt-cre-v-belts-1_1.jpg',
  },
  {
    id: 28,
    name: 'Wedge Belts',
    category: 'Belts',
    image: 'https://challengeptmedia.b-cdn.net/catalog/product/cache/7e4c0598f62cd972eb8388ae445facd1/0/1/01-v-belt-wedge-belts-1_1.jpg',
  },
  {
    id: 29,
    name: 'CRE Wedge Belts',
    category: 'Belts',
    image: 'https://challengeptmedia.b-cdn.net/catalog/product/cache/7e4c0598f62cd972eb8388ae445facd1/0/1/01-v-belt-cre-wedge-belts-1_1.jpg',
  },
  {
    id: 30,
    name: 'Narrow V Belts',
    category: 'Belts',
    image: 'https://challengeptmedia.b-cdn.net/catalog/product/cache/7e4c0598f62cd972eb8388ae445facd1/0/1/01-v-belt-narrow-v-belts-1_1.jpg',
  },
  {
    id: 31,
    name: 'Classical Timing Belts',
    category: 'Belts',
    image: 'https://challengeptmedia.b-cdn.net/catalog/product/cache/7e4c0598f62cd972eb8388ae445facd1/0/1/01-timing-belt-classical-timing-belts-1_1.jpg',
  },
  {
    id: 32,
    name: 'Curved Tooth Timing Belts',
    category: 'Belts',
    image: 'https://challengeptmedia.b-cdn.net/catalog/product/cache/7e4c0598f62cd972eb8388ae445facd1/0/1/01-timing-belt-curved-tooth-timing-belts-1_1.jpg',
  },
  // Continue for all categories and subcategories as in homepage.html
  // Shaft Fixings products from homepage.html product grid
  {
    id: 33,
    name: 'Taper Bushes - Metric',
    category: 'Shaft Fixings',
    image: 'https://challengeptmedia.b-cdn.net/catalog/product/cache/7e4c0598f62cd972eb8388ae445facd1/0/1/01-taper-bush-metric-shaft_fixings-taper_bushes-1_1.jpg',
  },
  {
    id: 34,
    name: 'Taper Bushes - Imperial',
    category: 'Shaft Fixings',
    image: 'https://challengeptmedia.b-cdn.net/catalog/product/cache/7e4c0598f62cd972eb8388ae445facd1/0/1/01-taper-bush-imperial-shaft_fixings-taper_bushes-1_1.jpg',
  },
  {
    id: 35,
    name: 'Taper Bush Adaptors',
    category: 'Shaft Fixings',
    image: 'https://challengeptmedia.b-cdn.net/catalog/product/cache/7e4c0598f62cd972eb8388ae445facd1/0/1/01-taper-bush-adaptor-shaft_fixings-taper_bushes-1_1.jpg',
  },
  {
    id: 36,
    name: 'Bolt-on-Hubs',
    category: 'Shaft Fixings',
    image: 'https://challengeptmedia.b-cdn.net/catalog/product/cache/7e4c0598f62cd972eb8388ae445facd1/0/1/01-bolt-on-hub-shaft_fixings-bolt_on_hubs-1_1.jpg',
  },
  {
    id: 37,
    name: 'Weld-on-Hubs',
    category: 'Shaft Fixings',
    image: 'https://challengeptmedia.b-cdn.net/catalog/product/cache/7e4c0598f62cd972eb8388ae445facd1/0/1/01-weld-on-hub-shaft_fixings-weld_on_hubs-1_1.jpg',
  },
  {
    id: 38,
    name: 'Shaftlock Sizes 01 - 22',
    category: 'Shaft Fixings',
    image: 'https://challengeptmedia.b-cdn.net/catalog/product/cache/7e4c0598f62cd972eb8388ae445facd1/0/1/01-shaftlock-shaft_fixings-shaftlock-1_1.jpg',
  },
  {
    id: 39,
    name: 'Torque Limiters',
    category: 'Shaft Fixings',
    image: 'https://challengeptmedia.b-cdn.net/catalog/product/cache/7e4c0598f62cd972eb8388ae445facd1/0/1/01-torque-limiter-shaft_fixings-torque_limiters-1_1.jpg',
  },
  // Electric Motors
  {
    id: 40,
    name: "Motor Mounts",
    category: "Electric Motors",
    subcategory: "Motor Mounts",
    image: "/images/slide_26_img_6.png",
    price: "Price on Request"
  },
  {
    id: 41,
    name: "Three Phase Electric Motor",
    category: "Electric Motors",
    subcategory: "Three Phase",
    image: "/images/slide_26_img_3.png",
    price: "Price on Request"
  },
  // Gearboxes
  {
    id: 42,
    name: "Worm Gear Unit",
    category: "Gearboxes",
    subcategory: "Worm Gear Units",
    image: "https://challengeptmedia.b-cdn.net/wysiwyg/custom_website_images/menu_drop_down/gear_boxes_top.jpg",
    price: "Price on Request"
  },
  {
    id: 43,
    name: "SMSR Gearbox",
    category: "Gearboxes",
    subcategory: "SMSRs",
    image: "https://challengeptmedia.b-cdn.net/wysiwyg/custom_website_images/menu_drop_down/new_gear_boxes_left.jpg",
    price: "Price on Request"
  },
  // Bearings
  {
    id: 44,
    name: "Bearing Units",
    category: "Bearings",
    subcategory: "Bearing Units",
    image: "https://challengeptmedia.b-cdn.net/wysiwyg/custom_website_images/menu_drop_down/bearings_top.jpg",
    price: "Price on Request"
  },
  {
    id: 45,
    name: "Plummer Blocks",
    category: "Bearings",
    subcategory: "Plummer Blocks",
    image: "https://challengeptmedia.b-cdn.net/wysiwyg/custom_website_images/menu_drop_down/bearings_left.jpg",
    price: "Price on Request"
  },
  {
    id: 46,
    name: "Standard Bearings",
    category: "Bearings",
    subcategory: "Standard Bearings",
    image: "https://challengeptmedia.b-cdn.net/wysiwyg/custom_website_images/menu_drop_down/bearings_left.jpg",
    price: "Price on Request"
  },
];

export default products;

export const companyLogo = "/images/slide_23_img_15.png"; 