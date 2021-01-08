import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class AppService {
  constructor(private http: HttpClient) {}

  save(formData: any) {
    return this.http.post('ENDPOINT', formData)
  }
}
