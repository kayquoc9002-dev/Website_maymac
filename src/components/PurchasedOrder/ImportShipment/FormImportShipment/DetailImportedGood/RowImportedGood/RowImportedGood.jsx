import React, { useState } from "react";
import { formatCurrency } from "../../../../../../Helpers/formatCurrency";
function RowImportedGood({ index, detailGood, receivedGoods, optionLength }) {
  // console.log(detailGood);
  // const totalPrice = parseInt(detailGood.quatity, 10) * detailGood.good_price;
  // const taxMount = totalPrice * (parseInt(detailGood.good_tax) / 100);
  // const finalPrice = totalPrice + taxMount;

  const [detail, setDetail] = useState({
    pr_item_id: detailGood.purchase_request_item_id,
    po_item_id: detailGood.id,
    pr_id: detailGood.pr_id,
    quantity_ordered: detailGood.purchase_request_items.quantity,
    quantity_received: 0,
    quantity_wrong_model: 0,
    quantity_damaged: 0,
    evidence_image_url: "",
    note: "",
  });

  if (receivedGoods.current.length < optionLength) {
    receivedGoods.current = [...receivedGoods.current, detail];
  } else {
    receivedGoods.current = receivedGoods.current.map((item, i) =>
      i === index ? detail : item,
    );
  }

  const handleChangeValue = (e) => {
    const { name, value } = e.target;
    let num = value;
    if (
      name == "quantity_received" ||
      name == "quantity_damaged" ||
      name == "quantity_wrong_model"
    ) {
      num = parseInt(value);
      if (!num) num = 0;
    }
    setDetail({ ...detail, [name]: num });
    // receivedGoods.current[index] = detail;
  };
  console.log(receivedGoods.current);
  return (
    <>
      <tr className="bg-white">
        <td class="border border-gray-300 p-0 relative">
          <div class="flex h-8">
            <input
              type="text"
              value={detailGood.warehouse_origin}
              class="w-full h-full px-1 outline-none text-center"
            />
          </div>
        </td>
        <td class="border border-gray-300 p-0 relative">
          <div class="flex h-8">
            <input
              type="text"
              value={detailGood.purchase_request_items.goods.good_sku}
              class="w-full h-full px-1 outline-none"
            />
          </div>
        </td>
        <td class="border border-gray-300 p-0 relative">
          <div class="flex h-8">
            <input
              type="text"
              value={detailGood.purchase_request_items.goods.good_name}
              class="w-full h-full px-1 outline-none"
            />
          </div>
        </td>
        <td class="border border-gray-300 p-0">
          <div class="flex h-8">
            <input
              type="text"
              value={detailGood.purchase_request_items.variants.variant_size}
              class="w-full h-full px-1 outline-none"
            />
          </div>
        </td>
        <td class="border border-gray-300 p-0">
          <div class="flex h-8">
            <input
              type="text"
              value={detailGood.purchase_request_items.variants.variant_color}
              class="w-full h-full px-1 outline-none"
            />
          </div>
        </td>
        <td class="border border-gray-300 p-0">
          <div class="flex h-8">
            <input
              type="text"
              value={detailGood.purchase_request_items.goods.good_unit}
              class="w-full h-full px-1 outline-none text-center"
            />
          </div>
        </td>
        <td class="border border-gray-300 p-0">
          <div class="flex h-8">
            <input
              type="text"
              value={detailGood.purchase_request_items.quantity}
              class="w-full h-full px-1 outline-none text-center"
            />
          </div>
        </td>
        <td class="border border-gray-300 p-0">
          <div class="flex h-8">
            <input
              type="text"
              name="quantity_received"
              onChange={handleChangeValue}
              class="w-full h-full px-1 outline-none text-center"
            />
          </div>
        </td>
        <td class="border border-gray-300 p-0">
          <div class="flex h-8">
            <input
              type="text"
              name="quantity_damaged"
              onChange={handleChangeValue}
              class="w-full h-full px-1 outline-none text-center"
            />
          </div>
        </td>
        <td class="border border-gray-300 p-0">
          <div class="flex h-8">
            <input
              type="text"
              name="quantity_wrong_model"
              onChange={handleChangeValue}
              class="w-full h-full px-1 outline-none text-center"
            />
          </div>
        </td>
        <td class="border border-gray-300 p-0">
          <div class="flex h-8">
            <input
              type="text"
              name="note"
              onChange={handleChangeValue}
              class="w-full h-full px-1 outline-none"
            />
          </div>
        </td>
        <td class="border border-gray-300 p-0">
          <div class="flex h-8">
            <input
              type="text"
              // name="note"
              // onChange={handleChangeValue}
              class="w-full h-full px-1 outline-none"
            />
          </div>
        </td>
      </tr>
    </>
  );
}

export default RowImportedGood;
