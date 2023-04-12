import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BrandService } from 'src/app/services/brand.service';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {
id:any;
data:any;
product:any;
  constructor(private route:ActivatedRoute,private brandservice:BrandService,private produitservice:ProduitService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
    this.GetBrand();
  }
  GetBrand(){
    this.brandservice.getBrandByid(this.id).subscribe(res=>{
        this.data=res
        this.produitservice.GetProduitByBrand(this.data[0].BrandName).subscribe(res=>{
            this.product=res;
            console.log(this.product);
        })
    })
  }
}
