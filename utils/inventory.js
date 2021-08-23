import { v4 as uuid } from 'uuid'

let inventory = [


 
  { categories: ['cabello'], name: 'Next Niacinamide 10% + ZincS 1%', price: '800', image: 'https://theordinary.deciem.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw698fd41b/Images/products/The%20Ordinary/rdn-aha-30pct-bha-2pct-peeling-solution-30ml.png?sw=800&sh=800&sm=fit', description: 'High-strength vitamin and mineral blemish formula', brand: 'Jason Bourne', currentInventory: 44 , linkpago: "https://mpago.la/2Vt5arf"},
  { categories: ['cabello'], name: 'Next Natural Moisturizing Factors + HA', price: '1200', image: 'https://theordinary.deciem.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw2ff47ee4/Images/products/The%20Ordinary/rdn-natural-moisturizing-factors-ha-30ml.png?sw=800&sh=800&sm=fit', description: 'Surface hydration formula', brand: 'Jason Bourne', currentInventory: 17 , linkpago: "https://buy.stripe.com/test_9AQ8A0cWj0Lbg80eUU"},
  { categories: ['cabello'], name: 'Hyaluronic Acid 2% + B5', price: '1600', image: 'https://theordinary.deciem.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw6f82b69b/Images/products/The%20Ordinary/rdn-squalane-cleanser-50ml.png?sw=800&sh=800&sm=fit', description: 'A hydration support formula with ultra-pure, vegan hyaluronic acid', brand: 'Jason Bourne', currentInventory: 28, linkpago: "https://buy.stripe.com/test_9AQ8A0cWj0Lbg80eUU" },
  
 { categories: ['cabello'], name: 'Next Natural Moisturizing Factors + HA', price: '1200', image: 'https://theordinary.deciem.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw2ff47ee4/Images/products/The%20Ordinary/rdn-natural-moisturizing-factors-ha-30ml.png?sw=800&sh=800&sm=fit', description: 'Surface hydration formula', brand: 'Jason Bourne', currentInventory: 17 , linkpago: "https://buy.stripe.com/test_9AQ8A0cWj0Lbg80eUU"},
  { categories: ['cabello'], name: 'Hyaluronic Acid 2% + B5', price: '1600', image: 'https://theordinary.deciem.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw6f82b69b/Images/products/The%20Ordinary/rdn-squalane-cleanser-50ml.png?sw=800&sh=800&sm=fit', description: 'A hydration support formula with ultra-pure, vegan hyaluronic acid', brand: 'Jason Bourne', currentInventory: 28, linkpago: "https://buy.stripe.com/test_9AQ8A0cWj0Lbg80eUU" },
  { categories: ['cabello'], name: 'AHA 30% + BHA 2% Peeling Solution', price: '550', image: 'https://theordinary.deciem.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw698fd41b/Images/products/The%20Ordinary/rdn-aha-30pct-bha-2pct-peeling-solution-30ml.png?sw=800&sh=800&sm=fit', description: 'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.', brand: 'Jason Bourne', currentInventory: 31 },
  { categories: ['cabello'], name: 'Next Niacinamide 10% + ZincS 1%', price: '800', image: 'https://theordinary.deciem.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw698fd41b/Images/products/The%20Ordinary/rdn-aha-30pct-bha-2pct-peeling-solution-30ml.png?sw=800&sh=800&sm=fit', description: 'High-strength vitamin and mineral blemish formula', brand: 'Jason Bourne', currentInventory: 44 , linkpago: "https://mpago.la/2Vt5arf"},
  { categories: ['makeup'], name: 'Next Niacinamide 10% + Zinc 1%', price: '800', image: 'https://theordinary.deciem.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dwa53d85c0/Images/products/The%20Ordinary/rdn-niacinamide-10pct-zinc-1pct-30ml.png?sw=800&sh=800&sm=fit', description: 'High-strength vitamin and mineral blemish formula', brand: 'Jason Bourne', currentInventory: 44, linkpago: "https://buy.stripe.com/test_9AQ8A0cWj0Lbg80eUU" },
  { categories: ['makeup'], name: 'Next Natural Moisturizing Factors + HA', price: '1200', image: 'https://theordinary.deciem.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw2ff47ee4/Images/products/The%20Ordinary/rdn-natural-moisturizing-factors-ha-30ml.png?sw=800&sh=800&sm=fit', description: 'Surface hydration formula', brand: 'Jason Bourne', currentInventory: 17, linkpago: "https://buy.stripe.com/test_9AQ8A0cWj0Lbg80eUU" },
  { categories: ['makeup'], name: 'Hyaluronic Acid 2% + B5', price: '1600', image: 'https://theordinary.deciem.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw6f82b69b/Images/products/The%20Ordinary/rdn-squalane-cleanser-50ml.png?sw=800&sh=800&sm=fit', description: 'A hydration support formula with ultra-pure, vegan hyaluronic acid', brand: 'Jason Bourne', currentInventory: 28 , linkpago: "https://buy.stripe.com/test_9AQ8A0cWj0Lbg80eUU"},
  { categories: ['makeup'], name: 'AHA 30% + BHA 2% Peeling Solution', price: '550', image: 'https://theordinary.deciem.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw698fd41b/Images/products/The%20Ordinary/rdn-aha-30pct-bha-2pct-peeling-solution-30ml.png?sw=800&sh=800&sm=fit', description: 'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.', brand: 'Jason Bourne', currentInventory: 31 , linkpago: "https://buy.stripe.com/test_9AQ8A0cWj0Lbg80eUU" },  
  { categories: ['makeup'], name: 'Next Niacinamide 10% + Zinc 1%', price: '800', image: 'https://theordinary.deciem.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dwa53d85c0/Images/products/The%20Ordinary/rdn-niacinamide-10pct-zinc-1pct-30ml.png?sw=800&sh=800&sm=fit', description: 'High-strength vitamin and mineral blemish formula', brand: 'Jason Bourne', currentInventory: 44, linkpago: "https://buy.stripe.com/test_9AQ8A0cWj0Lbg80eUU" },
  { categories: ['makeup'], name: 'Next Natural Moisturizing Factors + HA', price: '1200', image: 'https://theordinary.deciem.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw2ff47ee4/Images/products/The%20Ordinary/rdn-natural-moisturizing-factors-ha-30ml.png?sw=800&sh=800&sm=fit', description: 'Surface hydration formula', brand: 'Jason Bourne', currentInventory: 17, linkpago: "https://buy.stripe.com/test_9AQ8A0cWj0Lbg80eUU" },
  { categories: ['makeup'], name: 'Hyaluronic Acid 2% + B5', price: '1600', image: 'https://theordinary.deciem.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw6f82b69b/Images/products/The%20Ordinary/rdn-squalane-cleanser-50ml.png?sw=800&sh=800&sm=fit', description: 'A hydration support formula with ultra-pure, vegan hyaluronic acid', brand: 'Jason Bourne', currentInventory: 28 , linkpago: "https://buy.stripe.com/test_9AQ8A0cWj0Lbg80eUU"},
  { categories: ['makeup'], name: 'AHA 30% + BHA 2% Peeling Solution', price: '550', image: 'https://theordinary.deciem.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw698fd41b/Images/products/The%20Ordinary/rdn-aha-30pct-bha-2pct-peeling-solution-30ml.png?sw=800&sh=800&sm=fit', description: 'You don’t have to go outside to be rugged. The Cigar rawhide sofa features a sturdy corner-blocked wooden frame and raw seams for that Malboro-person look. This brown leather sofa is cozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.', brand: 'Jason Bourne', currentInventory: 31, linkpago: "https://buy.stripe.com/test_9AQ8A0cWj0Lbg80eUU" }, 

  { categories: ['cuidados'], name: 'Next Niacinamide 10% + Zinc 1%', price: '800', image: 'https://theordinary.deciem.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dwa53d85c0/Images/products/The%20Ordinary/rdn-niacinamide-10pct-zinc-1pct-30ml.png?sw=800&sh=800&sm=fit', description: 'High-strength vitamin and mineral blemish formula', brand: 'Jason Bourne', currentInventory: 44, linkpago: "https://buy.stripe.com/test_9AQ8A0cWj0Lbg80eUU" },
  { categories: ['cuidados'], name: 'Next Natural Moisturizing Factors + HA', price: '1200', image: 'https://theordinary.deciem.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw2ff47ee4/Images/products/The%20Ordinary/rdn-natural-moisturizing-factors-ha-30ml.png?sw=800&sh=800&sm=fit', description: 'Surface hydration formula', brand: 'Jason Bourne', currentInventory: 17, linkpago: "https://buy.stripe.com/test_9AQ8A0cWj0Lbg80eUU" },
  
  
  // { 
]

inventory.map(i => {
  i.id = uuid()
  return i
})

export default inventory