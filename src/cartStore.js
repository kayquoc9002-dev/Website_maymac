import { create } from 'zustand'

export const useCartStore = create((set) => ({
  cartItems: [], // danh sách sản phẩm
  // Gán toàn bộ data mới vào cartItems 
  setCartItems: (data) => set({ cartItems: data }),
  addItem: (item) =>
    set((state) => ({
      cartItems: [...state.cartItems, item],
    })),

  removeItem: (idFabric, id) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) => {
        if(item.id === idFabric){
            item.Orders =  item.Orders.filter(orderItem => orderItem.key !== id )
        }
        return item;
      }),
    })),

  removeOrder: (idFabric) =>
    set((state) => ({
      cartItems: state.cartItem.filter((item) => {
        console.log(item);
        return item.id != idFabric
      }),
    })),

  updateItem: (id, newData) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id === id ? { ...item, ...newData } : item
      ),
    })),

  clearCart: () => set({ cartItems: [] }),
}));
