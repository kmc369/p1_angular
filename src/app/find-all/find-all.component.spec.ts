import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';
import { FindAllComponent } from './find-all.component';

describe('FindAllComponent', () => {
  let component: FindAllComponent;
  let fixture: ComponentFixture<FindAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
