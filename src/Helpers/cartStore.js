import {
  create
} from 'zustand';
import {
  persist
} from 'zustand/middleware';
export const useCartStore = create(
  persist(
    (set) => ({
      cartItems: [], // danh sách sản phẩm
      // Gán toàn bộ data mới vào cartItems 
      setCartItems: (data) => set({
        cartItems: data
      }),
      addItem: (item) =>
        set((state) => ({
          cartItems: [...state.cartItems, item],
        })),

      removeItem: (idFabric, id) =>
        set((state) => ({
          cartItems: state.cartItems.map((item) => {
            if (item.id === idFabric) {
              item.Orders = item.Orders.filter(orderItem => orderItem.key !== id)
            }
            return item;
          }),
        })),

      removeOrder: (idFabric) =>
        set((state) => ({
          cartItems: state.cartItems.filter((item) => {
            console.log(item);
            return item.id != idFabric
          }),
        })),

      updateItem: (id, newData) =>
        set((state) => ({
          cartItems: state.cartItems.map((item) =>
            item.id === id ? {
              ...item,
              ...newData
            } : item
          ),
        })),

      clearCart: () => set({
        cartItems: []
      }),
    }), {
      name: "cart-storage", // tên key trong localStorage 
      getStorage: () => localStorage, // mặc định là localStorage
    }
  )
);

export const useTransactionStore = create((set) => ({
  transactionItems: [], // danh sách sản phẩm
  // Gán toàn bộ data mới vào cartItems 
  setTransactionItems: (data) => set({
    transactionItems: data
  }),
  
  addItem: (item) =>
    set((state) => ({
      transactionItems: [...state.transactionItems, item],
    })),

  removeItem: (idFabric, id) =>
    set((state) => ({
      transactionItems: state.transactionItems.map((item) => {
        if (item.id === idFabric) {
          item.Orders = item.Orders.filter(orderItem => orderItem.key !== id)
        }
        return item;
      }),
    })),

  removeOrder: (idFabric) =>
    set((state) => ({
      transactionItems: state.transactionItems.filter((item) => {
        console.log(item);
        return item.id != idFabric
      }),
    })),

  updateItem: (id, newData) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id === id ? {
          ...item,
          ...newData
        } : item
      ),
    })),

  clearStorage: () => set({
    transactionItems: []
  }),
}));

export const useStore = create((set) => ({
  store: [], // danh sách sản phẩm
  // Gán toàn bộ data mới vào cartItems 
  setStore: (data) => set({
    store: data
  }),
  
  addStore: (item) =>
    set((state) => ({
      store: [...state.store, item],
    })),

  removeStore: (id) =>
    set((state) => ({
      store: state.store.filter((item) => {
        if (item.id != id) {
          return item;
        }
      }),
    })),

  clearStore: () => set({
    store: []
  }),
  option: [],
  setOption: (data) => set({
    option: data
  }),
  
  addOption: (item) =>
    set((state) => ({
      option: [...state.option, item],
    })),

  removeOption: (id) =>
    set((state) => ({
      option: state.option.filter((item) => {
        if (item.id != id) {
          return item;
        }
      }),
    })),

  clearOption: () => set({
    option: []
  }),
}))