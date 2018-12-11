import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'numberConvertFormat2'
})
export class NumberConverterFormat2Pipe implements PipeTransform {

    transform(value: number | string, locale?: string): string {
        return new Intl.NumberFormat(locale, {
            minimumFractionDigits: 2
        }).format(Number(value));
    }

}
