import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogPropsType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

const Dialogs = (props: DialogPropsType) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogsData.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messagesData.map(m => <Message message={m.message} key={m.id}/>)

    let addNewMessage = (values: any) => {
        props.sendMessage(values.newMessagesBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>

    )
}
type FormDataTypes = {
    newMessagesBody: string
}
const AddMessageForm: React.FC<InjectedFormProps<FormDataTypes>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea' name='newMessagesBody' placeholder='Enter your message!'/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    );
};

const AddMessageFormRedux = reduxForm<FormDataTypes>({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;