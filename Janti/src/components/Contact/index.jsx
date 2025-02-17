import React, { useState } from "react";
import "./style.css";

const ContactPage = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted", formData);
        setSubmitted(true);
    };

    return (
        <div style={{ maxWidth: "1000px", margin: "auto", padding: "20px", color: "black" }}>
            <h1>Bize Mesaj Gönderin</h1>
            {submitted ? (
                <p>Teşekkürler! Mesajınız başarıyla gönderildi.</p>
            ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    {/* Form */}
                    <div>
                        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                            <div className="input-box-container">

                                <input
                                    type="text"
                                    name="name"
                                    placeholder="adınız"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="input-box"
                                    autoCorrect="off"
                                />
                                <label className="input-box-label">İSİM</label>
                            </div>
                            <div className="input-box-container">

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="eposta"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="input-box"
                                    autoComplete="off"
                                />
                                <label className="input-box-label">EPOSTA</label>
                            </div>
                            <div className="input-box-container">

                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    className="input-box"
                                />
                                <label className="input-box-label">MESAJ</label>
                            </div>
                            <button
                                type="submit"
                                style={{
                                    padding: "12px 20px",
                                    backgroundColor: "#333",
                                    color: "#fff",
                                    border: "none",
                                    cursor: "pointer",
                                    fontSize: "16px",
                                }}
                            >
                                Gönder
                            </button>
                        </form>
                    </div>

                    {/* Google Maps */}
                    <div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6988.135920139862!2d29.067669872933987!3d40.95807912818245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac707affc1591%3A0x517a05f80a37bdc6!2sJanti%20Organizasyon!5e0!3m2!1str!2str!4v1739539755942!5m2!1str!2str"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Google Maps Konumu"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ContactPage;
