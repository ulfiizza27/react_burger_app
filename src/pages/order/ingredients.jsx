import breadTop from "../../assets/img/top.jpg";
import breadBottom from "../../assets/img/bottom.jpg";
import cheese from "../../assets/img/cheese.png";
import lettuce from "../../assets/img/lettuce.png";
import tomato from "../../assets/img/tomato.jpg";
import meat from "../../assets/img/meat.jpg";
import pickles from "../../assets/img/pickles.png";
import mayo from "../../assets/img/mayo.png";
import sauce from "../../assets/img/sauce.png";

const imageStyle = { maxWidth: '200px', maxHeight: '100px', margin: 'auto' };

const Cheese = () => <img src={cheese} alt="cheese" style={imageStyle} />;
const Tomato = () => <img src={tomato} alt="tomato" style={imageStyle} />;
const Lettuce = () => <img src={lettuce} alt="lettuce" style={imageStyle} />;
const Meat = () => <img src={meat} alt="meat" style={imageStyle} />;
const Mayo = () => <img src={mayo} alt="mayo" style={imageStyle} />;
const Sauce = () => <img src={sauce} alt="sauce" style={imageStyle} />;
const Pickles = () => <img src={pickles} alt="pickles" style={imageStyle} />;
export const BreadTop = () => (
    <img src={breadTop} alt="breadTop" style={imageStyle}/>
);
export const BreadBottom = () => (
    <img src={breadBottom} alt="breadBottom" style={imageStyle}/>
);
  
  export const Ingredient = ({type, onClickX}) => (
    <div className="relative">
      <div onClick={onClickX} className="absolute -top-1 -right-2 text-[8px] bg-red-500 rounded-full w-4 h-4 flex justify-center items-center text-white cursor-pointer opacity-0 hover:opacity-[100!important] z-10">
        X
      </div>
      {type === "cheese" && <Cheese />}
      {type === "meat" && <Meat />}
      {type === "lettuce" && <Lettuce />}
      {type === "tomato" && <Tomato />}
      {type === "pickles" && <Pickles />}
      {type === "mayo" && <Mayo />}
      {type === "sauce" && <Sauce />}
    </div>
  );