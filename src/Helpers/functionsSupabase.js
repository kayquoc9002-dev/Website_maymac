import {
  supabase
} from './supabaseClient'

export const supplierService = {
  // Hàm lấy danh sách
  getAll: async () => {
    const {
      data,
      error
    } = await supabase.from('suppliers').select('*')
    if (error) throw error
    return data
  },

  getItemsById: async (listId) => {
    const {
      data,
      error
    } = await supabase.from('suppliers').select('id, supplier_id, supplier_name, supplier_address').in('id', listId)
    if (error) throw error
    return data
  },

  // Hàm thêm mới
  add: async (supplier) => {
    const {
      data,
      error
    } = await supabase.from('suppliers').insert([supplier])
    if (error) throw error
    return data
  },

  edit: async (id, updateSupplier) => {
    const {
      data,
      error
    } = await supabase
      .from('suppliers')
      .update(updateSupplier)
      .eq('id', id)
    if (error) throw error
    return data
  },
  remove: async (listId) => {
    const {
      data,
      error
    } = await supabase.from('suppliers').delete().in('id', listId)
    if (error) throw error
    return data
  }
}

export const goodService = {
  // Hàm lấy danh sách
  getAll: async () => {
    const {
      data,
      error
    } = await supabase.from('goods').select('*')
    if (error) throw error
    return data
  },

  // Hàm thêm mới
  add: async (good) => {
    const {
      data,
      error
    } = await supabase.from('goods').insert([good])
    if (error) throw error
    return data
  },

  edit: async (id, updateGood) => {
    const {
      data,
      error
    } = await supabase
      .from('goods')
      .update(updateGood)
      .eq('id', id)
    if (error) throw error
    return data
  },
  remove: async (listId) => {
    const {
      data,
      error
    } = await supabase.from('goods').delete().in('id', listId)
    if (error) throw error
    return data
  }
}

export const customerService = {
  // Hàm lấy danh sách
  getAll: async () => {
    const {
      data,
      error
    } = await supabase.from('customers').select('*')
    if (error) throw error
    return data
  },

  getItemById: async (id) => {
    const {
      data,
      error
    } = await supabase.from('customers').select('*').eq('id', id).single()
    if (error) throw error
    return data
  },

  // Hàm thêm mới
  add: async (customer) => {
    const {
      data,
      error
    } = await supabase.from('customers').insert([customer])
    if (error) throw error
    return data
  },

  edit: async (id, updateCustomer) => {
    const {
      data,
      error
    } = await supabase
      .from('customers')
      .update(updateCustomer)
      .eq('id', id)
    if (error) throw error
    return data
  },

  remove: async (listId) => {
    const {
      data,
      error
    } = await supabase.from('customers').delete().in('id', listId)
    if (error) throw error
    return data
  }
}

export const partnerService = {
  // Hàm lấy danh sách
  getAll: async () => {
    const {
      data,
      error
    } = await supabase.from('partners').select('*')
    if (error) throw error
    return data
  },

  // Hàm thêm mới
  add: async (partner) => {
    const {
      data,
      error
    } = await supabase.from('partners').insert([partner])
    if (error) throw error
    return data
  },

  edit: async (id, updatePartner) => {
    const {
      data,
      error
    } = await supabase
      .from('partners')
      .update(updatePartner)
      .eq('id', id)
    if (error) throw error
    return data
  },
  remove: async (listId) => {
    const {
      data,
      error
    } = await supabase.from('partners').delete().in('id', listId)
    if (error) throw error
    return data
  }
}

export const orderService = {
  getAll: async () => {
    const {
      data,
      error
    } = await supabase.from('purchaseOrders').select('*, bookedGoods(*)')
    if (error) throw error
    if (error) {
      console.error("Lỗi:", error);
    } else {
      console.log("Danh sách đơn hàng:", data);
    }
    return data
  },

  getItemById: async (id) => {
    const {
      data,
      error
    } = await supabase.from('purchaseOrders').select('*, bookedGoods(*)').eq('id', id)
    if (error) throw error
    return data
  },


  // Hàm thêm mới
  add: async (order) => {
    const {
      data,
      error
    } = await supabase.from('purchaseOrders').insert([order])
    if (error) throw error
    return data
  },

  edit: async (id, updateOrder) => {
    const {
      data,
      error
    } = await supabase
      .from('purchaseOrders')
      .update(updateOrder)
      .eq('id', id)
    if (error) throw error
    return data
  },
  remove: async (listId) => {
    const {
      data,
      error
    } = await supabase.from('purchaseOrders').delete().in('id', listId)
    if (error) throw error
    return data
  }
}


export const receivedOrderService = {
  getAll: async () => {
    const {
      data,
      error
    } = await supabase.from('purchaseOrders').select('*')
    if (error) throw error
    return data
  },

  // Hàm thêm mới
  add: async (order) => {
    const {
      data,
      error
    } = await supabase.from('purchaseOrders').insert([order])
    if (error) throw error
    return data
  },

  edit: async (id, updateOrder) => {
    const {
      data,
      error
    } = await supabase
      .from('purchaseOrders')
      .update(updateOrder)
      .eq('id', id)
    if (error) throw error
    return data
  },
  remove: async (listId) => {
    const {
      data,
      error
    } = await supabase.from('purchaseOrders').delete().in('id', listId)
    if (error) throw error
    return data
  }
}