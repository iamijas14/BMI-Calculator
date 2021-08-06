const Header = ({ heading }) => {
  return (
    <>
      <nav className="bg">
        <div className="nav">
          <span className="header">{heading}</span>
        </div>
      </nav>
    </>
  );
};

export default Header;
