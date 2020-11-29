
const products = [];

module.exports = class Product {
    constructor(name, description, price) {
        this.name = name;
        this.description = description;
        this.price = price;
    }

    save() {
        products.push(this);
    }

    static getAll() {
        return products;
    }
}