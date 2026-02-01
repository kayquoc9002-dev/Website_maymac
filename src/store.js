// store.js
import {
    create
} from 'zustand';

export const useStore = create((set) => ({
    // các key-value 
    quatity: 0,
    totalPrice: 0,
    taxAmount: 0,

    // action để cập nhật 
    increaseQuatity: () => set((state) => ({ quatity: state.quatity + 1 })),
    decreaseQuatity: () => set((state) => ({ quatity: state.quatity - 1 })),
    setTotalPrice: (price) => set({
        totalPrice: price
    }),
    setTotalPrice: (tax) => set({
        taxAmount: tax
    }),
}));