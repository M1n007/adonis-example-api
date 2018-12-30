'use strict'

const Order = use('App/Models/Order')
const Database = use('Database')

class OrderController {
  async postOrder({ request, response }) {
    const orderInfo = request.only('product_id')

    const order = new Order();
    order.product_id = orderInfo.product_id

    await order.save()

    return response.status(200).json(order)
  }

  async patchOrder({ params, request, response }) {
    const orderInfo = request.only('qty')

    const productPrice = await Database
      .raw(`SELECT products.price from products LEFT JOIN orders ON products.id = orders.product_id WHERE orders.id = ${params.id}`)


    const order = await Order.find(params.id);
    order.qty = await orderInfo.qty
    order.price = order.qty * productPrice[0][0].price


    await order.save()

    return response.status(200).json(order)
  }

  async deleteOrder({ response }) {
    let order = await Order.find(params.id);


    await order.delete()

    return response.status(204).json(null)
  }

}

module.exports = OrderController
