import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  info = [{ _id: "62d07d3bbdde73f2ca9edb2p", productname: "Moto", category: "Bogota", date: "2022-07-12T05:00:00.000Z", freshness: "13:00",
  price: 50, comment: "Santafe De Bogota"}, { _id: "62d07d3bbdde73f2ca9edb2v", productname: "Carro", category: "Medellin", date: "2022-07-12T05:00:00.000Z", freshness: "13:00",
  price: 50, comment: "Santafe De Bogota"}, { _id: "62d07d3bbdde73f2ca9edb2w", productname: "Moto", category: "Cali", date: "2022-07-12T05:00:00.000Z", freshness: "13:00",
  price: 50, comment: "Santafe De Bogota"}, { _id: "62d07d3bbdde73f2ca9edb2y", productname: "Bus", category: "Cali", date: "2022-07-12T05:00:00.000Z", freshness: "13:00",
  price: 50, comment: "Santafe De Bogota"}, { _id: "62d07d3bbdde73f2ca9edb2c", productname: "Bus", category: "Bogota", date: "2022-07-12T05:00:00.000Z", freshness: "13:00",
  price: 50, comment: "Santafe De Bogota"}, { _id: "s62d07d3bbdde73f2ca9edb2d", productname: "Carro", category: "Medellin", date: "2022-07-12T05:00:00.000Z", freshness: "13:00",
  price: 50, comment: "Santafe De Bogota"}, {_id: "262d07d3bbdde73f2ca9edb2e", productname: "Moto", category: "Cali", date: "2022-07-12T05:00:00.000Z", freshness: "13:00",
  price: 50, comment: "Santafe De Bogota"}, {_id: "s362d07d3bbdde73f2ca9edb2f", productname: "Carro", category: "Medellin", date: "2022-07-12T05:00:00.000Z", freshness: "13:00",
  price: 50, comment: "Santafe De Bogota"}]

  constructor() { }

  posProduct(data: any){
    return  this.info.unshift(data)
  }

  getProduct() {
    return this.info;
  }

  putProducto(data : any, id: any) {

    data._id = id._id;

    this.info = this.info.map(item => {

      return item._id === data._id ? item = data : item;

    });

    return this.info


  }

  deleteProducto(id: string) {

    this.info = this.info.filter(function(item) {
      return item._id !== id
    });
    
    return this.info  
   
  }

}
