class MenuItem {
  constructor(
    public image: string,
    public name: string,
    public description: string,
    public price: string
  ) {}
}

const menuData = {
  munchieBox: [
    new MenuItem(
      "munchie-box.jpg",
      "Munchie Box",
      "Prawn Toast (4), Spare Ribs (4), Chicken Balls (4), Mini Spring Rolls (4), Chicken Wings (4), Egg Fried Rice (1), Chips, Sauce, Can of Juice",
      "£20.50"
    ),
  ],
  chefsCombo: [
    new MenuItem(
      "chefs-combo.jpg",
      "Chef's Combo",
      "BBQ Ribs, Pancake Roll, Sesame Prawn Toast, Satay Chicken Skewers, Crispy Won Ton",
      "£13.50"
    ),
  ],
  crispyAromaticDuck: [
    new MenuItem(
      "crispy-duck-quarter.jpg",
      "Crispy Aromatic Duck",
      "1/4 Duck",
      "£13.00"
    ),
    new MenuItem(
      "crispy-duck-half.jpg",
      "Crispy Aromatic Duck",
      "1/2 Duck",
      "£23.00"
    ),
    new MenuItem(
      "crispy-duck-whole.jpg",
      "Crispy Aromatic Duck",
      "Whole Duck",
      "£40.00"
    ),
  ],
  dimSum: [
    new MenuItem(
      "steamed-dumplings.jpg",
      "Su Mai (Steamed Dumplings)",
      "",
      "£5.50"
    ),
    new MenuItem(
      "steamed-shrimp-dumplings.jpg",
      "Har Gow (Steamed Shrimp Dumplings)",
      "",
      "£5.50"
    ),
  ],
  saltAndPepperDishes: [
    new MenuItem(
      "salt-and-pepper-chicken.jpg",
      "Salt & Pepper Chicken",
      "",
      "£7.00"
    ),
    new MenuItem("salt-and-pepper-ribs.jpg", "Salt & Pepper Ribs", "", "£7.00"),
    new MenuItem(
      "salt-and-pepper-chips.jpg",
      "Salt & Pepper Chips",
      "",
      "£4.00"
    ),
    new MenuItem(
      "salt-and-pepper-prawns.jpg",
      "Salt & Pepper King Prawns",
      "",
      "£8.00"
    ),
  ],
  soups: [
    new MenuItem(
      "chicken-and-mushroom-soup.jpg",
      "Chicken & Mushroom Soup",
      "",
      "£4.80"
    ),
    new MenuItem(
      "chicken-and-noodle-soup.jpg",
      "Chicken & Noodle Soup",
      "",
      "£4.80"
    ),
    new MenuItem("hot-and-sour-soup.jpg", "Hot & Sour Soup", "", "£4.80"),
    new MenuItem("tom-yam-soup.jpg", "Tom Yam Soup", "", "£5.00"),
  ],
  sweetAndSourDishes: [
    new MenuItem(
      "sweet-and-sour-chicken-balls.jpg",
      "Sweet & Sour Chicken Balls",
      "",
      "£7.00"
    ),
    new MenuItem(
      "sweet-and-sour-chicken-hong-kong.jpg",
      "Sweet & Sour Chicken Hong Kong Style",
      "",
      "£7.00"
    ),
    new MenuItem(
      "sweet-and-sour-pork-hong-kong.jpg",
      "Sweet & Sour Pork Hong Kong Style",
      "",
      "£7.00"
    ),
    new MenuItem(
      "sweet-and-sour-king-prawns-hong-kong.jpg",
      "Sweet & Sour King Prawns Hong Kong Style",
      "",
      "£8.50"
    ),
    new MenuItem(
      "sweet-and-sour-mixed-veg-hong-kong.jpg",
      "Sweet & Sour Mixed Vegetables",
      "",
      "£6.00"
    ),
  ],
  curryDishes: [
    new MenuItem(
      "chicken-with-curry-sauce.jpg",
      "Chicken with Curry Sauce",
      "",
      "£7.00"
    ),
    new MenuItem(
      "pork-with-curry-sauce.jpg",
      "Pork with Curry Sauce",
      "",
      "£7.00"
    ),
    new MenuItem(
      "beef-with-curry-sauce.jpg",
      "Beef with Curry Sauce",
      "",
      "£7.00"
    ),
    new MenuItem(
      "king-prawn-with-curry-sauce.jpg",
      "King Prawn with Curry Sauce",
      "",
      "£8.00"
    ),
    new MenuItem(
      "shrimp-with-curry-sauce.jpg",
      "Shrimp with Curry Sauce",
      "",
      "£7.00"
    ),
    new MenuItem(
      "duck-with-curry-sauce.jpg",
      "Duck with Curry Sauce",
      "",
      "£8.50"
    ),
    new MenuItem(
      "house-special-with-curry-sauce.jpg",
      "House Special with Curry Sauce",
      "",
      "£7.50"
    ),
  ],
  thaiCurryDishes: [
    new MenuItem(
      "chicken-with-red-curry.jpg",
      "Chicken with Red Curry",
      "",
      "£8.50"
    ),
    new MenuItem(
      "chicken-with-green-curry.jpg",
      "Chicken with Green Curry",
      "",
      "£8.50"
    ),
    new MenuItem(
      "beef-with-green-curry.jpg",
      "Beef with Green Curry",
      "",
      "£8.50"
    ),
    new MenuItem(
      "king-prawn-with-green-curry.jpg",
      "King Prawn with Green Curry",
      "",
      "£10.00"
    ),
    new MenuItem(
      "house-special-with-green-curry.jpg",
      "House Special with Green Curry",
      "",
      "£10.00"
    ),
  ],
  chickenDishes: [
    new MenuItem(
      "chicken-with-black-bean-and-chilli.jpg",
      "Chicken with Black Bean & Chilli",
      "",
      "£7.00"
    ),
    new MenuItem(
      "chicken-with-mushrooms.jpg",
      "Chicken with Mushrooms",
      "",
      "£7.00"
    ),
    new MenuItem(
      "chicken-with-ginger-and-spring-onion.jpg",
      "Chicken with Ginger & Spring Onion",
      "",
      "£7.00"
    ),
    new MenuItem(
      "chicken-with-black-pepper.jpg",
      "Chicken with Black Pepper",
      "",
      "£7.00"
    ),
    new MenuItem(
      "crispy-chicken-with-honey-sauce.jpg",
      "Crispy Chicken with Honey Sauce",
      "",
      "£7.00"
    ),
    new MenuItem(
      "chicken-with-oyster-sauce.jpg",
      "Chicken with Oyster Sauce",
      "",
      "£7.00"
    ),
    new MenuItem(
      "chicken-with-cashew-nuts-in-plum-sauce.jpg",
      "Chicken with Cashew Nuts in Plum Sauce",
      "",
      "£7.50"
    ),
    new MenuItem(
      "chicken-with-satay-sauce.jpg",
      "Chicken with Satay Sauce",
      "",
      "£7.50"
    ),
    new MenuItem(
      "chicken-with-yellow-bean-sauce.jpg",
      "Chicken with Yellow Bean Sauce",
      "",
      "£7.00"
    ),
    new MenuItem(
      "chicken-with-pineapple.jpg",
      "Chicken with Pineapple",
      "",
      "£7.00"
    ),
    new MenuItem(
      "chicken-with-cashew-nuts.jpg",
      "Chicken with Cashew Nuts",
      "",
      "£7.50"
    ),
    new MenuItem(
      "chicken-with-szechuan-sauce.jpg",
      "Chicken with Szechuan Sauce",
      "",
      "£7.50"
    ),
    new MenuItem(
      "chicken-with-sweet-and-sour-sauce.jpg",
      "Chicken with Sweet & Sour Sauce",
      "",
      "£7.00"
    ),
    new MenuItem(
      "chicken-with-chilli-sauce.jpg",
      "Chicken with Chilli Sauce",
      "",
      "£7.00"
    ),
    new MenuItem(
      "chicken-with-garlic-sauce.jpg",
      "Chicken with Garlic Sauce",
      "",
      "£7.00"
    ),
    new MenuItem(
      "house-special-chicken.jpg",
      "House Special Chicken",
      "",
      "£8.00"
    ),
  ],
  beefDishes: [
    new MenuItem(
      "beef-with-black-pepper.jpg",
      "Beef with Black Pepper",
      "",
      "£7.50"
    ),
    new MenuItem("beef-with-mushrooms.jpg", "Beef with Mushrooms", "", "£7.50"),
    new MenuItem(
      "beef-with-oyster-sauce.jpg",
      "Beef with Oyster Sauce",
      "",
      "£7.50"
    ),
    new MenuItem(
      "beef-with-ginger-and-spring-onion.jpg",
      "Beef with Ginger & Spring Onion",
      "",
      "£7.50"
    ),
    new MenuItem(
      "beef-with-bean-sprouts.jpg",
      "Beef with Bean Sprouts",
      "",
      "£7.50"
    ),
    new MenuItem(
      "beef-with-mixed-veg.jpg",
      "Beef with Mixed Vegetables",
      "",
      "£7.50"
    ),
    new MenuItem(
      "beef-with-chilli-sauce.jpg",
      "Beef with Chilli Sauce",
      "",
      "£7.50"
    ),
    new MenuItem(
      "beef-with-cashew-nuts-in-plum-sauce.jpg",
      "Beef with Cashew Nuts in Plum Sauce",
      "",
      "£7.50"
    ),
    new MenuItem("beef-with-tomatoes.jpg", "Beef with Tomatoes", "", "£7.50"),
    new MenuItem(
      "beef-with-satay-sauce.jpg",
      "Beef with Satay Sauce",
      "",
      "£7.50"
    ),
    new MenuItem(
      "beef-with-cashew-nuts-and-pineapple.jpg",
      "Beef with Cashew Nuts & Pineapple",
      "",
      "£7.50"
    ),
    new MenuItem(
      "beef-with-yellow-bean-sauce.jpg",
      "Beef with Yellow Bean Sauce",
      "",
      "£7.50"
    ),
    new MenuItem(
      "beef-with-peking-sauce.jpg",
      "Beef with Peking Sauce",
      "",
      "£7.50"
    ),
    new MenuItem(
      "beef-with-garlic-sauce.jpg",
      "Beef with Garlic Sauce",
      "",
      "£7.50"
    ),
  ],
  duckDishes: [
    new MenuItem(
      "duck-with-black-bean-and-chilli.jpg",
      "Duck with Black Bean & Chilli",
      "",
      "£9.50"
    ),
    new MenuItem(
      "duck-with-cashew-nuts-in-plum-sauce.jpg",
      "Duck with Cashew Nuts in Plum Sauce",
      "",
      "£9.50"
    ),
    new MenuItem("duck-with-mushrooms.jpg", "Duck with Mushrooms", "", "£9.50"),
    new MenuItem(
      "duck-with-orange-sauce.jpg",
      "Duck with Orange Sauce",
      "",
      "£9.50"
    ),
    new MenuItem(
      "duck-with-szechuan-sauce.jpg",
      "Duck with Szechuan Sauce",
      "",
      "£9.50"
    ),
    new MenuItem(
      "duck-with-peking-sauce.jpg",
      "Duck with Peking Sauce",
      "",
      "£9.50"
    ),
    new MenuItem("duck-with-pineapple.jpg", "Duck with Pineapple", "", "£9.50"),
    new MenuItem(
      "duck-with-cashew-nuts.jpg",
      "Duck with Cashew Nuts",
      "",
      "£9.50"
    ),
  ],
  kingPrawnDishes: [
    new MenuItem(
      "king-prawn-with-black-bean-and-chilli.jpg",
      "King Prawn with Black Bean & Chilli",
      "",
      "£8.80"
    ),
    new MenuItem(
      "king-prawn-with-ginger-and-spring-onion.jpg",
      "King Prawn with Ginger & Spring Onion",
      "",
      "£8.80"
    ),
    new MenuItem(
      "king-prawn-with-mushrooms.jpg",
      "King Prawn with Mushrooms",
      "",
      "£8.80"
    ),
    new MenuItem(
      "king-prawn-with-cashew-nuts.jpg",
      "King Prawn with Cashew Nuts",
      "",
      "£8.80"
    ),
    new MenuItem(
      "king-prawn-with-peking-sauce.jpg",
      "King Prawn with Peking Sauce",
      "",
      "£8.80"
    ),
    new MenuItem(
      "king-prawn-with-pineapple.jpg",
      "King Prawn with Pineapple",
      "",
      "£8.80"
    ),
  ],
  eggFooYungDishes: [
    new MenuItem(
      "chicken-egg-foo-yung.jpg",
      "Chicken Egg Foo Yung",
      "",
      "£7.50"
    ),
    new MenuItem("beef-egg-foo-yung.jpg", "Beef Egg Foo Yung", "", "£7.50"),
    new MenuItem(
      "king-prawn-egg-foo-yung.jpg",
      "King Prawn Egg Foo Yung",
      "",
      "£8.00"
    ),
    new MenuItem("shrimp-egg-foo-yung.jpg", "Shrimp Egg Foo Yung", "", "£8.00"),
    new MenuItem(
      "mushroom-egg-foo-yung.jpg",
      "Mushroom Egg Foo Yung",
      "",
      "£8.00"
    ),
    new MenuItem(
      "mixed-veg-egg-foo-yung.jpg",
      "Mixed Vegetable Egg Foo Yung",
      "",
      "£8.00"
    ),
  ],
  riceDishes: [
    new MenuItem("boiled-rice.jpg", "Boiled Rice", "", "£3.50"),
    new MenuItem("egg-fried-rice.jpg", "Egg Fried Rice", "", "£3.80"),
    new MenuItem(
      "yang-chow-fried-rice.jpg",
      "Yang Chow Fried Rice",
      "",
      "£5.50"
    ),
    new MenuItem(
      "singapore-fried-rice.jpg",
      "Singapore Fried Rice",
      "",
      "£5.50"
    ),
    new MenuItem("special-fried-rice.jpg", "Special Fried Rice", "", "£5.50"),
    new MenuItem("chicken-fried-rice.jpg", "Chicken Fried Rice", "", "£5.00"),
    new MenuItem(
      "king-prawn-fried-rice.jpg",
      "King Prawn Fried Rice",
      "",
      "£6.00"
    ),
    new MenuItem("beef-fried-rice.jpg", "Beef Fried Rice", "", "£5.00"),
    new MenuItem("duck-fried-rice.jpg", "Duck Fried Rice", "", "£5.50"),
    new MenuItem("shrimp-fried-rice.jpg", "Shrimp Fried Rice", "", "£5.00"),
    new MenuItem(
      "house-special-fried-rice.jpg",
      "House Special Fried Rice",
      "",
      "£6.00"
    ),
    new MenuItem(
      "chicken-and-prawn-fried-rice.jpg",
      "Chicken & Prawn Fried Rice",
      "",
      "£5.50"
    ),
    new MenuItem(
      "chicken-sweetcorn-and-mushroom-fried-rice.jpg",
      "Chicken, Sweetcorn & Mushroom Fried Rice",
      "",
      "£5.50"
    ),
    new MenuItem(
      "duck-fried-rice-with-black-bean-sauce.jpg",
      "Duck Fried Rice with Black Bean Sauce",
      "",
      "£6.50"
    ),
    new MenuItem(
      "beef-and-prawn-fried-rice-with-black-bean-sauce.jpg",
      "Beef & Prawn Fried Rice with Black Bean Sauce",
      "",
      "£6.50"
    ),
    new MenuItem(
      "mixed-veg-fried-rice.jpg",
      "Mixed Vegetable Fried Rice",
      "",
      "£5.00"
    ),
  ],
  chowMeinNoodlesDishes: [
    new MenuItem("chicken-chow-mein.jpg", "Chicken Chow Mein", "", "£8.50"),
    new MenuItem("beef-chow-mein.jpg", "Beef Chow Mein", "", "£8.50"),
    new MenuItem(
      "king-prawn-chow-mein.jpg",
      "King Prawn Chow Mein",
      "",
      "£8.50"
    ),
    new MenuItem("shrimp-chow-mein.jpg", "Shrimp Chow Mein", "", "£8.50"),
    new MenuItem("singapore-chow-mein.jpg", "Singapore Chow Mein", "", "£8.50"),
    new MenuItem(
      "house-special-chow-mein.jpg",
      "House Special Chow Mein",
      "",
      "£8.50"
    ),
    new MenuItem("veg-chow-mein.jpg", "Vegetable Chow Mein", "", "£6.50"),
    new MenuItem("mushroom-chow-mein.jpg", "Mushroom Chow Mein", "", "£6.50"),
  ],
  vegetableDishes: [
    new MenuItem(
      "stir-fried-mixed-veg.jpg",
      "Stir Fried Mixed Vegetables",
      "",
      "£6.50"
    ),
    new MenuItem(
      "mixed-veg-with-oyster-sauce.jpg",
      "Mixed Vegetables with Oyster Sauce",
      "",
      "£6.50"
    ),
    new MenuItem("veg-spring-rolls.jpg", "Vegetable Spring Rolls", "", "£4.50"),
    new MenuItem(
      "veg-satay-skewers.jpg",
      "Vegetable Satay Skewers",
      "",
      "£5.00"
    ),
  ],
  sideDishes: [
    new MenuItem("chips.jpg", "Chips", "", "£3.50"),
    new MenuItem(
      "fried-rice-with-any-sauce.jpg",
      "Fried Rice with Any Sauce",
      "",
      "£4.00"
    ),
    new MenuItem("prawn-crackers.jpg", "Prawn Crackers", "", "£2.50"),
  ],
  desserts: [
    new MenuItem("banana-fritters.jpg", "Banana Fritters", "", "£5.00"),
    new MenuItem("pineapple-fritters.jpg", "Pineapple Fritters", "", "£5.00"),
    new MenuItem("mixed-fritters.jpg", "Mixed Fritters", "", "£5.00"),
  ],
  sauces: [
    new MenuItem("", "Curry Sauce", "", "£3.20"),
    new MenuItem("", "Sweet & Sour Sauce", "", "£3.20"),
    new MenuItem("", "BBQ Sauce", "", "£3.20"),
    new MenuItem("", "Satay Sauce", "", "£3.20"),
    new MenuItem("", "Black Bean Sauce", "", "£3.20"),
    new MenuItem("", "Oyster Sauce", "", "£3.20"),
    new MenuItem("", "Chilli Sauce", "", "£3.20"),
    new MenuItem("", "Peking Sauce", "", "£3.20"),
    new MenuItem("", "Yellow Bean Sauce", "", "£3.20"),
    new MenuItem("", "Garlic Sauce", "", "£3.20"),
    new MenuItem("", "Gravy Sauce", "", "£3.20"),
    new MenuItem("", "Honey Chilli Sauce", "", "£3.20"),
  ],
  mealDeals: [
    new MenuItem(
      "set-meal-a.jpg",
      "Set Meal A (For 2 Persons)",
      "Sweet & Sour Chicken Hong Kong Style, Beef with Black Bean Sauce, Chicken Curry, Egg Fried Rice, Prawn Crackers, Fortune Cookies",
      "£40.00"
    ),
    new MenuItem(
      "set-meal-b.jpg",
      "Set Meal B (For 3 Persons)",
      "Crispy Pancake Roll, Barbecue Spare Ribs, Chicken with Honey Chilli Sauce, Special Curry, Sweet & Sour King Prawn Cantonese Style, Yang Chow Fried Rice, Banana Fritter, Prawn Crackers, Fortune Cookies",
      "£48.00"
    ),
  ],
};

export default menuData;
