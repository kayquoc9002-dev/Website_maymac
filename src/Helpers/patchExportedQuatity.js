import axios from "axios";
const patchExportedQuatity = async (goods, url) => {
    for (const object of goods) {
        try {
            const item = await axios.get(url + '?warehouse=' + object.warehouse + '&id=' + object.id);
            const current = item.data[0];
            if (current.length == 0) {
                alert("Không hợp lệ");
            } else {
                if (current.quatity >= object.quatity) {
                    const response = await axios.patch(url + '?warehouse=' + object.warehouse + '&id=' + object.id, {
                        quatity: current.quatity - object.quatity
                    })

                } else{
                    alert("Không hợp lệ");
                }

            }
        } catch (error) {
            // console.log("Có phản hồi", error.item)
            if (error && error.status == 404) {
                console.log("Có phản hồi")
                alert("Không hợp lệ");
            } else {
                console.log('Lỗi hệ thống!');
            }

        }
    }
}
export default patchExportedQuatity;