/* ==========================================================================
   SAF INTERNATIONAL — CATALOG & SITE DATA
   ========================================================================== */

const SAF_DATA = {
  categories: [
    {
      id: "corporate-gifts",
      badge: "01 • CORPORATE",
      title: "Corporate Gifts",
      desc: "Premium and practical gifts for employees, clients, partners, and corporate occasions.",
      image: "assets/images/cat-01-corporate.jpg",
      subcategories: ["Executive Gift Sets", "VIP Presentation Hampers", "Client Appreciation Kits", "Board Member Tokens"]
    },
    {
      id: "gift-items",
      badge: "02 • CELEBRATION",
      title: "Gift Items",
      desc: "Thoughtful gifts for celebrations, events, occasions, and special moments.",
      image: "assets/images/cat-02-celebration.jpg",
      subcategories: ["Celebration Gift Boxes", "Milestone Hampers", "Holiday Festival Sets", "Customized Keepsakes"]
    },
    {
      id: "stationery",
      badge: "03 • DESK",
      title: "Stationery",
      desc: "Notebooks, pens, organizers, office stationery, and everyday writing essentials.",
      image: "assets/images/cat-03-desk.jpg",
      subcategories: ["Hardcover Journals", "Executive Pen Sets", "Desk Pads & Blotters", "Archival File Folders"]
    },
    {
      id: "household",
      badge: "04 • HOME",
      title: "Household",
      desc: "Useful and stylish products for home, kitchen, organization, and everyday living.",
      image: "assets/images/cat-04-home.jpg",
      subcategories: ["Ceramic Tableware", "Insulated Drinkware", "Kitchen Organization", "Living Accents"]
    },
    {
      id: "handicrafts",
      badge: "05 • HERITAGE",
      title: "Handicrafts",
      desc: "Distinctive handcrafted products combining traditional craftsmanship with modern appeal.",
      image: "assets/images/cat-05-heritage.jpg",
      subcategories: ["Woven Basketry", "Artisanal Pottery", "Carved Hardwood Trays", "Hand-sculpted Accents"]
    },
    {
      id: "promotional-products",
      badge: "06 • CAMPAIGN",
      title: "Promotional Products",
      desc: "Branded merchandise and promotional items for campaigns, events, and business marketing.",
      image: "assets/images/cat-06-campaign.jpg",
      subcategories: ["Thermal Tumblers", "Eco Tech Accessories", "Branded Apparel", "Tradeshow Giveaways"]
    },
    {
      id: "bags-accessories",
      badge: "07 • CARRY",
      title: "Bags & Accessories",
      desc: "Corporate bags, lifestyle bags, pouches, accessories, and everyday carry products.",
      image: "assets/images/cat-07-carry.jpg",
      subcategories: ["Leather Folios", "Travel Cable Organizers", "Canvas Conference Totes", "Laptop Sleeves"]
    },
    {
      id: "event-products",
      badge: "08 • OCCASIONS",
      title: "Event Products",
      desc: "Curated products for festivals, celebrations, conferences, events, and special occasions.",
      image: "assets/images/cat-08-occasions.jpg",
      subcategories: ["Conference Attendee Packs", "Summit VIP Gifts", "Badging & Lanyards", "Speaker Appreciation Gifts"]
    }
  ],

  products: [
    {
      id: "executive-gift-set",
      badge: "CORPORATE GIFTS",
      title: "Executive Gift Set",
      desc: "A curated collection of premium stationery and accessories suitable for corporate gifting.",
      image: "assets/images/prod-exec-gift.jpg",
      gallery: [
        "assets/images/prod-exec-gift.jpg",
        "assets/images/branding-box-correct.jpg",
        "assets/images/hero-img.png"
      ],
      categoryId: "corporate-gifts",
      sku: "SAF-EXEC-01",
      moq: "100 Units",
      material: "Full-grain bonded leather, stainless steel, gold electroplate brass",
      finishing: "Precision foil debossing, matte black rigid gift presentation box",
      leadTime: "10–14 Business Days",
      compliance: "SGS Certified, REACH Compliant, Bilateral Trade Protocol Verified",
      packaging: "Custom magnetic clasp rigid box with velvet contour insert",
      dimensions: "Box: 320 x 240 x 60 mm",
      brandingMethods: ["Metallic Gold Foil Debossing", "Laser Engraving", "Screen Printing", "Blind Embossing"],
      overview: "Designed for high-impact executive recognition and corporate milestones. Each set features a zippered full-grain organizer folder, thermal vacuum insulated flask, heavy brass twist pen, and matching leather keychain, presented in an institutional matte-black keepsake box."
    },
    {
      id: "premium-notebook",
      badge: "STATIONERY",
      title: "Premium Notebook",
      desc: "Elegant notebook suitable for business meetings, conferences, and everyday use.",
      image: "assets/images/prod-notebook.jpg",
      gallery: [
        "assets/images/prod-notebook.jpg",
        "assets/images/about-mosaic-2.jpg",
        "assets/images/about-mosaic-1-clean.jpg"
      ],
      categoryId: "stationery",
      sku: "SAF-NOTE-02",
      moq: "250 Units",
      material: "100gsm acid-free ivory archival paper, textured vegan PU leather cover",
      finishing: "Blind debossed institutional logo, gilded page edging, gold ribbon marker",
      leadTime: "7–10 Business Days",
      compliance: "FSC Certified Paper, ISO 9001 Factory Audit, SGS Non-toxic Ink",
      packaging: "Individual cellophane wrap + bulk master carton",
      dimensions: "A5 (148 x 210 mm) • 192 lined pages with lay-flat thread binding",
      brandingMethods: ["Blind Debossing", "Hot Stamped Foil (Gold/Silver)", "Full Color Belly Band"],
      overview: "A timeless corporate notebook constructed with lay-flat Smyth sewn binding for smooth note-taking. The water-resistant tactile cover and archival paper provide durability for international business travelers and corporate leaders."
    },
    {
      id: "corporate-pen-set",
      badge: "EXECUTIVE",
      title: "Corporate Pen Set",
      desc: "Professional writing set suitable for corporate gifts and promotional campaigns.",
      image: "assets/images/prod-penset.jpg",
      gallery: [
        "assets/images/prod-penset.jpg",
        "assets/images/hero-img.png",
        "assets/images/branding-box-correct.jpg"
      ],
      categoryId: "stationery",
      sku: "SAF-PENS-03",
      moq: "100 Units",
      material: "Solid brass barrel with multi-layer piano lacquer and 24K gold accents",
      finishing: "Micro-laser engraving on barrel, walnut presentation case with velvet bed",
      leadTime: "8–12 Business Days",
      compliance: "German Schmidt Ink Flow Tested, SGS Heavy Metal Inspection Pass",
      packaging: "Solid hardwood display case with magnetic latch and outer gift sleeve",
      dimensions: "Pen: 138 x 12 mm • Wooden Case: 185 x 90 x 38 mm",
      brandingMethods: ["Fiber Laser Engraving", "Clip Pad Printing", "Hardwood Case Laser Etch"],
      overview: "Crafted for signing momentous contracts and celebrating board-level milestones. The set includes both a smooth rollerball and an engineered fountain pen with German iridium point nib, weighted perfectly for balanced handwriting."
    },
    {
      id: "handcrafted-decorative-piece",
      badge: "HANDICRAFTS",
      title: "Handcrafted Decorative Piece",
      desc: "Unique handcrafted product suitable for gifting and lifestyle collections.",
      image: "assets/images/prod-decor.jpg",
      gallery: [
        "assets/images/prod-decor.jpg",
        "assets/images/craft-showcase-final.jpg",
        "assets/images/about-mosaic-3.jpg"
      ],
      categoryId: "handicrafts",
      sku: "SAF-CRAFT-04",
      moq: "50 Units",
      material: "Hand-thrown textured terracotta ceramic with hand-forged patinated brass arc",
      finishing: "Natural mineral wash, protective matte sealant, artisanal wax finish",
      leadTime: "15–20 Business Days",
      compliance: "Fair Trade Sourcing Verified, Zero Harmful Glaze Certification",
      packaging: "Custom reinforced foam drop-tested kraft box",
      dimensions: "240 x 180 x 75 mm • 1.2 kg net weight",
      brandingMethods: ["Underside Artisan Seal Stamp", "Custom Story Card with Wax Seal"],
      overview: "Hand-sculpted by generational artisan communities. This architectural decorative sculpture blends timeless organic terracotta with brutalist forged brass geometry, creating an enduring statement of refined aesthetic distinction."
    },
    {
      id: "travel-organizer",
      badge: "ACCESSORIES",
      title: "Travel Organizer",
      desc: "Practical organizer designed for travel, corporate gifting, and everyday use.",
      image: "assets/images/prod-organizer.jpg",
      gallery: [
        "assets/images/prod-organizer.jpg",
        "assets/images/cat-07-carry.jpg",
        "assets/images/branding-box-correct.jpg"
      ],
      categoryId: "bags-accessories",
      sku: "SAF-TRAV-05",
      moq: "150 Units",
      material: "Crazy horse oil-waxed genuine cowhide leather, heavy duty elastic webbing",
      finishing: "Contrast saddle stitching, brass snap closure, RFID blocking inner lining",
      leadTime: "10–14 Business Days",
      compliance: "Leather Working Group (LWG) Silver Standard, SGS RFID Shielding Test",
      packaging: "Breathable unbleached cotton dust bag + rigid gift box",
      dimensions: "Closed: 230 x 165 x 25 mm • Open: 340 x 230 mm",
      brandingMethods: ["Heat Debossing", "Laser Branding", "Custom Interior Lining Print"],
      overview: "Engineered for international corporate delegates and frequent flyers. Organizes passports, boarding passes, currency, payment cards, charging cables, power bank, and earphones in one structured, heirloom-quality leather case."
    },
    {
      id: "desk-organizer",
      badge: "OFFICE",
      title: "Desk Organizer",
      desc: "Functional desk accessory suitable for offices and corporate environments.",
      image: "assets/images/prod-desk.jpg",
      gallery: [
        "assets/images/prod-desk.jpg",
        "assets/images/cat-03-desk.jpg",
        "assets/images/hero-img.png"
      ],
      categoryId: "stationery",
      sku: "SAF-DESK-06",
      moq: "100 Units",
      material: "Solid American walnut veneer, anodized brushed aluminum frame, felt lining",
      finishing: "Multi-tiered dual storage drawers, integrated wireless charging dock stand",
      leadTime: "12–15 Business Days",
      compliance: "CE / FCC Qi Wireless Certified, CARB Phase 2 Eco Wood Standard",
      packaging: "Protective molded foam with full-color printed institutional slipcase",
      dimensions: "280 x 210 x 120 mm • 1.6 kg",
      brandingMethods: ["Aluminum Face Laser Etch", "Wood Burn Debossing", "Metal Nameplate Inlay"],
      overview: "Elevate executive desktop workflows. Features a stepped profile with angled phone dock supporting fast wireless charging, dedicated business card repository, top catchall tray, and concealed sliding memo drawers."
    },
    {
      id: "celebration-gift-hamper",
      badge: "CELEBRATION",
      title: "Celebration Gift Hamper",
      desc: "Thoughtful gifts for celebrations, events, occasions, and special moments.",
      image: "assets/images/cat-02-celebration.jpg",
      gallery: [
        "assets/images/cat-02-celebration.jpg",
        "assets/images/branding-box-correct.jpg",
        "assets/images/hero-img.png"
      ],
      categoryId: "gift-items",
      sku: "SAF-CELEB-07",
      moq: "150 Units",
      material: "Reinforced linen-wrapped rigid box, satin ribbon seal, porcelain accessories",
      finishing: "Hot foil stamped gold seal, custom printed note cards with wax stamp",
      leadTime: "10–14 Business Days",
      compliance: "FDA / LFGB Food Contact Pass, ISO 9001 Factory Audit",
      packaging: "Individual protective kraft outer carton with moisture barrier",
      dimensions: "360 x 280 x 120 mm",
      brandingMethods: ["Gold Foil Stamping", "Ribbon Woven Monogram", "Wax Seal Customization"],
      overview: "An opulent gift hamper curated for milestone recognition, holiday celebrations, and premier customer appreciation. Each hamper is customized with client-selected premium treats, custom porcelain keepware, and bespoke branded greeting cards."
    },
    {
      id: "minimalist-tableware-set",
      badge: "HOME",
      title: "Minimalist Tableware Set",
      desc: "Useful and stylish products for home, kitchen, organization, and everyday living.",
      image: "assets/images/cat-04-home.jpg",
      gallery: [
        "assets/images/cat-04-home.jpg",
        "assets/images/about-mosaic-4.jpg",
        "assets/images/craft-showcase-final.jpg"
      ],
      categoryId: "household",
      sku: "SAF-HOME-08",
      moq: "100 Sets",
      material: "Matte glazed stoneware ceramics, sustainably sourced acacia serving board",
      finishing: "Scratch-resistant satin glaze, hand-finished organic rims",
      leadTime: "14–18 Business Days",
      compliance: "Lead & Cadmium Free (Prop 65 Pass), SGS LFGB Certified",
      packaging: "Molded pulp eco-packaging with branded kraft presentation band",
      dimensions: "Dinner Plate: 260mm • Bowl: 160mm • Board: 350 x 200mm",
      brandingMethods: ["Underside Laser Engraving", "Board Heat Branding", "Custom Packaging Sleeve"],
      overview: "Engineered for contemporary hospitality and executive home gifting. Features dishwasher and microwave safe ceramic dining essentials paired with an oil-finished solid acacia charcuterie and bread board."
    },
    {
      id: "branded-thermal-tumbler",
      badge: "CAMPAIGN",
      title: "Promotional Thermal Drinkware",
      desc: "Branded merchandise and promotional items for campaigns, events, and business marketing.",
      image: "assets/images/cat-06-campaign.jpg",
      gallery: [
        "assets/images/cat-06-campaign.jpg",
        "assets/images/branding-box-correct.jpg",
        "assets/images/prod-exec-gift.jpg"
      ],
      categoryId: "promotional-products",
      sku: "SAF-PROMO-09",
      moq: "200 Units",
      material: "Double-walled vacuum insulated 18/8 304 food-grade stainless steel",
      finishing: "Powder-coated scratch-resistant matte exterior with copper thermal lining",
      leadTime: "7–10 Business Days",
      compliance: "BPA Free, FDA / LFGB Certified, SGS Thermal Retention Pass (12h Hot / 24h Cold)",
      packaging: "Individual recycled cylindrical tube packaging with custom print",
      dimensions: "500ml capacity • 220 x 70 mm",
      brandingMethods: ["Fiber Laser Engraving", "360-Degree Seamless Screen Print", "UV Full-Color Print"],
      overview: "The gold standard in corporate promotional drinkware. Keeps beverages piping hot for 12 hours or refreshingly chilled for 24 hours. The leak-proof screw top and tactile powder coating guarantee long-term daily use."
    },
    {
      id: "conference-delegate-pack",
      badge: "OCCASIONS",
      title: "Conference Delegate Welcome Pack",
      desc: "Curated products for festivals, celebrations, conferences, events, and special occasions.",
      image: "assets/images/cat-08-occasions.jpg",
      gallery: [
        "assets/images/cat-08-occasions.jpg",
        "assets/images/cat-07-carry.jpg",
        "assets/images/prod-penset.jpg"
      ],
      categoryId: "event-products",
      sku: "SAF-EVENT-10",
      moq: "250 Packs",
      material: "Heavy-duty 14oz organic cotton canvas, aluminum badge clip, recycled paper notebook",
      finishing: "Precision Pantone matched silk screen printing, reinforced stress seams",
      leadTime: "8–12 Business Days",
      compliance: "OEKO-TEX Standard 100 Certified Canvas, SGS Safety Verified",
      packaging: "Pre-assembled and sorted in labeled master cartons by conference track",
      dimensions: "Tote: 380 x 420 x 100 mm • Notebook: A5 • Pen: 140 mm",
      brandingMethods: ["Screen Printing", "Full Color Heat Transfer", "Embroidered Label Tag"],
      overview: "Designed for seamless conference registration and VIP summits. Includes a sturdy gusseted canvas tote, branded A5 conference journal, matte executive click pen, and custom lanyard badge holder, packed and ready for immediate event distribution."
    },
    {
      id: "artisanal-woven-basket-set",
      badge: "HERITAGE",
      title: "Artisanal Woven Basket Set",
      desc: "Distinctive handcrafted products combining traditional craftsmanship with modern appeal.",
      image: "assets/images/craft-showcase-final.jpg",
      gallery: [
        "assets/images/craft-showcase-final.jpg",
        "assets/images/cat-05-heritage.jpg",
        "assets/images/prod-decor.jpg"
      ],
      categoryId: "handicrafts",
      sku: "SAF-BASK-11",
      moq: "75 Sets",
      material: "Hand-harvested natural river reed and seagrass with organic cotton core",
      finishing: "Traditional coil-weave technique, reinforced integrated carry loops",
      leadTime: "15–20 Business Days",
      compliance: "Fair Trade Verified, Phytosanitary Certificate Issued, Non-chemical Sun Dried",
      packaging: "Nesting 3-piece set in protective kraft carton",
      dimensions: "Large: 320 x 280 mm • Medium: 260 x 240 mm • Small: 200 x 180 mm",
      brandingMethods: ["Stitched Leather Label Tag", "Custom Hangtag with Artisan Story"],
      overview: "Breathtaking hand-woven storage vessels crafted by master weavers. Each basket features organic tactile texture, subtle natural color variegation, and rugged strength suitable for luxury boutique hotels, corporate interior styling, or seasonal hampers."
    }
  ],

  brandingTechniques: [
    { title: "Logo Printing", desc: "Screen, pad & UV full-color", icon: "printer" },
    { title: "Laser Engraving", desc: "Permanent crisp metal etching", icon: "sparkles" },
    { title: "Precision Embroidery", desc: "High-density apparel & bags", icon: "tag" },
    { title: "Custom Rigid Packaging", desc: "Foil stamped rigid boxes", icon: "box" },
    { title: "Metallic Foil Branding", desc: "Hot foil gold & silver press", icon: "award" },
    { title: "Personalized Sets", desc: "Recipient name engraving", icon: "gift" }
  ],

  sourcingSteps: [
    { num: "01", title: "Tell Us What You Need", desc: "Share product specifications, target quantity, budgetary limits, and delivery schedules." },
    { num: "02", title: "We Source", desc: "Our global team identifies qualified production partners and vets material certifications." },
    { num: "03", title: "Select", desc: "Review curated options, samples, packaging mockups, and commercial Incoterms." },
    { num: "04", title: "Confirm", desc: "Sign off on pre-production proofs, execute agreements, and initiate manufacturing runs." },
    { num: "05", title: "Supply", desc: "Coordinated international logistics, batch QA inspection, and insured delivery to your hub." }
  ],

  audiences: [
    { title: "Corporate & Offices", desc: "Corporate gifting programs, internal executive office essentials, employee reward hampers." },
    { title: "Retailers", desc: "Private-label merchandise, customized packaging, seasonal retail collections, point of sale." },
    { title: "Wholesalers & Distributors", desc: "Container-volume bulk sourcing, factory-direct pricing tiers, container load consolidation." },
    { title: "Event & Exhibition Companies", desc: "Conference attendee packs, expo branded merchandise, speaker VIP gifting, badging." },
    { title: "Schools & Institutions", desc: "Institutional stationery supplies, student kits, alumni merchandise, graduation gifts." },
    { title: "NGOs & Organizations", desc: "Ethically sourced campaign materials, donor appreciation items, sustainable handicraft orders." }
  ],

  collections: [
    { id: "executive", title: "Executive", subtitle: "VIP GIFTING", icon: "diamond" },
    { id: "everyday", title: "Everyday", subtitle: "OFFICE BASICS", icon: "check-square" },
    { id: "premium", title: "Premium", subtitle: "LUXURY KITS", icon: "gift" },
    { id: "event", title: "Event", subtitle: "CONFERENCES", icon: "volume" },
    { id: "eco-friendly", title: "Eco-Friendly", subtitle: "SUSTAINABLE", icon: "feather" },
    { id: "seasonal", title: "Seasonal", subtitle: "FESTIVALS", icon: "star" }
  ]
};
