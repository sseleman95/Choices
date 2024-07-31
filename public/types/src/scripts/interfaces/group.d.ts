import { InputChoice } from './input-choice';
import { StringUntrusted } from './string-untrusted';
export interface Group {
    id?: number;
    active?: boolean;
    disabled?: boolean;
    label?: StringUntrusted | string;
    value: string;
    choices: InputChoice[];
}
//# sourceMappingURL=group.d.ts.map