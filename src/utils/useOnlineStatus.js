import { useEffect , useState} from "react";

const useOnlineStatus = () => {

    const [onlineStatus , setOnlineSatus] = useState(true);

    useEffect(() => {
        window.addEventListener("offline" , () =>{
            setOnlineSatus(false);
        })
        window.addEventListener("online" , () =>{
            setOnlineSatus(true);
        })
    },[])  

    return onlineStatus;
}

export default useOnlineStatus