import { Injectable, signal } from '@angular/core';

export interface SIOToast {
  id: string;
  title: string;
  message: string;
  type: 'success' | 'danger' | 'warning' | 'info';
}

@Injectable({
  providedIn: 'root'
})
export class SIOToastrService {
  readonly toasts = signal<SIOToast[]>([]);

  show(message: string, title: string = '', config: { status?: 'success' | 'danger' | 'warning' | 'info' } = {}): void {
    const toast: SIOToast = {
      id: Math.random().toString(36).substring(2),
      title,
      message,
      type: config.status || 'info'
    };

    this.toasts.update(current => [...current, toast]);

    setTimeout(() => {
      this.remove(toast.id);
    }, 4000);
  }

  success(message: string, title: string = ''): void {
    this.show(message, title, { status: 'success' });
  }

  danger(message: string, title: string = ''): void {
    this.show(message, title, { status: 'danger' });
  }

  remove(id: string): void {
    this.toasts.update(current => current.filter(t => t.id !== id));
  }
}
