import React, { useState } from 'react';
import './Email.css';
import axios from 'axios';

function Email() {
    const [userName , setUserName] = useState('');
    const [fullName, setFullName] = useState('');
    const [email,setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [sent,setSent] = useState(false);
    const [error,setError] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        if (!(userName && fullName && email && message)){
            setError('Form fields cant be empty. please fill all the details');
        }
        else{
            setError('');
            let data= {
                userName,
                fullName,
                email,
                message,
            }
            axios.post('http://localhost:3001/api/emailSent',data)
            .then(res => {
                setSent(true);
                resetForm();
                console.log('message sent succesfully');
            })
            .catch( () => {
                console.log('message not sent')
            })
        }
        
    }
    const resetForm = () => {
        setUserName('');
        setFullName('');
        setEmail('')
        setMessage('');
        setTimeout(() => {
            setSent(false);
        },3000)

    }
    return (
        <div className='social'>
            <div className='social_emailContainer'>
            <div className='social_emailForm'>
                <form onSubmit={submitHandler}>
                    { error ? <div className='form_fields_error form_items'>
                            <label>{error}</label>
                        </div> 
                        : <div></div> }
                    
                    <div className='username form_items'>
                        <label htmlFor='username'>Username</label>
                        <input name='username' placeholder='enter userName ' value={userName} 
                        onChange={e => setUserName(e.target.value)}></input>
                    </div>
                    <div className='fullname form_items'>
                        <label htmlFor='fullname'>Fullname</label>
                        <input name='fullname' placeholder='enter fullName ' value={fullName} onChange={e => setFullName(e.target.value)} />
                    </div>
                    <div className='email form_items'>
                        <label htmlFor='email'>Email</label>
                        <input name='email' placeholder='enter gmail address ' value={email} onChange={e => setEmail(e.target.value)}></input>
                    </div>
                    <div className='form_message form_items'>
                        <label htmlFor='message'>Message</label>
                        <textarea cols='10' rows='5' name='message' placeholder='enter the message ' value={message} onChange={e => setMessage(e.target.value)}></textarea>
                    </div>
                    <div className='btn form_items'>
                        <button type='submit'>submit</button>
                    </div>
                    <div className={sent?`email_message_appear form_items`:`email_message`}>
                        <p>message sent successfully</p>
                    </div>
                </form>
            </div>
            </div>
            
        </div>
    )
}

export default Email
