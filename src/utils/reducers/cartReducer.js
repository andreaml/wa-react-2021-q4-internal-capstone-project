export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const EMPTY_CART = 'EMPTY_CART';

export const cartInitialState = {
  cart: {
    items: [],
    count: 0,
  },
};

const addItemToCart = (state, product, quantity) => {
  const newCart = { ...state.cart };
  const productIndex = newCart.items.findIndex(
    (item) => item.id === product.id
  );

  if (productIndex < 0) {
    newCart.items.push({ ...product, count: quantity || 1 });
    newCart.count += quantity || 1;
  } else {
    const updatedItem = {
      ...newCart.items[productIndex],
    };
    if (quantity) {
      newCart.count -= updatedItem.count;
      updatedItem.count = quantity;
      newCart.count += quantity;
    } else {
      updatedItem.count += 1;
      newCart.count += 1;
    }
    newCart.items[productIndex] = updatedItem;
  }

  return { ...state, cart: newCart };
};

const removeItemFromCart = (state, productId) => {
  const newCart = { ...state.cart };
  const productIndex = newCart.items.findIndex((item) => item.id === productId);

  const updatedItem = {
    ...newCart.items[productIndex],
  };

  newCart.count -= updatedItem.count;
  newCart.items.splice(productIndex, 1);

  return { ...state, cart: newCart };
};

const emptyCart = () => cartInitialState;

export function cartReducer(state, action) {
  switch (action.type) {
    case ADD_ITEM:
      return addItemToCart(state, action.product, action.quantity);
    case REMOVE_ITEM:
      return removeItemFromCart(state, action.productId);
    case EMPTY_CART:
      return emptyCart();
    default:
      return state;
  }
}
