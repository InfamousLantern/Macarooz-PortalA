// ============================================================
// MACAROOZ PRODUCT ENGINE — Single source of truth
// Update flavors, availability, and portal visibility here.
// All portals read from this file.
// ============================================================
 
const PRODUCTS = {
 
  pops: {
    label: "Mac Pops",
    description: "10-count clamshell",
    popsPerCase: 10,
    flavors: {
      natural: [
        { id: "birthday-cake-n",  name: "Birthday Cake",   sku: "BA Birthday",      available: true },
        { id: "strawberry-n",     name: "Strawberry",      sku: "Strawberry",       available: true },
        { id: "cookies-cream-n",  name: "Cookies & Cream", sku: "Cookies and Cream",available: true },
        { id: "red-velvet-n",     name: "Red Velvet",      sku: "Red Velvet",       available: true },
        { id: "cinnamon-roll-n",  name: "Cinnamon Roll",   sku: "Cinnamon Roll",    available: true },
        { id: "cookie-dough-n",   name: "Cookie Dough",    sku: "Cookie Dough",     available: true },
        { id: "cotton-candy-n",   name: "Cotton Candy",    sku: "Cotton Candy",     available: true },
        { id: "fruity-cereal-n",  name: "Fruity Cereal",   sku: "Fruity Cereal",    available: true },
        { id: "SB-rose-n",        name: "Strawberry Rose", sku: "Strawberry Rose",  available: true, seasonal: true },
      ]
    }
  },
 
  macarons: {
    label: "Macarons",
    description: "24-count clamshell",
    flavors: {
      natural: [
        { id: "vanilla-mac-n",    name: "Vanilla",     available: true  },
        { id: "chocolate-mac-n",  name: "Chocolate",   available: true  },
        { id: "strawberry-mac-n", name: "Strawberry",  available: true  },
        { id: "pistachio-mac-n",  name: "Pistachio",   available: false },
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
  caseIncrement: 1,
  totalMultiple: 8,
};
 
const PORTAL_ACCESS = {
  "portal-a": "pops_macs",
};
 
// Export for use in portal and sales interface
if (typeof module !== 'undefined') module.exports = { PRODUCTS, ORDER_RULES, PORTAL_ACCESS };
 
