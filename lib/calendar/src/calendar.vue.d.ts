import { PropType } from 'vue';
type ThemeType = 'black' | 'light';
declare const _sfc_main: import("vue").DefineComponent<{
    modelValue: (StringConstructor | NumberConstructor | DateConstructor)[];
    theme: {
        type: PropType<ThemeType>;
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    maskColor: {
        type: StringConstructor;
        default: string;
    };
    maskSize: {
        type: NumberConstructor;
        default: number;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: (StringConstructor | NumberConstructor | DateConstructor)[];
    theme: {
        type: PropType<ThemeType>;
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    maskColor: {
        type: StringConstructor;
        default: string;
    };
    maskSize: {
        type: NumberConstructor;
        default: number;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    theme: ThemeType;
    color: string;
    maskColor: string;
    maskSize: number;
}>;
export default _sfc_main;
