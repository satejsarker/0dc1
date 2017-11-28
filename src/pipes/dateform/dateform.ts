import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

/**
 * Generated class for the DateformPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'dateform',pure: false
})
export class DateformPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(date) {
    return moment(date).fromNow()
  }
}
