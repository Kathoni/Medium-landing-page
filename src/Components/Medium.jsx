import React from 'react'

function Medium() {
    return (
        <div>
            <ul>
            <h1>Medium</h1>
            <ul>
                <li>Our Story</li>
                <li>Membership</li>
                <li>Write</li>
                <li> Signin</li>
                <li>
                    <button>Get Started</button>
                </li>
            </ul>
            </ul>
            <div style={{
                backgroundColor: "#f7e33a",
                textAlign: "center",
                justifyContent: "center",
            }}>
                <hr />
                <b>Be part of a better.</b><u>Get 20% off membership for a limited time</u>
                <hr />
            </div>
            <h4 style={{
                fontSize: "80px",
                fontWeight: "bold",
                padding: "10",
            }}>Human <br />stories & idea</h4>
            <h3>
                <p>A place to read ,write, and deepen your understanding</p>
            </h3>
            <button style={{
                backgroundColor: "black",
                color: "white",
                border: "none",
                borderRadius: "15px",
                padding: "10px",
                cursor: "pointer"
            }}>start Reading</button>
            <br />
            <hr />
            <div>
                <ul>
                    <li>Help</li>
                    <li>Status</li>
                    <li>About</li>
                    <li>Careers</li>
                    <li>Press</li>
                    <li>Blog</li>
                    <li>Privacy</li>
                    <li>Terms</li>
                    <li>Text to speech</li>
                    <li>Teams</li>
                </ul>
            </div>
        </div>
    )
}

export default Medium