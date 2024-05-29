import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SellerService } from '../../services/seller.service';
import { signUp } from '../../interfaces/data-type.interface';

@Component({
  selector: 'app-seller-auth',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.css',
})
export class SellerAuthComponent {
  constructor(private sellerService: SellerService) {}

  ngOnInit(): void {
    this.sellerService.reloadSeller();
  }

  signUp(data: signUp): void {
    this.sellerService.userSignUp(data);
  }
}
