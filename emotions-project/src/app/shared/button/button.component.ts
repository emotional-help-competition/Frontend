import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() title!:string;
  @Input() classes!:string;

}
