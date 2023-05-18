import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import { Textarea } from "../../common/FormsControls/FormControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

export type FormDataTypes = {
    newMessagesBody: string
}

const maxLength50 = maxLengthCreator(50)

const AddMessageForm: React.FC<InjectedFormProps<FormDataTypes>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={[required, maxLength50]}
                       name='newMessagesBody' placeholder='Enter your message!'/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    );
};



export default reduxForm<FormDataTypes>({form: 'dialogAddMessageForm'})(AddMessageForm);