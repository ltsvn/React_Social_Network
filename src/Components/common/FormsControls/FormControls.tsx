import React, {FC, TextareaHTMLAttributes} from 'react';
import s from './FormControls.module.css';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    input: any;
    meta: {
        touched: boolean;
        error?: string;
    };
}

const FormControl: FC<TextareaProps> = ({input, meta, children, ...props}) => {
    const hasError = meta.touched && meta.error;
    const errorStyled = `${s.formControl} ${hasError ? s.error : ''}`;
    return (
        <div className={errorStyled}>
            <div>{children}</div>
            {hasError && <span>{meta.error}</span>}
        </div>
    );
};

export const Textarea: FC<TextareaProps> = (props) => {
    const {input, meta, children, ...restProps} = props;
    return (
        <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
    );
};

export const Input: FC<TextareaProps> = (props) => {
    const {input, meta, children, ...restProps} = props;
    return (
        <FormControl {...props}><input {...input} {...restProps} /></FormControl>
    );
};
