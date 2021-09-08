const Comment = require('../models/comment.model')
const Product = require('../models/products.model')

module.exports.create = async (req, res) => {
    try {
        const {name, text, postId} = req.body
        const comment = new Comment({name, text, postId})
        await comment.save

        const product = await Product.findById(productId)
        product.comments.push(comment._id)
        await product.save

        res.status(201).json(comment)

    } catch (e) {
        res.status(500).json(e)
    }
}