import React, { useContext, useState } from 'react';
import axios from 'axios';
import isEmail from 'validator/lib/isEmail';
import {
    FaLinkedinIn,
    FaGithub,
} from 'react-icons/fa';
import { AiOutlineSend, AiOutlineCheckCircle } from 'react-icons/ai';
import { FiPhone, FiAtSign } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';

import { ThemeContext } from '../../context/ThemeContext';
import { socialsData } from '../../data/socialsData';
import { contactsData } from '../../data/contactsData';
import './Contact.css';

function Contact() {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const { theme } = useContext(ThemeContext);

    const handleClose = () => {
        setOpen(false);
    };

    const handleContactForm = (e) => {
        e.preventDefault();

        if (name && email && message) {
            if (isEmail(email)) {
                const responseData = {
                    name: name,
                    email: email,
                    message: message,
                };

                axios.post(contactsData.sheetAPI, responseData).then((res) => {
                    console.log('success');
                    setSuccess(true);
                    setErrMsg('');

                    setName('');
                    setEmail('');
                    setMessage('');
                    setOpen(false);
                });
            } else {
                setErrMsg('Invalid email');
                setOpen(true);
            }
        } else {
            setErrMsg('Enter all the fields');
            setOpen(true);
        }
    };

    return (
        <div className='contacts' id='contacts' style={{ backgroundColor: theme.secondary }}>
            <div className='contacts--container'>
                <h1 style={{ color: theme.primary }}>Contactos</h1>
                <div className='contacts-body'>
                    <div className='contacts-form'>
                        <form onSubmit={handleContactForm}>
                            <div className='input-container'>
                                <label htmlFor='Name' className='form-label'>
                                    Nombre
                                </label>
                                <input
                                    placeholder='Javier Torrecilla Reyes'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    type='text'
                                    name='Name'
                                    className='form-input'
                                    style={{
                                        border: `4px solid ${theme.primary80}`,
                                        backgroundColor: theme.secondary,
                                        color: theme.tertiary,
                                    }}
                                />
                            </div>
                            <div className='input-container'>
                                <label htmlFor='Email' className='form-label'>
                                    Email
                                </label>
                                <input
                                    placeholder='javiertorrecillareyes@gmail.com'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type='email'
                                    name='Email'
                                    className='form-input'
                                    style={{
                                        border: `4px solid ${theme.primary80}`,
                                        backgroundColor: theme.secondary,
                                        color: theme.tertiary,
                                    }}
                                />
                            </div>
                            <div className='input-container'>
                                <label htmlFor='Message' className='form-label'>
                                    Mensaje
                                </label>
                                <textarea
                                    placeholder='Deja tu mensaje.'
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    type='text'
                                    name='Message'
                                    className='form-message'
                                    style={{
                                        border: `4px solid ${theme.primary80}`,
                                        backgroundColor: theme.secondary,
                                        color: theme.tertiary,
                                    }}
                                />
                            </div>

                            <div className='submit-btn'>
                                <button
                                    type='submit'
                                    className='submit-button'
                                    style={{
                                        backgroundColor: theme.primary,
                                        color: theme.secondary,
                                    }}
                                >
                                    <p>{!success ? 'Enviar' : 'Enviado'}</p>
                                    <div className='submit-icon'>
                                        <AiOutlineSend
                                            className='send-icon'
                                            style={{
                                                animation: !success
                                                    ? 'initial'
                                                    : 'fly 0.8s linear both',
                                                position: success
                                                    ? 'absolute'
                                                    : 'initial',
                                            }}
                                        />
                                        <AiOutlineCheckCircle
                                            className='success-icon'
                                            style={{
                                                display: !success
                                                    ? 'none'
                                                    : 'inline-flex',
                                                opacity: !success ? '0' : '1',
                                            }}
                                        />
                                    </div>
                                </button>
                            </div>
                        </form>
                        {open && (
                            <div className='snackbar' style={{ backgroundColor: theme.primary, color: theme.secondary }}>
                                <p>{errMsg}</p>
                                <button onClick={handleClose} className='snackbar-close'>
                                    <span>&times;</span>
                                </button>
                            </div>
                        )}
                    </div>

                    <div className='contacts-details'>
                        <a href={`mailto:${contactsData.email}`} className='personal-details'>
                            <div className='details-icon' style={{ backgroundColor: theme.primary, color: theme.secondary }}>
                                <FiAtSign />
                            </div>
                            <p style={{ color: theme.tertiary }}>{contactsData.email}</p>
                        </a>
                        <a href={`tel:${contactsData.phone}`} className='personal-details'>
                            <div className='details-icon' style={{ backgroundColor: theme.primary, color: theme.secondary }}>
                                <FiPhone />
                            </div>
                            <p style={{ color: theme.tertiary }}>{contactsData.phone}</p>
                        </a>
                        <div className='personal-details'>
                            <div className='details-icon' style={{ backgroundColor: theme.primary, color: theme.secondary }}>
                                <HiOutlineLocationMarker />
                            </div>
                            <p style={{ color: theme.tertiary }}>{contactsData.address}</p>
                        </div>

                        <div className='socialmedia-icons'>
                            {socialsData.github && (
                                <a
                                    href={socialsData.github}
                                    target='_blank'
                                    rel='noreferrer'
                                    className='social-icon'
                                    style={{ backgroundColor: theme.primary, color: theme.secondary }}
                                >
                                    <FaGithub aria-label='GitHub' />
                                </a>
                            )}
                            {socialsData.linkedIn && (
                                <a
                                    href={socialsData.linkedIn}
                                    target='_blank'
                                    rel='noreferrer'
                                    className='social-icon'
                                    style={{ backgroundColor: theme.primary, color: theme.secondary }}
                                >
                                    <FaLinkedinIn aria-label='LinkedIn' />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <img src={theme.contactsimg} alt='contacts' className='contacts--img' />
        </div>
    );
}

export default Contact;