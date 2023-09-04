import { Injectable, Type } from '@angular/core';
import { NgbModal, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Observable, catchError, from, of, take } from 'rxjs';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MessageDialogComponent } from './message-dialog/message-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class FdtDialogService {

  constructor(private modalService: NgbModal) { }

  open<T, R>(content: Type<T>, config?: Partial<T>, options?: NgbModalOptions): Observable<R> {
    return this.openInternal<T, R>(content, config, options);
  }

  message(data: {message: string, title: string}) {
    return this.openInternal<MessageDialogComponent, void>(MessageDialogComponent, data);
  }

  confirm(prompt: string): Observable<boolean> {
    return this.openInternal<ConfirmDialogComponent, boolean>(ConfirmDialogComponent, { prompt: prompt });
  }

  private openInternal<T, R>(component: Type<T>, config?: Partial<T>, options?: NgbModalOptions): Observable<R> {
    const modal = this.modalService.open(
      component,
      { backdrop: 'static', ...options }
    );

    // copy the config values (if any) into the component
    Object.assign(modal.componentInstance, config);

    return from(modal.result).pipe(
      take(1),
      catchError(error => {
        console.warn(error);
        return of();
      })
    );
  }
}
