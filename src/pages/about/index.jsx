import React from "react";
import burgerImage from "../../assets/img/burger.png";

export default function About() {
  return (
    <div className="pt-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>
        <div className="flex justify-center mb-8">
          <img src={burgerImage} alt="Burger" className="w-72 h-auto rounded-lg shadow-lg" />
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-2">Welcome to BurgerApp</h2>
          <p className="text-gray-700 mb-4">
            BurgerApp is your ultimate destination for delicious burgers made with the finest ingredients.
          </p>
          <p className="text-gray-700">
            Our passion for crafting mouthwatering burgers drives us to constantly innovate and exceed your expectations.
          </p>
        </div>
      </div>
    </div>
  );
}