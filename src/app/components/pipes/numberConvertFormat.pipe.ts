import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'numberConvertFormat'
})
export class NumberConverterFormatPipe implements PipeTransform {

    transform(value: number | string, locale?: string): string {
        return new Intl.NumberFormat(locale, {
            minimumFractionDigits: 0
        }).format(Number(value));
    }

}
