import avatarImage from "../assets/image.png";

export default function Info() {
    return (
        <header>
            <img
                className="avatar"
                src={avatarImage}
                alt="My avatar"
            />
            <h1>Paweł Gierlotka</h1>
            <p id="position">Frontend Developer</p>
            <p id="portfolio">
                <a href="https://www.github.com/gieWONt15" target="_blank">
                    github.com/gieWONt15
                </a>
            </p>
            <div id="button-container">
                <button id="email-btn">
                    <i class="fa-solid fa-envelope"></i>
                    <span>
                        <a href="mailto:pawdyslaw@gmail.com">Email</a>
                    </span>
                </button>
                <button id="linkedin-btn">
                    <i class="fa-brands fa-linkedin"></i>
                    <span>
                        <a href="https://www.linkedin.com/in/gierlotka-pawel/">
                            LinkedIn
                        </a>
                    </span>
                </button>
            </div>
        </header>
    );
}
