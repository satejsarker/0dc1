import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';
/**
 * Generated class for the DatePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'dateF',
})
export class DatePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    return moment(value).fromNow();
  }
}
