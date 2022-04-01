import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appFiledrag]'
})
export class FiledragDirective {

  @HostBinding('style.background') private background = '#eee';
  @HostBinding('style.border') private borderStyle = '2px dashed';
  @HostBinding('style.border-color') private borderColor = '#696D7D';

  constructor() { }

  @HostListener('dragover', ['$event']) public onDragOver(event:any){
    event.preventDefault();
    event.stopPropagation();
    this.background = 'lightgray';
    this.borderColor = 'cadetblue';
    this.borderStyle = '3px solid';
    console.log('dragOver');
    console.log(event)
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(event : any){
    event.preventDefault();
    event.stopPropagation();
    this.background = '#eee';
    this.borderColor = '#696D7D';
    this.borderStyle = '2px dashed';
  }

  @HostListener('drop', ['$event']) public onDrop(event : any){
    event.preventDefault();
    event.stopPropagation();
    this.background = '#eee';
    this.borderColor = '#696D7D';
    this.borderStyle = '2px dashed';
    // debugger;
    // let files = evt.dataTransfer.files;
    // let valid_files : Array<File> = files;
    // this.filesChangeEmiter.emit(valid_files);
  }

}
