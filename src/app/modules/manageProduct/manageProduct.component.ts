import { Component, OnInit } from '@angular/core';
import { CallserviceService } from '../services/callservice.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manageProduct',
  templateUrl: './manageProduct.component.html',
  styleUrls: ['./manageProduct.component.css']
})
export class ManageProductComponent implements OnInit {

  productList: any[];
  productTypeList: any[];
  productImgList: any[];

  constructor(
    private callService: CallserviceService,
    private sanitizer: DomSanitizer,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getProductTypeAll();
    this.getAllProducts();
  }

  getAllProducts() {
    this.callService.getAllProduct().subscribe(res => {
      if (res.data) {
        this.productList = res.data;
        this.productList.forEach(product => {
          product.imgList = [];
          product.productType = this.productTypeList.find(type => type.productTypeId === product.productTypeId);
          this.callService.getProductImgByProductId(product.productId).subscribe(imgRes => {
            if (imgRes.data) {
              this.productImgList = imgRes.data;
              this.productImgList.forEach(productImg => {
                this.getImage(productImg.productImgName, product.imgList);
              });
            } else {
              window.location.reload(); // Reload page if no image data
            }
          });
        });
      }
    });
  }

  getImage(fileName: string, imgList: any[]) {
    this.callService.getBlobThumbnail(fileName).subscribe(res => {
      let objectURL = URL.createObjectURL(res);
      let safeUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustUrl(objectURL);
      imgList.push(safeUrl);
    });
  }

  getProductTypeAll() {
    this.callService.getProductTypeAll().subscribe(res => {
      if (res.data) {
        this.productTypeList = res.data;
      }
    });
  }

  onDeleteProduct(productId: any) {
    if (productId) {
      this.callService.deleteProduct(productId).subscribe(res => {
        if (res.data) {
          window.location.reload(); // Reload page after deletion
        }
      });
    }
  }

  onUpdateProduct(productId: any) {
    this.router.navigate(['/product/' + productId]); // Navigate to product update page
  }
}
