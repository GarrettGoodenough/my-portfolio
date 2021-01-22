import { useState } from 'react';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';

const Contact = () => {

    const { successMessage, setSuccessMessage } = useState("");
    const { register, handleSubmit, errors } = useForm();

    const serviceID = "service_ID";
    const templateID ="template_ID";
    const userID = "user_MKpQPRYLIkVv78H8ZZ1N5";

    const onSubmit = (data, r) => {
        sendEmail(
            serviceID,
            templateID,
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                description: data.description
            },
            userID
            )
            r.target.reset();
    }

    const sendEmail= (serviceID, templateID, variables, userID) => {
    emailjs.send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage("Form sent successfully! I will contact you as soon as possible.");
      }).catch(err => console.error(`Something went wrong ${err}`));
  }

    return (
        <div className="contact">
            <div className="text-center">
                <h1>Contact Me</h1>
                <p>Please fill out the form and describe your project needs. I will contact you as soon as possible.</p>
                <span className="success-message">{successMessage}</span>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                            {/* NAME INPUT */}
                            <div className="text-center">
                                <input className="form-control" type="text" placeholder="Name" name="name" 
                                ref={
                                    register({
                                        required: "Please enter your name.",
                                        maxLength: {
                                            value: 360,
                                            message: "Please enter a name with fewer than 360 characters."
                                        }
                                    })
                                } />
                                <div className="line">
                                </div>
                            </div>
                            <span className="error-message">{errors.name && errors.name.message}</span>
                            {/* PHONE INPUT */}
                            <div className="text-center">
                                <input className="form-control" type="text" placeholder="Phone Number" name="phone"
                                ref={
                                    register({
                                        required: "Please add your phone number."
                                    })
                                }
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">{errors.phone && errors.phone.message}</span>
                            {/* EMAIL INPUT */}
                            <div className="text-center">
                                <input className="form-control" type="text" placeholder="Email" name="email"
                                ref={
                                    register({
                                        required: "Please add your email.",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Invalid email"
                                        }
                                    })
                                }
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">{errors.email && errors.email.message}</span>
                            {/* SUBJECT INPUT */}
                            <div className="text-center">
                                <input className="form-control" type="text" placeholder="Subject" name="subject"
                                ref={
                                    register({
                                        required: "Oops! You forgot to add a subject."
                                    })
                                }
                                />
                                <div className="line"></div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xs-12">
                        <span className="error-message">{errors.subject && errors.subject.message}</span>
                            {/* DESCRIPTION */}
                            <div className="text-center">
                                <textarea className="form-control" type="text" placeholder="Tell me about your project..." name="description"
                                ref={
                                    register({
                                        required: "Please briefly describe your inquiry. Thank you!"
                                    })
                                }></textarea>
                                <div className="line"></div>
                                <span className="error-message">{errors.description && errors.subject.description}</span>
                            </div>
                            <button className="btn-main-offer contact-btn" type="submit">Contact Me</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
