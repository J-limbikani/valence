"use client";

import React, { useState, useRef, ChangeEvent, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import styles from "../../style"; // Ensure this is correctly set up

const Contact = () => {
    // Specify the type of the ref as HTMLFormElement | null
    const formRef = useRef<HTMLFormElement | null>(null); 

    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        
        emailjs.send(
            'service_a4yifyj',
            'template_ghams8d',
            {
                from_name: form.name,
                to_name: 'Valence Energy Solutions',
                from_email: form.email,
                to_email: 'jamesmhende1@outlook.com',
                message: form.message,
            },
            'Q1j6q-Hwm1mWM7KF2'
        )
        .then(() => {
            setLoading(false);
            alert('Thank you, We will get back to you shortly.');
            setForm({
                name: '',
                email: '',
                message: '',
            });
        }, (error) => {
            setLoading(false);
            console.log(error);
            alert('Something went wrong!');
        });
    };

    return (
        <div className={`${styles.marginY} ${styles.padding} xl:mt-8 xl:flex-row flex-col-reverse flex gap-16 overflow-hidden`}>
            <div className="flex-[0.75] text-white bg-black-gradient-2 p-6 rounded-2xl">
                <p className={`${styles.paragraph} ml-2`}>Lets connect</p>
                <h3 className={styles.heading2}>Contact.</h3>
                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="mt-8 flex flex-col gap-6"
                >
                    {/* Name Input */}
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-3">Your Name</span>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="What's your name?"
                            className="bg-primary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                        />
                    </label>

                    {/* Email Input */}
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-3">Your Email</span>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="What's your email?"
                            className="bg-primary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                        />
                    </label>

                    {/* Message Textarea */}
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-3">Your Message</span>
                        <textarea
                            rows={7}
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Your message here."
                            className="bg-primary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                        />
                    </label>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="bg-primary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-2xl"
                    >
                        {loading ? "Sending..." : "Send"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
