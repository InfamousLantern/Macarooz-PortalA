// ============================================================
// MACAROOZ PRODUCT ENGINE — Single source of truth
// Update flavors, availability, and portal visibility here.
// All three portals read from this file.
// ============================================================

const PRODUCTS = {
  // Portal access levels: 'pops' | 'pops_macs' | 'full'
  // SKU maps to Delusion of Precision internal names

  pops: {
    label: "Pops",
    description: "10-count clamshell",
    popsPerCase: 10,
    coloringOptions: ["Natural", "Artificial"],
    flavors: {
      natural: [
        { id: "birthday-cake-n", name: "Birthday Cake", sku: "BA Birthday", available: true },
        { id: "strawberry-n", name: "Strawberry", sku: "Strawberry", available: true },
        { id: "cookies-cream-n", name: "Cookies & Cream", sku: "Cookies and Cream", available: true },
        { id: "red-velvet-n", name: "Red Velvet", sku: "Red Velvet", available: true },
        { id: "cinnamon-roll-n", name: "Cinnamon Roll", sku: "Cinnamon Roll", available: true },
        { id: "chocolate-chip-n", name: "Chocolate Chip", sku: "Chocolate Chip", available: true },
        { id: "cotton-candy-n", name: "Cotton Candy", sku: "Cotton Candy", available: false },
        { id: "fruity-cereal-n", name: "Fruity Cereal", sku: "Fruity Cereal", available: false },
        { id: "seasonal-n", name: "Seasonal", sku: "Seasonal Pop", available: false, seasonal: true },
      ],
      artificial: [
        { id: "birthday-cake-a", name: "Birthday Cake", sku: "BA Birthday", available: true },
        { id: "strawberry-a", name: "Strawberry", sku: "Strawberry", available: true },
        { id: "cookies-cream-a", name: "Cookies & Cream", sku: "Cookies and Cream", available: true },
        { id: "red-velvet-a", name: "Red Velvet", sku: "Red Velvet", available: true },
        { id: "cotton-candy-a", name: "Cotton Candy", sku: "Cotton Candy", available: false },
        { id: "fruity-cereal-a", name: "Fruity Cereal", sku: "Fruity Cereal", available: false },
        { id: "pumpkin-spice-a", name: "Pumpkin Spice", sku: "Pumpkin Spice", available: false, seasonal: true },
        { id: "rainbow-sherbet-a", name: "Rainbow Sherbet", sku: "Rainbow Sherbet", available: false },
      ]
    }
  },

  macarons: {
    label: "Macarons",
    description: "24-count clamshell",
    portalAccess: ["pops_macs", "full"],
    flavors: {
      natural: [
        { id: "vanilla-mac-n", name: "Vanilla", available: true },
        { id: "chocolate-mac-n", name: "Chocolate", available: true },
        { id: "strawberry-mac-n", name: "Strawberry", available: true },
        { id: "pistachio-mac-n", name: "Pistachio", available: true },
        { id: "cinnamon-roll-mac-n", name: "Cinnamon Roll", available: true },
        { id: "strawberry-cheesecake-mac-n", name: "Strawberry Cheesecake", available: true },
        { id: "birthday-cake-mac-n", name: "Birthday Cake", available: true },
      ],
      artificial: [
        { id: "vanilla-mac-a", name: "Vanilla", available: true },
        { id: "chocolate-mac-a", name: "Chocolate", available: true },
        { id: "strawberry-mac-a", name: "Strawberry", available: true },
        { id: "pistachio-mac-a", name: "Pistachio", available: true },
        { id: "birthday-cake-mac-a", name: "Birthday Cake", available: true },
        { id: "red-velvet-mac-a", name: "Red Velvet", available: true },
        { id: "cookies-cream-mac-a", name: "Cookies & Cream", available: true },
        { id: "seasonal-mac-a", name: "Seasonal", available: false, seasonal: true },
      ]
    }
  },

  printed_macarons: {
    label: "Printed Macarons",
    description: "Custom printed - requires approval",
    portalAccess: ["full"],
    requiresApproval: true,
  }
};

const ORDER_RULES = {
  minCases: 8,
  caseIncrement: 8,
  addons: {
    popStand: { label: "Pop Stand", perBox: true },
    ice: { label: "Ice Pack", perBox: true },
  }
};

const PORTAL_ACCESS = {
  "portal-a": "pops",
  "portal-b": "pops_macs",
  "portal-c": "full",
};

// Export for use in portal and sales interface
if (typeof module !== 'undefined') module.exports = { PRODUCTS, ORDER_RULES, PORTAL_ACCESS };
