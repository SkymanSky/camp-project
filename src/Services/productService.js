import axios from "axios"

export default class ProductService{
     getProducts(){
         return axios.get("http://localhost:8080/api/products/getall")
     }

     getByProductName(productName){
        return axios.get("http://localhost:8080/api/products/getByProductName?productName="+ productName)
    }

    addProduct(product){
        let result = axios.post("http://localhost:8080/api/products/add",product)
        return result
    }
}