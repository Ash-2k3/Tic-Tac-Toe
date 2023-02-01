import { Component , Input} from '@angular/core';

import {faCircle} from "@fortawesome/free-regular-svg-icons"
import {faTimes , faPen} from "@fortawesome/free-solid-svg-icons"

@Component({
  template: '',
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent  {
  
 @Input() iconName:string = ''; // decorate the propery with @Input

 faPen = faPen ;
 faTimes = faTimes;
 faCircle = faCircle
 
}
