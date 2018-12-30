'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  Route.post('product', 'ProductController.postProduct');
  Route.get('products', 'ProductController.getAllProducts');
  Route.get('products/:id', 'ProductController.getProductById');
  Route.post('order', 'OrderController.postOrder');
  Route.patch('order/:id', 'OrderController.patchOrder');
  Route.delete('order/:id', 'OrderController.deleteOrder');
}).prefix('api/v1')
