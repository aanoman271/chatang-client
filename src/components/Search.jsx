const Search = ({ searchTerm, setSearchTerm }) => {
  console.log(searchTerm);
  return (
    <div className="user-search-area">
      <input
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        type="text"
        className="user-search-text"
      />
      <i className="fa fa-search user-search-btn" aria-hidden="true"></i>
    </div>
  );
};

export default Search;
