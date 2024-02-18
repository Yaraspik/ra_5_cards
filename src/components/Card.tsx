import Image from "./Image";

type CardProps = {
  title: string;
  text: string;
  link: {
    text: string;
    href: string;
  };
  image?: {
    src: string;
    alt: string;
  };
};

const Card = ({ data }: { data: CardProps }): JSX.Element => {
  const { title, text, link, image } = data;
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        {image ? <Image src={image?.src} alt={image?.alt} /> : null}
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <a href={link.href} className="btn btn-primary">
            {link.text}
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
