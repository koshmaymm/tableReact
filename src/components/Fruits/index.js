import Apple from "../../images/fruits/Apple.jpg";
import Banana from "../../images/fruits/Banana.png";
import Orange from "../../images/fruits/Orange.svg";
import Lemon from "../../images/fruits/Lemon.png";
import Pineapple from "../../images/fruits/Pineapple.svg";
import Mango from "../../images/fruits/Mango.svg";
import Peach from "../../images/fruits/Peach.png";
import Cherry from "../../images/fruits/Cherry.png";
import Strawberry from "../../images/fruits/Strawberry.svg";
import Grape from "../../images/fruits/Grape.png";

import "./index.css";

const Fruits = ({ filterByCategory, checkedCategory = "" }) => {
  const handleClick = (category) => {
    filterByCategory(category);
  };

  const getClassName = (str) => {
    return str === checkedCategory ? "fruit-item__checked" : "";
  }

  return (
    <div className="fruits">
      <div className={`fruit-item ${getClassName("Apple")}`}>
        <img
          src={Apple}
          alt="Apple"
          className="img"
          onClick={() => handleClick("Apple")}
        />
      </div>
      <div className={`fruit-item ${getClassName("Banana")}`}>
        <img
          src={Banana}
          alt="Banana"
          className="img"
          onClick={() => handleClick("Banana")}
        />
      </div>
      <div className={`fruit-item ${getClassName("Orange")}`}>
        <img
          src={Orange}
          alt="Orange"
          className="img"
          onClick={() => handleClick("Orange")}
        />
      </div>
      <div className={`fruit-item ${getClassName("Lemon")}`}>
        <img
          src={Lemon}
          alt="Lemon"
          className="img"
          onClick={() => handleClick("Lemon")}
        />
      </div>
      <div className={`fruit-item ${getClassName("Pineapple")}`}>
        <img
          src={Pineapple}
          alt="Pineapple"
          className="img"
          onClick={() => handleClick("Pineapple")}
        />
      </div>
      <div className={`fruit-item ${getClassName("Mango")}`}>
        <img
          src={Mango}
          alt="Mango"
          className="img"
          onClick={() => handleClick("Mango")}
        />
      </div>
      <div className={`fruit-item ${getClassName("Peach")}`}>
        <img
          src={Peach}
          alt="Peach"
          className="img"
          onClick={() => handleClick("Grape")}
        />
      </div>
      <div className={`fruit-item ${getClassName("Cherry")}`}>
        <img
          src={Cherry}
          alt="Cherry"
          className="img"
          onClick={() => handleClick("Cherry")}
        />
      </div>
      <div className={`fruit-item ${getClassName("Strawberry")}`}>
        <img
          src={Strawberry}
          alt="Strawberry"
          className="img"
          onClick={() => handleClick("Strawberry")}
        />
      </div>
      <div className={`fruit-item ${getClassName("Grape")}`}>
        <img
          src={Grape}
          alt="Grape"
          className="img"
          onClick={() => handleClick("Grape")}
        />
      </div>
    </div>
  );
};

export default Fruits;
