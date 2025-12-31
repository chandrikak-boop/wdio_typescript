import LoginScreen from '../pageobjects/LoginScreen'
import ProductsScreen from '../pageobjects/ProductsScreen'
import CartScreen from '../pageobjects/CartScreen'
import CheckoutScreen from '../pageobjects/CheckoutScreen'
import userdata from '../../data/userdata.json'
import ProductsScreenAndroid from '../../test/pageobjects/ProductScreen.android'
describe('Swag Labs E2E', () => {

  it('products shopping', async () => {

    await LoginScreen.login(
      `${process.env.USER_NAME}`,
      `${process.env.PASSWORD}`
    )

    await ProductsScreenAndroid.addFirstProductToCart()
    await ProductsScreenAndroid.openCart()

    await CartScreen.proceedToCheckout()

    await CheckoutScreen.fillDetails(userdata.firstName,userdata.lastName,userdata.zipCode)
    await CheckoutScreen.finishCheckout()
  })
})
