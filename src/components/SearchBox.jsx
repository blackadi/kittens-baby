const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa4-l bg-light-yellow shadow-5">
      <fieldset className="bg-light-red mw7 center pa4 br2-ns ba b--black-10 cf bn ma0 pa0">
        <input
          className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 br2-ns br--left-ns"
          type="search"
          placeholder="search kittens"
          onChange={searchChange}
        />
      </fieldset>
    </div>
  );
};

export default SearchBox;
