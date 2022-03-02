import CryptoJS from "crypto-js";

export const cifrarHairColor= (hair_color, password) =>{
    const claveCifradaAPI = CryptoJS.AES.encrypt(hair_color, `${process.env.SECRET_KEY}`).toString();

    const bytes = CryptoJS.AES.decrypt(claveCifradaAPI, `${process.env.SECRET_KEY}`);
    const textoDescifrado = bytes.toString(CryptoJS.enc.Utf8);

    if(password === textoDescifrado){
        return true;
    }else{
        return false;
    }
    
}
