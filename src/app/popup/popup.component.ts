import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { BsModalService, BsModalRef } from '../../../node_modules/ngx-bootstrap';

@Component({
  selector: 'popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
  static modalRef: BsModalRef;
  modal: BsModalRef;
  @Input() title: string;
  @Input() buttonName: string;

  static closeModal() {
    PopupComponent.modalRef.hide();
  }

  close() {
    this.modal.hide();
  }

  constructor(private modalService: BsModalService) {
  }

  openModal(template: TemplateRef<any>) {
    PopupComponent.modalRef = this.modalService.show(template);
    this.modal = PopupComponent.modalRef;
  }
}
