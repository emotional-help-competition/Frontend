import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./card.component.scss']
})
export class CardComponent{

  @Input() imgSrc = '';
  @Input() content = '';
  @Input() title = '';
  @Input() color?:string;

}
