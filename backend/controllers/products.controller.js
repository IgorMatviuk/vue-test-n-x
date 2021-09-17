const Product = require('../models/products.model')

module.exports.create = async (req, res) => {
  const  product = new Product({
      title: req.body.title,
      price: req.body.price,
      properties: req.body.properties,
      description: req.body.description,
      brand: req.body.brand,
      model: req.body.model,
      size: req.body.size,
      color: req.body.color,
      material: req.body.material,
      year: req.body.year,
      manufacturerСountry: req.body.manufacturerСountry,
      volume: req.body.volume,
      alcohol: req.body.alcohol,
      Memory: req.body.Memory,
      speed: req.body.speed,
      weight: req.body.weight,
      width: req.body.width,
      type: req.body.type,
      season: req.body.season,
      state: req.body.state,
      shoeType: req.body.shoeType,
      imageUrl: `/${req.file.filename}`
  })

  try {
    await product.save()
    res.status(201).json( product)
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.getAll = async (req, res) => {
  try {
    const  products = await Product.find().sort({date: -1})
    res.json( products)
  } catch (e) { 
    res.status(500).json(e)
  }
}

module.exports.getById = async (req, res) => {
  try {
    await Product.findById(req.params.id).populate('comments').exec((error,  product) => {
      res.json( product)
    })
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.update = async (req, res) => {
  const $set = {
    text: req.body.text
  }
  try {
    const  product = await Product.findOneAndUpdate({
      _id: req.params.id
    }, {$set}, {new: true})
    res.json( product)
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.remove = async (req, res) => {
  try {
    await Product.deleteOne({_id: req.params.id})
    res.json({message: 'Продукт удален'})
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.addView = async (req, res) => {
  const $set = {
    views: ++req.body.views
  }
  try {
    await Product.findOneAndUpdate({_id: req.params.id}, {$set})
    res.status(204).json()
  } catch (e) {
    res.status(500).json(e)
  }
}

