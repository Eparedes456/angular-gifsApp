
import {  Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  
})
export class SidebarComponent {

  constructor(private gifsServices: GifsService){}

  get tags(){
    return this.gifsServices.tagsHistory;
  }

  clickSearchTag(currentTag: string):void{
    this.gifsServices.searchTag(currentTag);
  }



}
