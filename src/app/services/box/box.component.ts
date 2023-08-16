import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent {
  @Input() delay: String='';
  @Input() titulo: String='';
  @Input() texto: String='';
  @Input() icono: String='';

  constructor(){
  }
}
