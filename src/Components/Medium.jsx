import React from 'react'
import Myimage from '../assets/dark academia.jpeg'

function Medium() {
    return (
        <div>
            <ul>
            <ul style={{
                listStyle:"none",
                padding:"0.5px",
                marginBlockEnd: "10",
                display: "flex",
                justifyContent: "space-between",
                cursor: "pointer",

            }}>
                <li style={{float:" right"}}>Our Story</li>
                <li style={{float:" right"}}>Membership</li>
                <li style={{float:" right"}}>Write</li>
                <li style={{float:" right"}}> Signin</li>
                <li>
                    <button
                    style={{
                        backgroundColor: "black",
                        color: "white",
                        border: "none",
                        borderRadius: "15px",
                        padding: "10px",
                        cursor: "pointer"}}>
                            Get Started</button>
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
            <section>
            <img src={Myimage} alt="" style={{
                width: "30%",
                height:"30vh"
            }}/>
            </section>
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
                <ul
               style={{
                    listStyle:"none",
                    padding:"0.5px",
                    marginBlockEnd: "10",
                    display: "flex",
                    justifyContent: "space-between",
                    cursor: "pointer",}}>
                    <li>Help</li>
                    <li>Status</li>
                    <li>About</li>
                    <li>Careers</li>
                    <li>Press</li>
                    <li>Blog</li>
                </ul>
            </div>
        </div>
    )
}

export default Medium