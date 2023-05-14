import axios from "axios";

export const api= axios.create({
    baseURL:"http://localhost:5000"
    //Url base para solo completar la ruta
})

export const buscar = async (url, setData)=>{
    const repuesta=await api.get(url);
    //Obtener los datos
    setData(repuesta.data)
    //Actualizar los datos por medio de hobhuts
}