import axios from "axios";
const deleteData = async (dataItem, url) => {
    try{
        const response = await axios.delete(url + "/" + dataItem.id)
        console.log("Đã xóa thành công: ", response.data);
        alert("Đã xóa thành công");
    } catch(error){
        console.error("Lỗi khi đẩy data:", error);
    }
}
export default deleteData;