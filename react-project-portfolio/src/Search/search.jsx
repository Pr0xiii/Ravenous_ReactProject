import React from 'react';

function Search() {
    return(
        <div className="search">
            <ul className="filters">
                <li>Best Match</li>
                <li>Highest Rated</li>
                <li>Most Reviewed</li>
            </ul>
            <form action="" method="get" className="search-form">
                <div className="search-filters">
                    <input type="text" name="business" id="business" placeholder="Search Business"/>
                    <input type="text" name="location" id="location" placeholder="Where?"/>
                </div>
                <div className="submit-button">
                    <input type="submit" value="Let's go" className="submit"/>
                </div>
            </form>
        </div>
    );
}

export default Search;