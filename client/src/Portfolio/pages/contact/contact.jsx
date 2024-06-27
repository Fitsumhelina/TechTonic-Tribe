import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import Axios library
import'./contact.css'

function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });


    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://static-bundles.visme.co/forms/vismeforms-embed.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = formData;
        const mailtoLink = `mailto:techtonic.inbox@gmail.com?subject=Contact Form Submission&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
        window.location.href = mailtoLink;
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <>
        <section id="contact">

        <div className='contactform'>
            <div className='contactform'>
                <div className="space">
                    
                </div>
            <form onSubmit={handleSubmit}>
                <div className="visme_d" data-title="Untitled Project" data-url="1jmyxgk3-untitled-project" data-domain="forms" data-full-page="false" data-min-height="500px" data-form-id="62241">
                    <input type="text" name="name" onChange={handleChange} />
                    <input type="email" name="email" onChange={handleChange} />
                    <button type="submit">Submit</button>
                </div>
            </form>
            </div>
        </div>
        
        </section>
        
        </>
    );
}

export default Contact;