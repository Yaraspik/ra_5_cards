const Image = ({ src, alt }: { src: string; alt: string }): JSX.Element => {
    return <img src={src} className="card-img-top" alt={alt}></img>;
  };
  
  export default Image;
  