const Scroll = ({ children }) => {
  //this is similar to props.children which pass the full CardList.jsx as a childern from the <Scoll> JSX component
  return <div className="scroll">{children}</div>;
};

export default Scroll;
