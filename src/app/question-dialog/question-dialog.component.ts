import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-question-dialog',
  templateUrl: './question-dialog.component.html',
  styleUrls: ['./question-dialog.component.scss']
})
export class QuestionDialogComponent implements OnInit {
  @Input() data: any;
  valueSelect: any;

  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal) {
    this.modalService.activeInstances.subscribe((list) => {
      console.log('list====', list);

    });
  }

  ngOnInit(): void {
    console.log('data', this.data)
  }

  close(): void {
    this.activeModal.close();
  }

  submit(): void {
    this.activeModal.close(this.valueSelect);
  }

  onSelectAns(env: any) {
    const value = env.target.defaultValue;
    this.valueSelect = this.data.options.find((item: any) => item.ans === value)
  }

}
