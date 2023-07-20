import { writable } from "svelte/store";

let companies = [
 
  {
    id: 1,
    name: "Tesla",
    description:
      "Tesla, Inc. is an American electric vehicle and clean energy company. It is known for its electric cars, solar energy products, and energy storage solutions.",
    cars: [
      "Model S",
      "Model 3",
      "Model X",
      "Model Y",
      "Cybertruck",
      "Roadster",
      "Semi",
      "Powerwall",
      "Solar Roof",
      "Supercharger",
      "Autopilot",
    ],
    experience: 8,
  },
  
  {
    id: 2,
    name: "Toyota",
    description:
      "Toyota Motor Corporation is a Japanese multinational automotive manufacturer. It is one of the largest car companies globally, offering a wide range of vehicles.",
    cars: [
      "Camry",
      "Corolla",
      "RAV4",
      "Highlander",
      "Prius",
      "Tacoma",
      "Tundra",
      "Sienna",
      "4Runner",
      "C-HR",
      "Land Cruiser",
    ],
    experience: 6,
  },
  // Company 3
  {
    id: 3,
    name: "Volkswagen",
    description:
      "Volkswagen AG is a German multinational automotive manufacturing company. It is known for producing popular car models and is the largest carmaker in Europe.",
    cars: [
      "Golf",
      "Passat",
      "Tiguan",
      "Jetta",
      "Polo",
      "Atlas",
      "Arteon",
      "Touareg",
      "ID.3",
      "ID.4",
      "Golf GTI",
    ],
    experience: 9,
  },
  // Company 4
  {
    id: 4,
    name: "Ford",
    description:
      "Ford Motor Company is an American multinational automaker. It has a rich history and offers a diverse range of vehicles, including cars, trucks, and SUVs.",
    cars: [
      "Mustang",
      "F-150",
      "Escape",
      "Explorer",
      "Ranger",
      "Focus",
      "Edge",
      "Expedition",
      "Bronco",
      "Mach-E",
      "Transit",
    ],
    experience: 7,
  },
  // Company 5
  {
    id: 5,
    name: "Honda",
    description:
      "Honda Motor Co., Ltd. is a Japanese multinational conglomerate corporation. It is well-known for manufacturing reliable and fuel-efficient cars and motorcycles.",
    cars: [
      "Civic",
      "Accord",
      "CR-V",
      "Pilot",
      "HR-V",
      "Odyssey",
      "Insight",
      "Ridgeline",
      "Passport",
      "Fit",
      "Clarity",
    ],
    experience: 5,
  },
  // Company 6
  {
    id: 6,
    name: "Chevrolet",
    description:
      "Chevrolet is an American automobile division of General Motors. It offers a variety of vehicles, including trucks, SUVs, and electric cars.",
    cars: [
      "Silverado",
      "Equinox",
      "Traverse",
      "Tahoe",
      "Suburban",
      "Bolt EV",
      "Camaro",
      "Malibu",
      "Impala",
      "Blazer",
      "Trailblazer",
    ],
    experience: 7,
  },
  // Company 7
  {
    id: 7,
    name: "Nissan",
    description:
      "Nissan Motor Co., Ltd. is a Japanese multinational automobile manufacturer. It is known for producing a wide range of vehicles, including electric cars.",
    cars: [
      "Altima",
      "Rogue",
      "Sentra",
      "Murano",
      "Kicks",
      "Leaf",
      "Maxima",
      "Frontier",
      "Titan",
      "Pathfinder",
      "Armada",
    ],
    experience: 6,
  },
  // Company 8
  {
    id: 8,
    name: "BMW",
    description:
      "Bayerische Motoren Werke AG, commonly referred to as BMW, is a German multinational corporation that produces luxury vehicles and motorcycles.",
    cars: [
      "3 Series",
      "5 Series",
      "7 Series",
      "X3",
      "X5",
      "X7",
      "M3",
      "M5",
      "i8",
      "Z4",
      "X1",
    ],
    experience: 4,
  },
  // Company 9
  {
    id: 9,
    name: "Mercedes-Benz",
    description:
      "Mercedes-Benz is a German global automobile marque and a division of Daimler AG. It is known for producing luxury vehicles and a wide range of cars.",
    cars: [
      "C-Class",
      "E-Class",
      "S-Class",
      "GLC",
      "GLE",
      "GLA",
      "A-Class",
      "CLA",
      "GLS",
      "G-Class",
      "SLC",
    ],
    experience: 8,
  },
  // Company 10
  {
    id: 10,
    name: "Hyundai",
    description:
      "Hyundai Motor Company is a South Korean multinational automotive manufacturer. It is known for producing a variety of cars, including electric and hybrid models.",
    cars: [
      "Elantra",
      "Tucson",
      "Santa Fe",
      "Kona",
      "Sonata",
      "Accent",
      "Venue",
      "Palisade",
      "Nexo",
      "Ioniq",
      "Veloster",
    ],
    experience: 5,
  },

  {
    id: 11,
    name: "Subaru",
    description:
      "Subaru Corporation is a Japanese multinational corporation that produces automobiles, aircraft, and industrial products. It is known for its all-wheel-drive cars.",
    cars: [
      "Outback",
      "Forester",
      "Crosstrek",
      "Ascent",
      "Impreza",
      "Legacy",
      "WRX",
      "BRZ",
      "Crosstrek Hybrid",
      "Baja",
      "XV",
    ],
    experience: 6,
  },
];

// Export the writable store
export const companiesStore = writable(companies);
