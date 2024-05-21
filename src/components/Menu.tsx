import React from "react";
import menuData from "../menu/menu";

interface MenuItem {
  image: string;
  name: string;
  description: string;
  price: string;
}

interface ICardProps {
  id: string;
  heading: string;
  array: MenuItem[];
  wide?: boolean;
}

const MenuCard: React.FC<ICardProps> = (props: ICardProps) => {
  return (
    <div id={props.id} className="menu-category">
      <h3>{props.heading}</h3>
      <div className="menu-items">
        {props.array.map((item, index) => (
          <div
            className={props.wide === true ? "menu-item wide" : "menu-item"}
            key={index}
          >
            {item.image ? <img src={item.image} alt={item.name} /> : ""}
            <h4>{item.name}</h4>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Menu: React.FC = () => {
  return (
    <section id="menu" className="section">
      <h2>Our Menu</h2>
      <nav className="menu-nav">
        <ul>
          <li>
            <a href="#munchieBox">Munchie Box</a>
          </li>
          <li>
            <a href="#chefsCombo">Chef's Combo</a>
          </li>
          <li>
            <a href="#crispyAromaticDuck">Crispy Aromatic Duck</a>
          </li>
          <li>
            <a href="#dimSum">Dim Sum</a>
          </li>
          <li>
            <a href="#saltAndPepperDishes">Salt & Pepper Dishes</a>
          </li>
          <li>
            <a href="#soups">Soups</a>
          </li>
          <li>
            <a href="#sweetAndSourDishes">Sweet & Sour Dishes</a>
          </li>
          <li>
            <a href="#curryDishes">Curry Dishes</a>
          </li>
          <li>
            <a href="#thaiCurryDishes">Thai Curry Dishes</a>
          </li>
          <li>
            <a href="#chickenDishes">Chicken Dishes</a>
          </li>
          <li>
            <a href="#beefDishes">Beef Dishes</a>
          </li>
          <li>
            <a href="#duckDishes">Duck Dishes</a>
          </li>
          <li>
            <a href="#kingPrawnDishes">King Prawn Dishes</a>
          </li>
          <li>
            <a href="#eggFooYungDishes">Egg Foo Yung Dishes</a>
          </li>
          <li>
            <a href="#riceDishes">Rice Dishes</a>
          </li>
          <li>
            <a href="#chowMeinNoodlesDishes">Chow Mein Noodles Dishes</a>
          </li>
          <li>
            <a href="#vegetableDishes">Vegetable Dishes</a>
          </li>
          <li>
            <a href="#sideDishes">Side Dishes</a>
          </li>
          <li>
            <a href="#desserts">Desserts</a>
          </li>
          <li>
            <a href="#sauces">Sauces</a>
          </li>
          <li>
            <a href="#mealDeals">Meal Deals</a>
          </li>
        </ul>
      </nav>

      <MenuCard
        id="munchieBox"
        heading="Munchie Box"
        array={menuData.munchieBox}
        wide={true}
      />
      <MenuCard
        id="chefsCombo"
        heading="Chef's Combo"
        array={menuData.chefsCombo}
        wide={true}
      />
      <MenuCard
        id="crispyAromaticDuck"
        heading="Crispy Aromatic Duck"
        array={menuData.crispyAromaticDuck}
      />
      <MenuCard id="dimSum" heading="Dim Sum" array={menuData.dimSum} />
      <MenuCard
        id="saltAndPepperDishes"
        heading="Salt & Pepper Dishes"
        array={menuData.saltAndPepperDishes}
      />
      <MenuCard id="soups" heading="Soups" array={menuData.soups} />
      <MenuCard
        id="sweetAndSourDishes"
        heading="Sweet & Sour Dishes"
        array={menuData.sweetAndSourDishes}
      />
      <MenuCard
        id="curryDishes"
        heading="Curry Dishes"
        array={menuData.curryDishes}
      />
      <MenuCard
        id="thaiCurryDishes"
        heading="Thai Curry Dishes"
        array={menuData.thaiCurryDishes}
      />
      <MenuCard
        id="chickenDishes"
        heading="Chicken Dishes"
        array={menuData.chickenDishes}
      />
      <MenuCard
        id="beefDishes"
        heading="Beef Dishes"
        array={menuData.beefDishes}
      />
      <MenuCard
        id="duckDishes"
        heading="Duck Dishes"
        array={menuData.duckDishes}
      />
      <MenuCard
        id="kingPrawnDishes"
        heading="King Prawn Dishes"
        array={menuData.kingPrawnDishes}
      />
      <MenuCard
        id="eggFooYungDishes"
        heading="Egg Foo Yung Dishes"
        array={menuData.eggFooYungDishes}
      />
      <MenuCard
        id="riceDishes"
        heading="Rice Dishes"
        array={menuData.riceDishes}
      />
      <MenuCard
        id="chowMeinNoodlesDishes"
        heading="Chow Mein Noodles Dishes"
        array={menuData.chowMeinNoodlesDishes}
      />
      <MenuCard
        id="vegetableDishes"
        heading="Vegetable Dishes"
        array={menuData.vegetableDishes}
      />
      <MenuCard
        id="sideDishes"
        heading="Side Dishes"
        array={menuData.sideDishes}
      />
      <MenuCard id="desserts" heading="Desserts" array={menuData.desserts} />
      <MenuCard id="sauces" heading="Sauces" array={menuData.sauces} />
      <MenuCard
        id="mealDeals"
        heading="Meal Deals"
        array={menuData.mealDeals}
        wide={true}
      />
    </section>
  );
};

export default Menu;
