import { create } from 'zustand';

const useCartStore = create((set) => ({
  cartList: [],
  shoppingCartNotification: 0,
  sizeError: null,

  addToCart: (product) => {
    if (product.size === undefined || product.size === null) {
      set((state) => ({
        sizeError: state.sizeError = "Size must be selected"
      }));
      return
    }
    // Check if the item already exists in cartList
    const isDuplicate = !!useCartStore.getState().cartList.find(
      (item) => item.id === product.id && item.size === product.size
    );
    if (isDuplicate) {
      set((state) => ({
        sizeError: state.sizeError = "The item is already on the bag"
      }));
    }
    // If not a duplicate, add it to the list
    if (!isDuplicate) {
      set((state) => ({
        cartList: [...state.cartList, product],
        shoppingCartNotification: state.shoppingCartNotification + 1,
        sizeError: state.sizeError = null
      }));
    }
  },

  removeFromCart: (title, size) => {
    set((state) => ({
      cartList: state.cartList.filter(item => item.title !== title || item.size !== size)
    }));
  },

  incrementNotification: () => {
    set((state) => ({
      shoppingCartNotification: state.shoppingCartNotification + 1,
    }));
  },

  resetSizeError: () => {
    set((state) => ({
      sizeError: state.sizeError = null
    }));
  },

  resetNotifications: () =>
    set({
      shoppingCartNotification: 0,
    }),


}));

export default useCartStore;