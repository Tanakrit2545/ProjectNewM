import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, concat } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

const API_ENDPOINT = environment.API_ENDPOINT;
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'accept': '*/*' }) };
const httpOptionsMultipart = { headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data', 'accept': '*/*' }) };
const httpOptionsText = { headers: new HttpHeaders({ 'Content-Type': 'text/plain; charset=utf-8' }) };


@Injectable({
  providedIn: 'root'
})
export class CallserviceService {

  constructor(
    private http: HttpClient
  ) { }

  getAllRole() : Observable<any> {
    return this.http.get(API_ENDPOINT.concat('/role/getAll'));
  }

  saveRegister(data : any) : Observable<any> {
    const body = JSON.stringify(data);
    return this.http.post<any>(API_ENDPOINT.concat('/register/save'), body, httpOptions)
  }

  authen(userName:any, password:any) : Observable<any> {

    return this.http.get(API_ENDPOINT.concat('/login/authen?userName=' + userName + '&password='+ password))
  }

  updateProfile(data : any, userId : any) : Observable<any> {
    const body = JSON.stringify(data);
    return this.http.put<any>(API_ENDPOINT.concat('/register/update/'+ userId), body, httpOptions)
  }

  getByUserId(userId:any) : Observable<any> {
    return this.http.get(API_ENDPOINT.concat('/register/getById?userId=' + userId))
  }

  getAllUser() : Observable<any> {
    return this.http.get(API_ENDPOINT.concat('/manage/user/getAllUser'));
  }

  deleteUserByUserId(userId : any) : Observable<any> {
    return this.http.delete(API_ENDPOINT.concat('/register/delete?userId='+ userId));
  }


  getMotorImgByMotorId(motorId:any) : Observable<any> {
    return this.http.get(API_ENDPOINT.concat('/motor/getMotorImgByMotorId?motorId=' + motorId));
  }

  getBlobThumbnail(fileName: string): Observable<Blob> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    return this.http.get<Blob>(API_ENDPOINT.concat('/motor/getImageByte?fileName=' + fileName), { headers: headers, responseType: 'blob' as 'json' });
  }

  getImageByte(fileName: string): Observable<Blob> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    return this.http.get<Blob>(API_ENDPOINT.concat('/motor/getImageByte?fileName=' + fileName), { headers: headers, responseType: 'blob' as 'json' });
  }

  getAllMotor() : Observable<any> {
    return this.http.get(API_ENDPOINT.concat('/motor/getAll'));
  }

  getMotorTypeAll() : Observable<any> {
    return this.http.get(API_ENDPOINT.concat('/motor/getMotorTypeAll'));
  }

  saveImageForMotor(formData: FormData, motorId : any) : Observable<any> {
    return this.http.post<any>(API_ENDPOINT.concat('/motor/saveImage/' + motorId), formData);
  }

  saveMotor(data : any) : Observable<any> {
    const body = JSON.stringify(data);
    return this.http.post<any>(API_ENDPOINT.concat('/motor/save'), body, httpOptions);
  }

  removeImgByMotorId(motorId : any) : Observable<any> {
    return this.http.delete(API_ENDPOINT.concat('/motor/removeImgByMotorId?motorId=' + motorId));
  }

  deleteMotor(motorId : any) : Observable<any> {
    return this.http.delete(API_ENDPOINT.concat('/motor/delete?motorId=' + motorId));
  }

  getMotorByMotorId(motorId:any) : Observable<any> {
    return this.http.get(API_ENDPOINT.concat('/motor/getById?motorId=' + motorId));
  }

  updateMotor(data : any, motorId : any) : Observable<any> {
    const body = JSON.stringify(data);
    return this.http.put<any>(API_ENDPOINT.concat('/motor/update/' + motorId), body, httpOptions);
  }

  deleteMotorImage(fileName : any) : Observable<any> {
    return this.http.delete(API_ENDPOINT.concat('/motor/deleteImgByFileName?fileName=' + fileName));
  }


  getProductImgByProductId(productId:any) : Observable<any> {
    return this.http.get(API_ENDPOINT.concat('/product/getProductImgByProductId?productId=' + productId))
  }

  // getBlobThumbnail(fileName: string): Observable<Blob> {
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Accept': 'application/json'    
  //   });
  //   return this.http.get<Blob>(API_ENDPOINT.concat('/product/getImageByte?fileName='+fileName)
  //   , {headers: headers, responseType: 'blob' as 'json' });
  // }

  // getImageByte(fileName: string): Observable<Blob> {
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Accept': 'application/json'    
  //   });
  //   return this.http.get<Blob>(API_ENDPOINT.concat('/product/getImageByte?fileName='+fileName)
  //   , {headers: headers, responseType: 'blob' as 'json' });
  // }

  getAllProduct() : Observable<any> {
    return this.http.get(API_ENDPOINT.concat('/product/getAll'));
  }

  getProductTypeAll() : Observable<any> {
    return this.http.get(API_ENDPOINT.concat('/product/getProductTypeAll'));
  }

  saveImage(formData: FormData, productId : any) : Observable<any> {
    return this.http.post<any>(API_ENDPOINT.concat('/product/saveImage/' + productId), formData)
  }

  saveProduct(data : any) : Observable<any> {
    const body = JSON.stringify(data);
    return this.http.post<any>(API_ENDPOINT.concat('/product/save'), body, httpOptions)
  }

  removeImgByProductId(productId : any) : Observable<any> {
    return this.http.delete(API_ENDPOINT.concat('/product/removeImgByProductId?productId='+ productId));
  }

  deleteProduct(productId : any) : Observable<any> {
    return this.http.delete(API_ENDPOINT.concat('/product/delete?productId='+ productId));
  }

  getProductByProductId(productId:any) : Observable<any> {
    return this.http.get(API_ENDPOINT.concat('/product/getById?productId=' + productId))
  }

  updateProduct(data : any, productId : any) : Observable<any> {
    const body = JSON.stringify(data);
    return this.http.put<any>(API_ENDPOINT.concat('/product/update/'+ productId), body, httpOptions)
  }

  deleteImage(fileName : any) : Observable<any> {
    return this.http.delete(API_ENDPOINT.concat('/product/deleteImgByFileName?fileName='+ fileName));
  }

}





