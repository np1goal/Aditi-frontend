import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLoadingComponent } from './home-loading.component';

describe('HomeLoadingComponent', () => {
  let component: HomeLoadingComponent;
  let fixture: ComponentFixture<HomeLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
