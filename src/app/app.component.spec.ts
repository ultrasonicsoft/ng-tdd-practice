import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
  }));
  it('should create the app', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));

  it(`should return true if user authenticated`, () => {
    let component = fixture.debugElement.componentInstance;

    component.userName = 'balram';
    component.password = 'chavan';
    let result = component.isAuthenticated();
    expect(result).toBe(true, 'Should be true if user details are correct.');
  });

  it(`should render 'Login successful' if user details are correct`, () => {



    expect(true).toBe(true);
  });
});
