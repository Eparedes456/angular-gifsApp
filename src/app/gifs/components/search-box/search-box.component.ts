
import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
    selector: 'gifs-search-box',
    template: 
    `
        <h5>Buscar:</h5>
        <input 
            type="text"
            class="form-control"
            placeholder="Buscar gifs ...."
            (keyup.enter)="searchType()"
            #txtTagInput
        >
    `
})

export class SearchBoxComponent {

    @ViewChild('txtTagInput')
    public tagInput!: ElementRef<HTMLInputElement>

    constructor( private gifsServices: GifsService ) { }

    searchType(){
        const newTag = this.tagInput.nativeElement.value;
        this.gifsServices.searchTag(newTag);
        this.tagInput.nativeElement.value = '';
    }

}