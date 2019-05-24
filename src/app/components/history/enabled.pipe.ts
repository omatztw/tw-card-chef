import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'enabledDisplay'
})
export class EnabledPipe implements PipeTransform {

  constructor(private dom: DomSanitizer) { }
  transform(value: boolean): any {
    if (value === null || value === undefined) {
      return '<span>不明(旧バージョン)</span>';
    }

    if (value) {
      return this.dom.bypassSecurityTrustHtml(`<span class="text-success"><i class="fa fa-check-circle-o fa-lg"></i> 有効</span>`);
    }

    return this.dom.bypassSecurityTrustHtml(`<span class="text-danger"><i class="fa fa-times-circle-o fa-lg"></i> 無効</span>`);
  }

}
