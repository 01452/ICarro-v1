import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpEvent, HttpEventType, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, last, map} from 'rxjs/operators';

interface FileUpload {
  uploaded: boolean;
  percentage?: number;
  data?: ImgurResult;
}

interface ImgurResult {
  data: ImgurData;
  success: boolean;
  status: number;
}

interface ImgurData {
  id?: string;
  title?: string;
  description?: string;
  datetime?: number;
  type?: string;
  animated?: boolean;
  deletehash?: string;
  name?: string;
  link?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ImgurPhotoService {

  readonly URL = 'https://api.imgur.com/3/image';

  constructor(private httpService: HttpClient) {
  }

  uploadPhoto(file: File): Observable<FileUpload> {
    const formData = new FormData();
    formData.append('image', file);
    const req = new HttpRequest('POST', this.URL, formData, {
      reportProgress: true,
      headers: new HttpHeaders().append('Authorization', `Client-ID 22aa3aa25869147`)
    });
    return this.httpService.request(req).pipe(
      map(event => this.getEventMessage(event)),
      catchError(this.handleErrors)
    );
  }

  private handleErrors(error: HttpErrorResponse) {
    if (!error.status) {
      return throwError(`Connection error, try again`);
    }
    if (error.status === 400) {
      return throwError('Bad image');
    }
    if (error.status === 429) {
      return throwError('To much photo uploaded. Please try again later');
    }
    return throwError(error);
  }

  private getEventMessage(event: HttpEvent<any>): FileUpload {
    switch (event.type) {
      case HttpEventType.Sent:
        return {uploaded: false, percentage: 0};
      case HttpEventType.UploadProgress:
        const percentage = Math.round(event.loaded / event.total * 100);
        return {uploaded: false, percentage}
      case HttpEventType.Response:
        return {uploaded: true, data: event.body}
      default:
        return {uploaded: false};
    }
  }
}
