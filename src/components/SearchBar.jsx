import { useState } from "react";

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = ({target: {value}}) => {
        setSearchTerm(value);
        onSearch(value);
    };
    return (
        <div className="my-3">
            <input
                type="text"
                className="form-control"
                placeholder="Search products..."
                value={searchTerm}
                onChange={handleSearch}
            />
        </div>
    )
}

export default SearchBar