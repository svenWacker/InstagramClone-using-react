const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footer-wrapper">
      {/* <a> */}
      Copyright<sup>©</sup> <span className="year">{year}</span>
      {/* </a> */}
    </div>
  );
};
export default Footer;
