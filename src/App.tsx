import "./index.css";
import Card from "./components/Card";
import 'bootstrap/dist/css/bootstrap.min.css';

const data = {
  title: "title",
  text: "text",
  link: {
    text: "text",
    href: "https://olimpoks.ru",
  },
};

const data2 = {
  title: "title",
  text: "text",
  link: {
    text: "text",
    href: "https://olimpoks.ru",
  },
  image: {
    src: "https://static-cse.canva.com/blob/847132/paulskorupskas7KLaxLbSXAunsplash2.jpg",
    alt: "alt",
  },
};

export default function App() {
  return (
    <>
      <Card data={data} />
      <Card data={data2} />
    </>
  );
}
