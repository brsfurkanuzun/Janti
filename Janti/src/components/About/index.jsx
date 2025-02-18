import { useState } from "react";
import "./style.css";

function About() {
    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="about-page">
            {/* Üstte büyük resim */}
            <div className="header">
                <img src="wedding2.jpg" alt="Header" />
            </div>

            <div className="content-container">
                {/* Sol Menü */}
                <nav className="side-menu">
                    <a onClick={() => scrollToSection("section1")}>Biz Kimiz</a>
                    <a onClick={() => scrollToSection("section2")}>Neden Bizi Seçmelisiniz</a>
                    <a onClick={() => scrollToSection("section3")}>Nasıl Çalışıyoruz</a>
                </nav>

                {/* Sağ İçerik */}
                <div className="content">
                    <section id="section1">
                        <h2>Biz Kimiz</h2>
                        <p>Janti Organizasyon 2012 yılında İstanbul Suadiye’de kuruldu. Çalışmaya başladığı günden bu yana 100% misafir memnuniyeti ve kaliteden ödün vermeden devam ettiği hizmet anlayışıyla hala ilk günkü heyecanı ile çalışmalarını sürdürmektedir. Janti Organizasyon, iyi ilişkiler kurarak, keyifli, farklı ve verimli işler yapıyor. Her geçen gün sizlerle beraber değerli ailesini büyütüyor ve mutluluklarınıza destek vererek çalışmalarına devam ediyor.</p>
                    </section>
                    <section id="section2">
                        <h2>Neden Bizi Seçmelisiniz</h2>
                        <p>Her zamankinden daha parıltılı davetler… Janti Organizasyon, davetlerinize ve aldığınız hizmetlere hayat veren bir organizasyon şirketidir. Üzerinde çalıştığı alanlarda her detayı sofistike bir sadelikle tasarlar. Janti Organizasyon’un farkı tam da bu alanda devreye girer; çünkü üzerinde çalıştığı projelere, özel tasarımları ve yaratıcı ekibiyle hazırlanır. Tüm isteklerinizi doğru şekilde değerlendirip en özel gününüzü tam olarak istediğiniz gibi yaşamanızı sağlar.</p>
                    </section>
                    <section id="section3">
                        <h2>Nasıl Çalışıyoruz</h2>
                        <p>Zarif, Güçlü, Yaratıcı, Yenilikçi. Sürekli genişleyen tedarik zinciriyle, lojistik ve ulaşım alanındaki düzenlemeleriyle, genç, yaratıcı, yenilikçi ve güvenliğe önem veren günden güne büyüyen  ekibiyle, size son derece güçlü ve düzenli bir yapı sunuyor. Tüm bunların yanı sıra, canlı çiçek, tasarım ve danışmanlık hizmetleri ile birlikte özel günlerinizin tadını çıkarmanız için size zaman yaratıyor. Siz de almak istediğiniz hizmetlere Janti Organizasyon aracılığıyla ulaşabilirsiniz.</p>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default About;
