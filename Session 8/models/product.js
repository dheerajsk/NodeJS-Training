
// const products = [];

module.exports = class Product {
    constructor(name, description, price, id) {
        this.name = name;
        this.description = description;
        this.price = price;
        this._id = id;
    }

    // save() {
    //     products.push(this);
    // }

    // static getAll() {
    //     return products;
    // }
}