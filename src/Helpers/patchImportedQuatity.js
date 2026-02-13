import axios from "axios"
const patchImportedQuatity = async (goods, url) => {
    // try {

    // } catch (error) {
    //     console.error("Cập nhật dữ liệu kho thất bại", error);
    // }
        for (const object of goods) {

        try {
            const item = await axios.get(url + '/' + object.id);
            const current = item.data;
            const response = await axios.patch(url + '/' + object.id, {
                quatity: object.quatity + current.quatity
            })
            console.log("Cập nhật thành công", response.data);
        } catch (error) {
            // console.log("Có phản hồi", error.item)
            if (error && error.status == 404) {
                console.log("Có phản hồi")
                const response = await axios.post(url, object)
                console.log("Tạo mới object", response.data);
            } else {
                console.log('Lỗi hệ thống!');
            }

        }
    }
}
export default patchImportedQuatity;