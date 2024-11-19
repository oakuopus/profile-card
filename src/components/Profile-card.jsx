import {useState} from "react"
import "../../public/css/style.css"
const profileCard = (fname, lname, img, mail, socials) => {
    fname = "Oliver"
    lname = "Kuopus"
    img = "https://freerangestock.com/sample/120140/business-man-profile-vector.jpg"
    mail = "okuopu637@west-mec.org"
    socials = {
        github: "#",
        instagram: "#",
        facebook: "#"
    }
    return(
        <main>
            <img src={img} alt={fname} />
            <h2>{fname} {lname}</h2>
            <p>Email: {mail}</p>
            <ul className="social-media-links">
                {Object.entries(socials).map(([platform, link]) => (
                    <li key={platform}>
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            <img src={`https://img.shields.io/badge/${platform}-000000?style=for-the-badge&logo=${platform}`} alt={platform} />
                        </a>
                    </li>
                ))}
            </ul>
        </main>
    )
}
export default profileCard