import './Filter.css';

const Filter = ({activeFilter, setActiveFilter}) => {
    return (
        <div className="filter-box">
            <span className="filter-label">Sort:</span>
            <button
                className={`filter-button all ${activeFilter === 'all' ? 'active' : ''}`}
                onClick={() => setActiveFilter('all')}
            >
                All
            </button>
            <button
                className={`filter-button completed ${activeFilter === 'completed' ? 'active' : ''}`}
                onClick={() => setActiveFilter('completed')}
            >
                Completed
            </button>
            <button
                className={`filter-button not-completed ${activeFilter === 'not-completed' ? 'active' : ''}`}
                onClick={() => setActiveFilter('not-completed')}
            >
                Not Completed
            </button>
        </div>
    );
};

export default Filter;