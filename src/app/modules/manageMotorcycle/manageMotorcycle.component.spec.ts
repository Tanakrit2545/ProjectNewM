import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { ManageMotorcycleComponent } from './manageMotorcycle.component';

describe('ManageMotorcycleComponent', () => {
  let component: ManageMotorcycleComponent;
  let fixture: ComponentFixture<ManageMotorcycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageMotorcycleComponent ],
      imports: [ HttpClientTestingModule, FormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageMotorcycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a motorcycle', () => {
    const initialLength = component.motorcycles.length;
    component.newMotorcycle = {
      name: 'Test Bike',
      crustType: 'Sport',
      size: '1000cc',
      price: 1000,
      status: 'Available',
      image: 'test.jpg'
    };
    component.addMotorcycle();
    expect(component.motorcycles.length).toBe(initialLength + 1);
  });

  it('should delete a motorcycle', () => {
    const bike = {
      id: 1,
      name: 'Test Bike',
      crustType: 'Sport',
      size: '1000cc',
      price: 1000,
      status: 'Available',
      image: 'test.jpg'
    };
    component.motorcycles.push(bike);
    component.deleteMotorcycle(bike);
    expect(component.motorcycles.includes(bike)).toBeFalse();
  });
});
