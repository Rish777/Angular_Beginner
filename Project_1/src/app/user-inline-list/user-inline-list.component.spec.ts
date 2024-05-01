import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInlineListComponent } from './user-inline-list.component';

describe('UserInlineListComponent', () => {
  let component: UserInlineListComponent;
  let fixture: ComponentFixture<UserInlineListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserInlineListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserInlineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
