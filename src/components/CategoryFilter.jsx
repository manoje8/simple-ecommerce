const CategoryFilter = ({ onFilter }) => {
    const categories = ['All', 'Electronics', 'Clothing', 'Home Appliances'];

    const handleFilter = (category) => {
        onFilter(category === 'All' ? null : category);
    };

    return (
        <div className="d-flex justify-content-center my-3 mx-4">
            {categories.map((category) => (
                <button
                key={category}
                className="btn btn-outline-primary mx-2"
                onClick={() => handleFilter(category)}
                >
                {category}
                </button>
            ))}
        </div>
    )
}

export default CategoryFilter