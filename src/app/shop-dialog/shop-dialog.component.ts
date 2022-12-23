import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-dialog',
  templateUrl: './shop-dialog.component.html',
  styleUrls: ['./shop-dialog.component.scss']
})
export class ShopDialogComponent implements OnInit {

  data = [
    {image:'../assets/images/kisspng-fukei-villa-download-creative-house-5a8b76c3c8db09.0149505115190893478227.jpg', point: 20},
    {image:'../assets/images/png-clipart-two-jeweled-gold-colored-rings-illustration-wedding-ring-gorgeous-wedding-ring-material-love-gemstone.png', point: 40},
    {image:'../assets/images/png-transparent-car-mercedes-car-love-compact-car-vehicle-thumbnail.png', point: 60},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
