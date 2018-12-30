'use strict'

const Products = use('App/Models/Product')

class ProductController {

  async getAllProducts({ response }) {
    let products = await Products.all()

    return response.json(products)
  }


  async getProductById({ params, response }) {
    const product = await Products.find(params.id)

    return response.json(product)
  }

  async postProduct({ request, response }) {
    const productInfo = request.only(['name', 'price', 'image_url'])

    const products = new Products()
    products.name = productInfo.name
    products.price = productInfo.price
    products.image_url = productInfo.image_url

    await products.save()

    return response.status(201).json(products)
  }
}

module.exports = ProductController
