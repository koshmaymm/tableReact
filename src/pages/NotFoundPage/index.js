import { Link } from "react-router-dom";
import Layout from "../../layout";
import "./index.css";
export default function NotFoundPage() {
  return (
    <Layout className="not-found-page">
      <h1>Oops! You seem to be lost.</h1>
      <p>Here are some helpful links:</p>
      <Link to="/">Home</Link>
    </Layout>
  );
}
