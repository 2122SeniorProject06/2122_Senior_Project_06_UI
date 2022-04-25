import {Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ThemePalette} from '@angular/material/core';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'Checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css'],

})

export class CheckInComponent {

  constructor(
    private router: Router,
    private route: ActivatedRoute){}

  goToMain() {
    this.router.navigateByUrl('/main-menu');
  }

  currentDate = new Date();

  ngAfterViewInit(): void {
    document.getElementsByClassName('mat-tab-header-pagination-before')[0].remove();
    document.getElementsByClassName('mat-tab-header-pagination-after')[0].remove();
  }

  restartCheckIn() {
    window.location.reload();
  }

  task: Task = {
    name: 'Day Completed',
    completed: false,
    color: 'accent',
    subtasks: [
      {name: 'Make the Bed', completed: false, color: 'primary'},
      {name: 'Take a walk', completed: false, color: 'primary'},
      {name: 'Read 10 pages of a book', completed: false, color: 'primary'},
    ],
  };

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => (t.completed = completed));
  }
}