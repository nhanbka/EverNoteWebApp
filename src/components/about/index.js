import React from 'react'

const About = () => {
    return (
        <div className="row container" style={{marginTop: "30px"}}>
            <div className="col-xl-5 col-lg-5 col-md-5 co-sm-l2">
                <br/>
                <div className="about_box">
                    <h2><strong className="black">Nhan Le Trong</strong></h2>
                    <br/>
                    <p style={{marginTop: "30px"}}>I am currently student in Hanoi University of Science and Technology (HUST) – 
                        ranked 4th in South East Asia. My GPA is 3.7/4.0. 
                        I also have TOEIC certificate with score of 860. 
                        I will graduate this June and work as a Software Engineer.</p>
                    <a href="https://github.com/nhanbka" target="blank">Know More</a>
                </div>
            </div>
            <div className="col-xl-7 col-lg-7 col-md-7 co-sm-l2">
                <div className="about_img">
                    <figure><img src="avatar.png" alt="avatar" style={{width: '250px', height: '320px'}} /></figure>
                </div>
            </div>
        </div>
    )
}

export default About
