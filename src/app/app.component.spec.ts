import { HttpClientTestingModule } from '@angular/common/http/testing'
import { TestBed, waitForAsync } from '@angular/core/testing'
import { ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component'
import { AppService } from './app.service'

describe('AppComponent', () => {
  let appService: AppService

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [ReactiveFormsModule, HttpClientTestingModule],
        declarations: [AppComponent],
        providers: [AppService],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    appService = TestBed.inject(AppService)
  })

  it('should have a VALID form', () => {
    // Arrange
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    app.ngOnInit()

    // Act
    app.myForm.patchValue({
      firstName: 'Fanis',
      lastName: 'Prodromou',
    })

    // Assert
    expect(app.myForm.valid).toBeTrue()
  })

  it('should have an INVALID form', () => {
    // Arrange
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    app.ngOnInit()

    // Act
    app.myForm.patchValue({
      firstName: 'Fanis',
    })

    // Assert
    expect(app.myForm.valid).toBeFalse()
  })

  it('should have an INVALID form', () => {
    // Arrange
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    app.ngOnInit()
    spyOn(appService, 'save').and.stub()

    // Act
    app.myForm.patchValue({
      firstName: 'Fanis',
      lastName: 'Prodromou',
    })
    app.submit()

    // Assert
    expect(appService.save).toHaveBeenCalled()
  })
})
