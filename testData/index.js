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
            tags: _.uniq(_.fill(Array(_.random(2, 10)), 0).map(value =>
                faker.commerce.product()
            )),
        });
    });

    _.fill(Array(_.random(100, 1000)), 0).forEach((value, index) => {
        data.items.push({
            index,
            _id: faker.random.uuid(),
            name: faker.commerce.productName(),
            category: faker.commerce.department(),
            tags: _.uniq(_.fill(Array(_.random(2, 10)), 0).map(value =>
                faker.commerce.product()
            )),
            images: _.uniq(_.fill(Array(_.random(2, 15)), 0).map(value =>
                faker.image.avatar()
            )),
            description: _.uniq(_.fill(Array(_.random(0, 5)), 0).map(value =>
                faker.lorem.paragraph(),
            )),
            specification: _.uniq(_.fill(Array(_.random(2, 15)), 0).map(value => ({
                title: faker.commerce.department(),
                values: _.uniq(_.fill(Array(_.random(2, 15)), 0).map(value => ({
                    title: faker.commerce.productName(),
                    value: faker.commerce.price(),
                }))),
            }))),
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
    return { ...data, categories: _.uniqBy(data.categories, 'category') };
};
