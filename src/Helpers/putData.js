import axios from "axios";

const putData = async (setLoading, data, url) => {
    try{    
        const response = await axios.put(url, data)
        if(response){
            console.log("Đã cập nhật dữ liệu thành công!", response.data);
        }
        alert("Đã cập nhật");
    }catch(error){
        console.error("Cập nhật không thành công!", error);
    } finally{
        setLoading(false);
    }

}
export default putData;