import Product from "../models/product.model.js";

const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: "Error fetching products", error: error.message });
    }
};

const addProducts = async (req, res) => {
    try {
        const { title, price, description, category, image } = req.body;

        if (!title || !price || !description || !image) {
            return res.status(400).json({ message: "Name, price , description and image are required" });
        }
        const newProduct = new Product({
            title,
            price,
            description,
            category,
            image
        });

        const savedProduct = await newProduct.save();
        res.status(201).json({message: "product saved succesfully",savedProduct});
    } catch (error) {
        res.status(500).json({ message: "Error adding product", error: error.message });
    }
};

export { getProducts, addProducts };