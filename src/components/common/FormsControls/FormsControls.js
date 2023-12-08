import style from './FormsControls.module.scss';

const FormControl = ({input, meta, ...props}) => {

    const hasError = meta.error && meta.touched;

    return (
        <div className={`${style.form_control} ${props.className} ${hasError ? style.error : ''}`}>
            {props.children}
            <span>{meta.error}</span>
        </div>
    )
}

export const Textarea = (props) => {

    const {input, meta, ...restProps} = props;
    return (
        <FormControl {...props}><textarea {...input} {...restProps}></textarea></FormControl>
    )
}

export const Input = (props) => {

    const {input, meta, ...restProps} = props;

    return (
        <FormControl {...props}><input {...input} {...restProps} /></FormControl>
    )
}