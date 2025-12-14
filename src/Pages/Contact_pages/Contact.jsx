import React, { useState } from 'react';
import './Contact.css';
import '../../Styles/Globals.css';

// Mock URL for your AWS API Gateway Endpoint
// REPLACE THIS WITH YOUR ACTUAL AWS API GATEWAY INVOKE URL
const API_GATEWAY_URL = 'YOUR_API_GATEWAY_URL_HERE';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [status, setStatus] = useState(''); // Stores 'Sending...', 'Success...', or 'Error...'
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [messageFocused, setMessageFocused] = useState(false);

    // Handles changes in the input fields and updates state
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handles the form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isSubmitting) return; // Prevent double submission

        setIsSubmitting(true);
        setStatus('Sending...');

        try {
            const response = await fetch(API_GATEWAY_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Sending JSON data to the API Gateway
                },
                body: JSON.stringify(formData),
            });

            // Check if the response status is 200-299 (OK)
            if (response.ok) {
                // If the response is successful, clear the form and show success message
                setFormData({ name: '', email: '', message: '' });
                setStatus('Message sent successfully! I will be in touch soon.');
            } else {
                // Handle non-OK status codes (e.g., 400, 500 from the API Gateway)
                const errorData = await response.json();
                setStatus(`Submission failed: ${errorData.message || 'Server error.'}`);
            }

        } catch (error) {
            // Handle critical network errors (e.g., no internet connection)
            console.error("Critical Network Error:", error);
            setStatus('A critical network error occurred. Check your connection.');
        } finally {
            setIsSubmitting(false);
        }
    };

    // Helper to determine the status message class
    const statusClass = status.includes('successfully') ? 'success' : status.includes('failed') || status.includes('error') ? 'error' : '';

    return (
        <div className="form-container">
            <h2><span className="to-change-color">Contact Me</span></h2>
            <p>I'd love to hear from you. Fill out the form below!</p>

            <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Your Message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="submit-btn"
                    disabled={isSubmitting} // Disable button while sending
                >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {/* Status Message Display */}
                {status && (
                    <div className={`form-status ${statusClass}`}>
                        {status}
                    </div>
                )}
            </form>
        </div>
    );
};

export default ContactForm;