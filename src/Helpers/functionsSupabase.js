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
  getGoodById: async (id) => {
    const {
      data,
      error
    } = await supabase.from('goods').select('*, variants(*)').eq('id', id).single()
    if (error) throw error
    return data
  },

  getVariant: async (id) => {
    const {
      data,
      error
    } = await supabase.from('goods').select('variants(*)').eq('id', id).single();
    if (error) throw error
    // if (error) {
    //   console.error("Lỗi:", error);
    // } else {
    //   console.log("Danh sách đơn hàng:", data);
    // }
    return data.variants;
  },
  getGoodWithtVariant: async (id, listvariant) => {
    const {
      data,
      error
    } = await supabase.from('goods').select('id, good_sku, good_name, good_unit, variants!inner(*)').eq('id', id).in('variants.id', listvariant).single()
    if (error) throw error
    if (error) {
      console.error("Lỗi:", error);
    } else {
      console.log("Danh sách đơn hàng:", data);
    }
    return data;
  },
  getGoodWithtVariantRequest: async (id, listvariant) => {
    const {
      data,
      error
    } = await supabase.from('goods').select('id, good_sku, good_name, good_unit, variants!inner(id,variant_color,variant_id,variant_size)').eq('id', id).in('variants.id', listvariant).single()
    if (error) throw error
    if (error) {
      console.error("Lỗi:", error);
    } else {
      console.log("Danh sách đơn hàng:", data);
    }
    return data;
  },

  getGoodWithtVariantOrder: async (id, listvariant) => {
    const {
      data,
      error
    } = await supabase.from('goods').select('id, good_sku, good_name, good_unit, good_tax, variants!inner(id,variant_color,variant_id,variant_size, variant_price)').eq('id', id).in('variants.id', listvariant).single()
    if (error) throw error
    if (error) {
      console.error("Lỗi:", error);
    } else {
      console.log("Danh sách đơn hàng:", data);
    }
    return data;
  },

  // Hàm thêm mới
  add: async (good) => {
    const {
      variants,
      ...detailGood
    } = good;

    const {
      data: newGood,
      error: errorGood
    } = await supabase
      .from('goods')
      .insert([detailGood])
      .select('id')
      .single();

    if (errorGood) throw errorGood;
    const good_id = newGood.id; // Đây là ID khóa ngoại chúng ta cần
    const variantsWithGoodId = variants.map(item => ({
      ...item,
      good_id: good_id
    }));
    const {
      data,
      error
    } = await supabase.from('variants').insert(variantsWithGoodId)
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


export const requestService = {
  getAll: async () => {
    const {
      data,
      error
    } = await supabase.from('purchase_requests').select('id, pr_code,requester_name,warehouse, reason, recorded_date, recorded_time')
    if (error) throw error
    if (error) {
      console.error("Lỗi:", error);
    } else {
      console.log("Danh sách đơn hàng:", data);
    }
    return data
  },
  getAllRequest: async () => {
    const {
      data,
      error
    } = await supabase.from('purchase_requests').select('id, pr_code,requester_name,warehouse, reason, recorded_date, recorded_time').in('status', ['pending', 'partially_ordered']);
    if (error) throw error
    if (error) {
      console.error("Lỗi:", error);
    } else {
      console.log("Danh sách yêu cầu:", data);
    }
    return data
  },
  getRequestById: async (id) => {
    const {
      data,
      error
    } = await supabase.from('view_purchase_request_details').select(`*`).eq('id', id).single()
    if (error) throw error
    if (error) {
      console.error("Lỗi:", error);
    } else {
      console.log("Danh sách đơn hàng:", data);
    }
    return data
  }

}
export const orderService = {
  getAllRequest: async () => {
    const {
      data,
      error
    } = await supabase.from('view_global_request_pool').select('*');
    if (error) throw error
    if (error) {
      console.error("Lỗi:", error);
    } else {
      console.log("Danh sách yêu cầu:", data);
    }
    return data
  },
  getAll: async () => {
    const {
      data,
      error
    } = await supabase.from('purchase_orders').select('*').in('status', ['processing'])
    if (error) throw error
    if (error) {
      console.error("Lỗi:", error);
    } else {
      console.log("Danh sách đơn hàng:", data);
    }
    return data
  },

  getAll2: async () => {
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
    } = await supabase.from('purchase_orders').select(`
      *, purchase_order_items(*, purchase_request_items(quantity, goods(good_sku, good_name, good_unit), variants(variant_size, variant_color, variant_price)))`)
      .in('status', ['processing']);
    if (error) throw error
    console.log(data);
    return data
  },
  getAllReceipt: async () => {
    const {
      data,
      error
    } = await supabase.from('goods_receipts').select('*')
    if (error) throw error
    if (error) {
      console.error("Lỗi:", error);
    } else {
      console.log("Danh sách đơn hàng:", data);
    }
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

export const batchItems = {
  getGood: async () => {
    const {
      data,
      error
    } = await supabase
      .from('goods')
      .select(`
    id, 
    good_name, 
    good_unit,
    variants!inner (
      batch_items!inner (
        quantity
      )
    )
  `)
      .gt('variants.batch_items.quantity', 0);

    if (error) throw error
    return data
  },
  getAllBatch: async (goodId) => {
    const {
      data,
      error
    } = await supabase
      .from('batch_items')
      .select(`
      id,        
      quantity,        
      variants!inner (
        id,            
        variant_size,
        variant_color,
        variant_id
      ),
      batches!inner (
        batch_code,
        warehouse
      )
    `)
      // Lọc theo Product ID mà user vừa chọn ở Bước 1
      .eq('variants.good_id', goodId)
      .gt('quantity', 0)
    if (error) throw error
    return data;
  },
  getBatchItem: async (listBatchItem) => {
    const {
      data,
      error
    } = await supabase.from('batch_items').select(
      'id, quantity, batches!inner(batch_code, warehouse), variants!inner(id, variant_size, variant_color, variant_id), goods!inner(id, good_sku, good_name, good_unit)'
    ).in('id', listBatchItem)
    if (error) throw error
    if (error) {
      console.error("Lỗi:", error);
    } else {
      console.log("Danh sách đơn hàng:", data);
    }
    return data;
  },
  getGoodInWarehouse: async () => {
    const {
      data,
      error
    } = await supabase.from('view_stock_by_product').select(`*`)
    if (error) throw error
    if (error) {
      console.error("Lỗi:", error);
    } else {
      console.log("Danh sách đơn hàng:", data);
    }
    return data;
  },
  getGoodByBatch: async () => {
    const {
      data,
      error
    } = await supabase.from('view_batches_summary').select(`*`)
    if (error) throw error
    if (error) {
      console.error("Lỗi:", error);
    } else {
      console.log("Danh sách đơn hàng:", data);
    }
    return data;
  },
  getVariantByGid: async (id) => {
    const {
      data,
      error
    } = await supabase.from('view_stock_inventory_nested').select(`*`).eq('parent_id', id).single()
    if (error) throw error
    if (error) {
      console.error("Lỗi:", error);
    } else {
      console.log("Danh sách đơn hàng:", data);
    }
    return data;
  },
  getBatchItemByVid: async (v_id) => {
    const {
      data,
      error
    } = await supabase.from('view_variant_stock_with_batches').select(`*`).eq('parent_id', v_id).single()
    if (error) throw error
    if (error) {
      console.error("Lỗi:", error);
    } else {
      console.log("Danh sách đơn hàng:", data);
    }
    return data;
  }

}

export const transactionService = {
  getAll: async () => {
    const {
      data,
      error
    } = await supabase
      .from('view_inventory_transactions_flat ')
      .select(`*`)
      .order('created_at', {
        ascending: false
      });
    if (error) throw error
    return data
  },
  getImportedRecord: async () => {
    const {
      data,
      error
    } = await supabase
      .from(`view_inventory_transactions_flat`)
      .select(`*`)
      .eq('type', "IN")
      .order('created_at', {
        ascending: false
      });
    if (error) throw error
    return data
  },
  getExportedRecord: async () => {
    const {
      data,
      error
    } = await supabase
      .from(`view_inventory_transactions_flat`)
      .select(`*`)
      .eq('type', "OUT")
      .order('created_at', {
        ascending: false
      });
    if (error) throw error
    return data
  }
};

export const sellService = {
  getAllProducts: async () => {
    const {
      data,
      error
    } = await supabase
      .from('goods')
      .select(`*, variants(variant_urls)`)
      .eq("is_marketable", true);
    if (error) throw error
    return data
  },
  getDetailProductById: async (gId) => {
    const {
      data,
      error
    } = await supabase
      .from('goods')
      .select(`*, variants(*)`)
      .eq("id", gId).single();
    if (error) throw error
    return data
  }
};

export const cashBookService = {
  getAll: async () => {
    const {
      data,
      error
    } = await supabase
      .from('financial_transactions')
      .select(`*`)
    if (error) throw error
    return data
  },
  getAllByType: async (type) => {
    const {
      data,
      error
    } = await supabase
      .from('financial_transactions')
      .select(`*`)
      .eq("transaction_type", type);
    if (error) throw error
    return data
  },
  getReceivables: async () => {
    const {
      data,
      error
    } = await supabase
      .from('v_all_expected_receivables')
      .select(`*`)
    if (error) throw error
    return data
  },
  getPayables: async () => {
    const {
      data,
      error
    } = await supabase
      .from('v_all_expected_payables')
      .select(`*`)
    if (error) throw error
    return data
  }
};



export const importGood = async (formSubmitData) => {
  const {
    data,
    error
  } = await supabase.rpc('handle_complex_inbound', {
    p_payload: formSubmitData
  });

  if (error) {
    console.error("Lỗi khi nhập kho:", error);
    alert("Có lỗi xảy ra: " + error.message);
  } else {
    alert("Đã nhập kho thành công cho phiếu: " + formSubmitData.batch_code);
  }
};

export const handleExport = async (formData) => {
  const {
    data,
    error
  } = await supabase.rpc('handle_outbound_complex', {
    p_payload: formData
  });

  if (error) {
    // Lỗi này có thể là: "Lô hàng X không đủ số lượng..."
    alert("Lỗi xuất kho: " + error.message);
  } else {
    alert("Xuất kho thành công!");
  }
};

export const handleRequest = async (formData) => {
  const {
    data,
    error
  } = await supabase.rpc('handle_complex_request', {
    p_payload: formData
  });

  if (error) {
    // Lỗi này có thể là: "Lô hàng X không đủ số lượng..."
    alert("Lỗi gửi yêu cầu: " + error.message);
  } else {
    alert("Gửi yêu cầu thành công!");
  }
};
export const handlePurchaseOrder = async (formData) => {
  const {
    data,
    error
  } = await supabase.rpc('handle_complex_order', {
    p_payload: formData
  });

  if (error) {
    // Lỗi này có thể là: "Lô hàng X không đủ số lượng..."
    alert("Lỗi đặt hàng: " + error.message);
  } else {
    alert("Đặt hàng thành công!");
  }
};
export const handleImportShipment = async (formData) => {
  const {
    data,
    error
  } = await supabase.rpc('handle_goods_receipt', {
    p_payload: formData
  });

  if (error) {
    // Lỗi này có thể là: "Lô hàng X không đủ số lượng..."
    alert("Lỗi gửi đơn nhận hàng: " + error.message);
  } else {
    alert("Gửi đơn nhận hàng thành công!");
  }
};


export const handleOrderForCustomer = async (formData) => {
  const {
    data,
    error
  } = await supabase.rpc('create_full_order', {
    order_data: formData
  });

  if (error) {
    // Lỗi này có thể là: "Lô hàng X không đủ số lượng..."
    alert("Lỗi gửi đơn hàng: " + error.message);
  } else {
    alert("Gửi đơn hàng thành công!");
  }
};


function sanitizeFileName(name) {
  return name.normalize("NFD").replace(/[\u0300-\u036f]/g, "") // bỏ dấu tiếng Việt 
    .replace(/\s+/g, "_") // thay khoảng trắng bằng _ 
    .replace(/[^\w.-]/g, ""); // bỏ ký tự đặc biệt 
};
export const uploadMultipleImages = async (files) => {
  const uploadPromises = files.map(async (file) => {
    const safeName = sanitizeFileName(file.name);
    const fileName = `${Date.now()}_${safeName}`;

    // 1. Upload từng file
    const {
      data,
      error
    } = await supabase.storage
      .from('avatarOfGood')
      .upload(fileName, file);

    if (error) throw error;

    // 2. Lấy URL công khai
    const {
      data: urlData
    } = supabase.storage
      .from('avatarOfGood')
      .getPublicUrl(fileName);

    return urlData.publicUrl; // Trả về URL của từng ảnh
  });

  // Chạy tất cả các tiến trình upload cùng lúc
  const allUrls = await Promise.all(uploadPromises);
  return allUrls; // Đây là mảng chứa các chuỗi String URL
};