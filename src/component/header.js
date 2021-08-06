const Header = ({ heading }) => {
  return (
    <>
      <nav className="bg">
        <div class="nav">
          <span className="header">{heading}</span>
        </div>
      </nav>
    </>
  );
};

export default Header;
