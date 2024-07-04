import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Motorcycle {
  id: number;
  name: string;
  crustType: string;
  size: string;
  price: number;
  status: string;
  image: string;
  quantity?: number;
}

@Component({
  selector: 'app-manage-motorcycle',
  templateUrl: './managemotorcycle.component.html',
  styleUrls: ['./managemotorcycle.component.css']
})
export class ManageMotorcycleComponent implements OnInit {
  motorcycles: Motorcycle[] = [];
  newMotorcycle: Partial<Motorcycle> = {
    name: '',
    crustType: '',
    size: '',
    price: 0,
    status: '',
    image: ''
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchMotorcyclesFromAPI();
  }

  fetchMotorcyclesFromAPI(): void {
    this.http.get<Motorcycle[]>('https://api.example.com/motorcycles').subscribe(
      data => {
        this.motorcycles = data;
      },
      error => {
        console.error('Error fetching motorcycles:', error);
      }
    );
  }

  addMotorcycle(): void {
    const newMotorcycle = { ...this.newMotorcycle, id: this.motorcycles.length + 1 };
    this.motorcycles.push(newMotorcycle as Motorcycle);
    this.newMotorcycle = {
      name: '',
      crustType: '',
      size: '',
      price: 0,
      status: '',
      image: ''
    };
  }

  deleteMotorcycle(motorcycle: Motorcycle): void {
    this.motorcycles = this.motorcycles.filter(m => m.id !== motorcycle.id);
  }
}
