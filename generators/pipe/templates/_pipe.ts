/* beautify ignore:start */
import {Pipe, PipeTransform} from '@angular/core';
/* beautify ignore:end */

@Pipe({ name: '<%=pipename%>' })
export class <%=pipenameClass%>Pipe implements PipeTransform {
	transform(value: string, ?args: string[]): any {
		return value;
	}
}
