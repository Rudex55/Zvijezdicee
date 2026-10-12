// ============================================================
//  ✏️  EDIT THIS FILE to rename things. Nothing else needs to change.
// ============================================================

export const CONFIG = {
  // The name of the stars (shown everywhere, e.g. "12 Star Name")
  starName: "Star Name",

  // Title shown on the start screen
  appTitle: "Star Shop",

  // Jelena's shop (13 items). She spends HER stars here, Nikola must allow it.
  shop: {
    Jelena: [
      { name: "Jelena Item 1", cost: 1 },
      { name: "Jelena Item 2", cost: 2 },
      { name: "Jelena Item 3", cost: 3 },
      { name: "Jelena Item 4", cost: 3 },
      { name: "Jelena Item 5", cost: 3 },
      { name: "Jelena Item 6", cost: 4 },
      { name: "Jelena Item 7", cost: 5 },
      { name: "Jelena Item 8", cost: 6 },
      { name: "Jelena Item 9", cost: 7 },
      { name: "Jelena Item 10", cost: 10 },
      { name: "Jelena Item 11", cost: 20 },
      { name: "Jelena Item 12", cost: 75 },
      { name: "Jelena Item 13", cost: 100 },
    ],

    // Nikola's shop (13 items). He spends HIS stars here, Jelena must allow it.
    Nikola: [
      { name: "Nikola Item 1", cost: 1 },
      { name: "Nikola Item 2", cost: 2 },
      { name: "Nikola Item 3", cost: 3 },
      { name: "Nikola Item 4", cost: 4 },
      { name: "Nikola Item 5", cost: 5 },
      { name: "Nikola Item 6", cost: 6 },
      { name: "Nikola Item 7", cost: 7 },
      { name: "Nikola Item 8", cost: 10 },
      { name: "Nikola Item 9", cost: 12 },
      { name: "Nikola Item 10", cost: 13 },
      { name: "Nikola Item 11", cost: 20 },
      { name: "Nikola Item 12", cost: 75 },
      { name: "Nikola Item 13", cost: 100 },
    ],
  },

  // Special one-tap send buttons. Each category has one or more amounts.
  // The person whose name is on the list is the one who SENDS the stars.
  quick: {
    Jelena: [
      { category: "Natjecanja", amounts: [50, 39, 34] },
      { category: "5 u skoli", amounts: [10] },
      { category: "4 u skoli", amounts: [2] },
      { category: "Naocale", amounts: [10] },
      { category: "Bicepsi", amounts: [15] },
    ],
    Nikola: [
      { category: "5 u skoli", amounts: [10] },
      { category: "4 u skoli", amounts: [2] },
      { category: "Bedra", amounts: [5] },
      { category: "Alt makeup", amounts: [20] },
    ],
  },
};
