import {useState} from "react"
import "../css/profile.css"

const profileCard = ({fname, lname, img, mail, socials}) => {
    return(
        <main>
            <img src={img} alt={fname} />
            <h2>{fname} {lname}</h2>
            <p><a href="mailto:okuopu637@west-mec.org">{mail}</a></p>
            <p>
                <a target="_blank" href={socials.github}><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-download.com%2Fwp-content%2Fuploads%2F2016%2F09%2FGitHub_logo.png&f=1&nofb=1&ipt=4a1b81f3cc2483728c2e4f3a143e611773d2d73f06c207fcbcc9628055815409&ipo=images" alt="github" /></a>
                <a target="_blank" href={socials.instagram}><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pinclipart.com%2Fpicdir%2Fmiddle%2F1-13590_instagram-logo-insta-logo-png-transparent-background-clipart.png&f=1&nofb=1&ipt=ddc51b77fa0331493afb7633b1e57475fec07153a25f2106dc6deb1b9d60a35f&ipo=images" alt="Insta" /></a>
                <a target="_blank" href={socials.facebook}><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.clipartmax.com%2Fpng%2Fmiddle%2F185-1854464_facebook-logo-png-transparent-background.png&f=1&nofb=1&ipt=f63101e86255e88cfaff9ecfdbc60bbd9677680211923b01b17ca3e590f47c6c&ipo=images" alt="Facebook" /></a>
            </p>
        </main>
    )
}
export default profileCard