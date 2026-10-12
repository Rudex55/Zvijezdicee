// ============================================================
//  ✏️  EDIT THIS FILE to rename things. Nothing else needs to change.
// ============================================================

export const CONFIG = {
  // The name of the stars, set separately for each person.
  // Under Jelena = what Jelena's own stars are called (her balance, her shop).
  // Under Nikola = what Nikola's own stars are called.
  // When Jelena SENDS stars she sends "Nikola stars" (Nikola's name), and when
  // Nikola sends stars he sends "Jelena stars". So the names swap when sending.
  starName: {
    Jelena: "Good Girl Stars",
    Nikola: "Good Boy Stars",
  },

  // Title shown on the start screen
  appTitle: "Zvijezdice",

  // Jelena's shop (13 items). She spends HER stars here, Nikola must allow it.
  shop: {
     Jelena: [
      { name: "Kiss", cost: 1 },
      { name: "Zagrljaj", cost: 2 },
      { name: "Ceskanje po ledima", cost: 3 },
      { name: "Masiranje butina", cost: 3 },
      { name: "Neck kisses", cost: 3 },
      { name: "Makeout", cost: 4 },
      { name: "Hickey", cost: 5 },
      { name: "Fingering (kroz hlace)", cost: 6 },
      { name: "Fingering (bez)", cost: 7 },
      { name: "Bit bezobrazna", cost: 10 },
      { name: "Head", cost: 20 },
      { name: "SEXXX", cost: 75 },
      { name: "Break pinky promise :(", cost: 100 },
    ],

    // Nikola's shop (13 items). He spends HIS stars here, Jelena must allow it.
    Nikola: [
      { name: "Kiss", cost: 1 },
      { name: "Zagrljaj", cost: 2 },
      { name: "Ceskanje po ledima", cost: 3 },
      { name: "Makeout", cost: 4 },
      { name: "Hickey", cost: 5 },
      { name: "Hj (kroz gace)", cost: 6 },
      { name: "Hj (Bez)", cost: 7 },
      { name: "Footjob (kroz hlace)", cost: 10 },
      { name: "Footjob (bez)", cost: 12 },
      { name: "Sise", cost: 13 },
      { name: "Head", cost: 20 },
      { name: "SEXXX", cost: 75 },
      { name: "Break pinky promise :(", cost: 100 },
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

