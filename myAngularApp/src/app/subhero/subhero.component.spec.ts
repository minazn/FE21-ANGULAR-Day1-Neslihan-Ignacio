import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubheroComponent } from './subhero.component';

describe('SubheroComponent', () => {
  let component: SubheroComponent;
  let fixture: ComponentFixture<SubheroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubheroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubheroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
