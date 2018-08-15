import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'nextpork-solicitar',
  templateUrl: './solicitar.component.html',
  styleUrls: ['./solicitar.component.scss']
})
export class SolicitarComponent implements OnInit {
  constructor(private modalService: NgbModal) {}
  // openLg(content) {
  //   this.modalService.open(content, { size: 'lg' });
  // }

  ngOnInit() {}
}
