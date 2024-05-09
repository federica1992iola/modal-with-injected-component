import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalWithDynamicContentComponent } from './modal-with-dynamic-content.component';

describe('ModalWithDynamicContentComponent', () => {
  let component: ModalWithDynamicContentComponent;
  let fixture: ComponentFixture<ModalWithDynamicContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ModalWithDynamicContentComponent]
    });
    fixture = TestBed.createComponent(ModalWithDynamicContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
