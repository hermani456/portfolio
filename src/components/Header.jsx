const Header = ({ children }) => {
  return (
    <h2 className="text-3xl lg:text-5xl font-orbitron font-semibold text-sec/80">
      {children}
    </h2>
  );
};

export default Header;
