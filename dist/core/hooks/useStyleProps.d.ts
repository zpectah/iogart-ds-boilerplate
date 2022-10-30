import { WithClassNameProps, WithStyleProps } from '../types';
export interface UseStylePropsProps extends WithClassNameProps, WithStyleProps {
    classList?: string[];
}
export interface UseStylePropsReturn extends WithClassNameProps, WithStyleProps {
}
export declare const useStyleProps: (props: UseStylePropsProps) => UseStylePropsReturn;
//# sourceMappingURL=useStyleProps.d.ts.map