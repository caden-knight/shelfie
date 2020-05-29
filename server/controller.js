module.exports = {
	getInventory: (req, res) => {
		const db = req.app.get('db');

        db.get_inventory()
        .then((products) => res.status(200).send(products)).catch((err) => res.status(500).send(err));
	},
	createProduct: (req, res) => {
		const { name, price, img } = req.body;
		console.log(name, price, img);

		const db = req.app.get('db');

		db
			.create_product(name, price, img)
			.then((product) => res.status(200).send(product))
			.catch((err) => res.status(500).send(err));
	},
	removeProduct(req, res) {
        const {id} = req.params

        const db = req.app.get('db')

        db.remove_product(id)
        .then(product => res.status(200).send(product))
        .catch(err => res.status(500).send(err))
    }
};
