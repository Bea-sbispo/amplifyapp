/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type LeaveMessageInputValues = {
    Field0?: string;
};
export declare type LeaveMessageValidationValues = {
    Field0?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LeaveMessageOverridesProps = {
    LeaveMessageGrid?: PrimitiveOverrideProps<GridProps>;
    Field0?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type LeaveMessageProps = React.PropsWithChildren<{
    overrides?: LeaveMessageOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: LeaveMessageInputValues) => LeaveMessageInputValues;
    onSuccess?: (fields: LeaveMessageInputValues) => void;
    onError?: (fields: LeaveMessageInputValues, errorMessage: string) => void;
    onChange?: (fields: LeaveMessageInputValues) => LeaveMessageInputValues;
    onValidate?: LeaveMessageValidationValues;
} & React.CSSProperties>;
export default function LeaveMessage(props: LeaveMessageProps): React.ReactElement;
