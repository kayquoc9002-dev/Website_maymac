import axios from 'axios';

const postData = async (data, setLoading, url) => {
    try{
        const response = await axios.post(url, data);
        console.log("Đã lưu vào database", response.data);
        alert("Thêm thành công");
    } catch(error){
        console.error("Lỗi khi đẩy data:", error);
    } finally{
        setLoading(false);
    }
}
export default postData;