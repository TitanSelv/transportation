import React from 'react';
import "./modal.css";
import { useState } from 'react';
import { send } from 'emailjs-com';

const Modal = ({ active, setActive, children }) => {

    function Form() {
        const [toSend, setToSend] = useState({
            from_name: '',
            message: '',
        });

        const onSubmit = (e) => {
            e.preventDefault();
            send(
                'service_j4p3oe6',
                'template_2fdnm17',
                {
                    from_name: toSend.from_name,
                    message: toSend.message,
                    reply_to: 'safetoure570@gmail.com'
                },
                'iBNQTp8BOmfRXCLAo'
            )
                .then(() => alert('Message sent successfully!'))
                .catch(() => alert('Error sending message'))
        }

        return (
            <form onSubmit={onSubmit}>
                <label className='form_label'>Оставить заявку</label>
                <input className='name'
                    type="text"
                    name="from_name"
                    placeholder="Ваше имя"
                    value={toSend.from_name}
                    onChange={(e) => setToSend({ ...toSend, from_name: e.target.value })}
                />
                <input className='number'
                    name="message"
                    placeholder="Номер телефона"
                    value={toSend.message}
                    onChange={(e) => setToSend({ ...toSend, message: e.target.value })}
                />
                <button className='button_form' type="submit">Send</button>
            </form>
        )
    }

    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content" : "modal"} onClick={e => e.stopPropagation()}>
                <Form />
            </div>
        </div>
    );
}

export default Modal;