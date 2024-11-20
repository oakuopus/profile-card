import react from 'react';
import ProfileCard from "./components/Profile-card.jsx"

const socials = {
    github: "https://github.com/oakuopus",
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/"
}

function Profile(){
    return(
        <div>
            <ProfileCard
                fname = "John"
                lname = "Doe"
                img = "https://freerangestock.com/sample/120140/business-man-profile-vector.jpg"
                mail = "JohnDoe@gmail.com"
                socials = {socials}
            />
        </div>
    )
}
export default Profile