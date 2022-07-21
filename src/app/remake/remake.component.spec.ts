import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { RemakeComponent } from './remake.component';

describe('RemakeComponent', () => {
  let component: RemakeComponent;
  let fixture: ComponentFixture<RemakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemakeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
