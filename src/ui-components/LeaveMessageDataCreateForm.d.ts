/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type LeaveMessageDataCreateFormInputValues = {
    Field0?: string;
};
export declare type LeaveMessageDataCreateFormValidationValues = {
    Field0?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LeaveMessageDataCreateFormOverridesProps = {
    LeaveMessageDataCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Field0?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LeaveMessageDataCreateFormProps = React.PropsWithChildren<{
    overrides?: LeaveMessageDataCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: LeaveMessageDataCreateFormInputValues) => LeaveMessageDataCreateFormInputValues;
    onSuccess?: (fields: LeaveMessageDataCreateFormInputValues) => void;
    onError?: (fields: LeaveMessageDataCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LeaveMessageDataCreateFormInputValues) => LeaveMessageDataCreateFormInputValues;
    onValidate?: LeaveMessageDataCreateFormValidationValues;
} & React.CSSProperties>;
export default function LeaveMessageDataCreateForm(props: LeaveMessageDataCreateFormProps): React.ReactElement;
