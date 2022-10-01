import { useEffect,useState} from "react";
import { getGifs } from "../helpers/GetGifs";

export const useFetchGifs = (category) => {

    const [ gifs, setGifs ] = useState ([]);
    const [isLoading , setIsLoading] = useState(true);
    
    useEffect(()=>{

        const GetItem = async ()=>{

            const res = await getGifs(category);
            setGifs(res);
            setIsLoading(false);
        }
        GetItem();
    },[])
    
    return{
        gifs,
        isLoading
    }
}

//jcgp