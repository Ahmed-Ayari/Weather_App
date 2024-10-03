export default function Search({ search, setSearch, handleSearch}){
    return (
        <div className="search_engine">
            <input type="text" className="city_search" placeholder="City Name" name="search" value={search} onChange={(event) => setSearch(event.target.value)}/>
            <button className="search_btn" onClick={handleSearch}>Search Weather</button>
        </div>
    )
}