import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdformComponent } from './thirdform.component';

describe('ThirdformComponent', () => {
  let component: ThirdformComponent;
  let fixture: ComponentFixture<ThirdformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
