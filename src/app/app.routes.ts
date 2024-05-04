import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./components/template-driven-forms/template-driven-forms.component').then(c => c.TemplateDrivenFormsComponent) },
  { path: 'reactive', loadComponent: () => import('./components/reactive-forms/reactive-forms.component').then(c => c.ReactiveFormsComponent) }
];
