class FilterContext {
    constructor(strategy = null) {
        this.strategy = strategy;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    applyFilter(data, queries) {
        if (!this.strategy) {
            throw new Error('Strategy is not set');
        }
        return this.strategy.filter(data, queries);
    }
}

export default FilterContext;
