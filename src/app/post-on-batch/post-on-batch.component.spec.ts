import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostOnBatchComponent } from './post-on-batch.component';

describe('PostOnBatchComponent', () => {
  let component: PostOnBatchComponent;
  let fixture: ComponentFixture<PostOnBatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostOnBatchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostOnBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
