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

const imgWrapper = (category) => {
  if (category === "Apple") {
    return (
      <div className="icon-wrapper">
        <img src={Apple} alt="Apple" className="img" />
      </div>
    );
  }
  if (category === "Banana") {
    return (
      <div className="icon-wrapper">
        <img src={Banana} alt="Banana" className="img" />
      </div>
    );
  }
  if (category === "Orange") {
    return (
      <div className="icon-wrapper">
        <img src={Orange} alt="BaOrangenana" className="img" />
      </div>
    );
  }
  if (category === "Lemon") {
    return (
      <div className="icon-wrapper">
        <img src={Lemon} alt="Lemon" className="img" />
      </div>
    );
  }
  if (category === "Pineapple") {
    return (
      <div className="icon-wrapper">
        <img src={Pineapple} alt="Pineapple" className="img" />
      </div>
    );
  }
  if (category === "Mango") {
    return (
      <div className="icon-wrapper">
        <img src={Mango} alt="Banana" className="img" />
      </div>
    );
  }
  if (category === "Peach") {
    return (
      <div className="icon-wrapper">
        <img src={Peach} alt="Peach" className="img" />
      </div>
    );
  }
  if (category === "Cherry") {
    return (
      <div className="icon-wrapper">
        <img src={Cherry} alt="Banana" className="img" />
      </div>
    );
  }
  if (category === "Strawberry") {
    return (
      <div className="icon-wrapper">
        <img src={Strawberry} alt="Strawberry" className="img" />
      </div>
    );
  }
  if (category === "Grape") {
    return (
      <div className="icon-wrapper">
        <img src={Grape} alt="Grape" className="img" />
      </div>
    );
  }
};

const UserCategory = (category) => {
  return imgWrapper(category);
};

export default UserCategory;
