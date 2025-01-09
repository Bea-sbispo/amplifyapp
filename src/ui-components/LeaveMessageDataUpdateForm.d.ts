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
export declare type LeaveMessageDataUpdateFormInputValues = {
    Field0?: string;
};
export declare type LeaveMessageDataUpdateFormValidationValues = {
    Field0?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LeaveMessageDataUpdateFormOverridesProps = {
    LeaveMessageDataUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Field0?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LeaveMessageDataUpdateFormProps = React.PropsWithChildren<{
    overrides?: LeaveMessageDataUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    leaveMessageData?: any;
    onSubmit?: (fields: LeaveMessageDataUpdateFormInputValues) => LeaveMessageDataUpdateFormInputValues;
    onSuccess?: (fields: LeaveMessageDataUpdateFormInputValues) => void;
    onError?: (fields: LeaveMessageDataUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LeaveMessageDataUpdateFormInputValues) => LeaveMessageDataUpdateFormInputValues;
    onValidate?: LeaveMessageDataUpdateFormValidationValues;
} & React.CSSProperties>;
export default function LeaveMessageDataUpdateForm(props: LeaveMessageDataUpdateFormProps): React.ReactElement;
