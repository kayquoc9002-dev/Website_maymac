import axios from 'axios';

const fetchData = async (url) => {
    try{
        const response = await axios.get(url)
        console.log("Lấy data thành công: ", response);
        return response.data;
    }catch(error){
        console.error("Lỗi khi lấy data", error)
    }
}
export default fetchData;