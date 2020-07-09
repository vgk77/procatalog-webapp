const faker = require('faker');
const _ = require('lodash');

module.exports = () => {
    const data = {
        categories: [],
        items: [],
    };

    _.fill(Array(_.random(10, 30)), 0).forEach(value => {
        data.categories.push({
            category: faker.commerce.department(),
            tags: _.fill(Array(_.random(1, 10)), 0).map(value =>
                faker.commerce.product()
            ),
        });
    });

    _.fill(Array(_.random(100, 1000)), 0).forEach((value, index) => {
        data.items.push({
            index,
            _id: faker.random.uuid(),
            name: faker.commerce.productName(),
            category: faker.commerce.department(),
            tags: _.fill(Array(_.random(1, 10)), 0).map(value =>
                faker.commerce.product()
            ),
            filters: [
                {
                    name: 'Material',
                    helper: 'Product material',
                    values: [faker.commerce.productMaterial()],
                },
                {
                    name: 'Adjective',
                    helper: 'Product adjective',
                    values: [faker.commerce.productAdjective()],
                },
            ],
        });
    });
    return data;
};
