import { ProductService } from './../../core/services/product.service';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../core/models/product.interface';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {
  private readonly activateRoute = inject(ActivatedRoute);
  private readonly productService = inject(ProductService);
  
  productDetails = signal<Product>({} as Product)
  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((params)=>{
      this.getProductDetails(params.get('id')!);
    });
  }
  getProductDetails(id: string):void {
  this.productService.getSpecificProducts(id).subscribe({
     next:(res)=>{
        console.log(res.data);
        this.productDetails.set(res.data)
      },
      error:(err)=>{
        console.log(err)
      },
  })
 }
}


 

