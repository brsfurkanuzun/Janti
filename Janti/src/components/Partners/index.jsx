import "./style.css";
import Marquee from "react-fast-marquee";
import partners from "../../data/partners"; // ✅ Doğru yolu kontrol et!

function Partners() {
    return (
        <Marquee speed={30} pauseOnHover={true} autoFill={true}>
            {partners.map((partner, index) => (
                <a
                    key={index}
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="partner-container"
                >
                    <img
                        src={partner.src}
                        alt={partner.name}
                        className="partner"
                    />
                </a>
            ))}
        </Marquee>
    );
}

export default Partners;
