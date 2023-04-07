import Header from "../components/Header";
import Footer from "../components/Footer/Footer";
import "./index.css";

const Layout = ({ children, className }) => {
  return (
    <div className={`layuot ${className}`}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
