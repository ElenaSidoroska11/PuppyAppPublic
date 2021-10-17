import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DogePopComponent } from './doge-pop.component';

describe('DogePopComponent', () => {
  let component: DogePopComponent;
  let fixture: ComponentFixture<DogePopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogePopComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DogePopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
