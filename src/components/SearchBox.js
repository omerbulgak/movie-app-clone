import React from 'react'

function SearchBox({searchValue, setSearchValue}) {
    return (
        <div classname="col col-sm-4">
            <input className="form-control"
                value={searchValue}
                placeholder="Type to search..."
                onChange={(e) => setSearchValue(e.target.value)}
            ></input>
        </div>
    )
}

export default SearchBox
