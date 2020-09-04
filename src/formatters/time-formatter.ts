import { IFormatter } from './iformatter';
import { numberToStringWithLeadingZero, toFarsiNumber } from './price-formatter';

export class TimeFormatter implements IFormatter {
	private _formatStr: string;

	public constructor(format?: string) {
		this._formatStr = format || '%h:%m:%s';
	}

    public format(date: Date): string {
        return this._formatStr.replace(
            '%h',
            toFarsiNumber(numberToStringWithLeadingZero(date.getUTCHours(), 2))
        ).
            replace(
                '%m',
                toFarsiNumber(numberToStringWithLeadingZero(date.getUTCMinutes(), 2))
        ).
            replace(
                '%s',
                toFarsiNumber(numberToStringWithLeadingZero(date.getUTCSeconds(), 2))
        );
    }
}
