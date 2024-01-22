import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import { TypeAnimation } from 'react-type-animation';
import AI from './img/AI.png'
import Brain from './img/brain.png'
import math from './img/math.png'

export default function Home() {
  return (
    <div className='bg'>
        <Container>
            <div className='row mt-5 align-center'>
                <div className="col-md-8 col-12">
                    <TypeAnimation
                        sequence={[
                            'Artificial Intelligence for Parkinson\'s Detection',
                            2000,
                            'A hybrid approach',
                            1000, 
                        ]}
                        className='heading'
                        wrapper="span"
                        speed={70}
                        style={{ fontSize: '2em', display: 'inline-block' }}
                        repeat={Infinity}
                    />
                    <p>
                        Parkinson's disease is a neurodegenerative disorder that affects movement. It is caused by the loss of dopamine-producing brain cells. Symptoms include tremors, stiffness, and difficulty with balance and coordination. Parkinson's disease is typically diagnosed based on a patient's symptoms and medical history, as well as a physical examination.
                    </p>
                    <br></br>
                    <Container>
                    <div className="row">
                        <div className="col-md-5 col-12 small-container">
                            <h4>Current Diagnosis Methods</h4><hr />
                            <p>Diagnosing Parkinson's disease can be challenging, as there is no definitive test. Doctors typically rely on a patient's symptoms and medical history, as well as a physical examination. Imaging tests such as MRI and CT scans may also be used to rule out other conditions.</p>
                        </div>
                        <div className="col-md-1 col-0"></div>
                        <div className="col-md-5 col-12 small-container">
                            <h4>The Role of AI in Parkinson's Diagnosis</h4><hr />
                            <p>Artificial intelligence has the potential to improve the accuracy and speed of Parkinson's disease diagnosis. AI algorithms can analyze large amounts of data, such as medical records and imaging scans, to identify patterns and make predictions. This can help doctors make more informed diagnoses and develop personalized treatment plans.</p>
                        </div>
                    </div>
                    </Container>
                </div>
                <div className="col-md-4 col-12"><img src={AI} className='img' alt='AI image'/></div>
            </div>
            <br />
            <hr></hr>
            <div>
                <TypeAnimation
                    sequence={[
                        'The Role of AI in Parkinson\'s Diagnosis',
                        2000,
                    ]}
                    className='heading'
                    wrapper="span"
                    speed={70}
                    style={{ fontSize: '2em', display: 'inline-block' }}
                    repeat={Infinity}
                />
                <Container>
                <div className="row">
                    <div className="col-md-4 col-12 small-container align-justify">
                        <img src={Brain} className='img-math' alt='AI image'/><br />
                        <br />
                        <h4>Current Diagnosis Methods</h4>
                        <p>Parkinson's disease is currently diagnosed through a combination of physical examinations and neurological tests. These methods can be subjective and may not always lead to an accurate diagnosis. Additionally, there is currently no single test that can definitively diagnose Parkinson's disease.</p>
                    </div>
                    <div className="col-md-1 col-0"></div>
                    <div className="col-md-6 col-12 small-container align-justify">
                    <img src={math} className='img-math' alt='AI image'/><br /><br />
                    <div className="row">
                        <div className="col-6">
                            <h4>AI Models for Parkinson's Prediction</h4>
                            <p>There are several types of AI models used for Parkinson's prediction, including deep learning neural networks, decision trees, and support vector machines. These models can analyze data from various sources and provide a probability of Parkinson's disease diagnosis. However, it is important to note that these models are not perfect and may have limitations in their accuracy and specificity.</p>
                        </div>
                        <div className="col-6">
                            <h4>Data Collection and Analysis</h4>
                            <p>To train AI models for Parkinson's diagnosis, large amounts of data are needed. This includes medical imaging data, genetic information, and patient records. The data must be carefully curated and processed to ensure accuracy and consistency. Advanced algorithms and machine learning techniques are used to analyze the data and identify patterns and biomarkers associated with Parkinson's disease.</p>
                        </div>
                    </div>
                    </div>
                </div>
                </Container>
            </div>
            <hr />
            <div className="heading">Future of Parkinson's Diagnosis with AI</div>
            <div className="row">
                <div className="col-md-3 col-6"><b>Personalized Medicine :</b> AI can help in developing personalized treatment plans for Parkinson's patients based on their unique symptoms and medical history.</div>
                <div className="col-md-3 col-6"><b>Remote Monitoring :</b> AI can enable remote monitoring of Parkinson's patients, allowing doctors to track their symptoms and adjust treatment plans accordingly.</div>
                <div className="col-md-3 col-6"><b>Early Detection :</b> AI can help in the early detection of Parkinson's disease, allowing for earlier intervention and potentially better outcomes for patients.</div>
                <div className="col-md-3 col-6"><b>Improved Accuracy :</b> As AI models continue to improve, they have the potential to provide more accurate and reliable diagnosis of Parkinson's disease.</div>
            </div>
        </Container>
        <div className="align-center">
        <TypeAnimation
            sequence={[
                'Predict...',
                1000,
                'Process...',
                1000,
                'Prevail...',
                1000,
            ]}
            className='heading align-center'
            wrapper="span"
            speed={80}
            style={{ fontSize: '2em', textAlign: 'center', padding: '20px',  display: 'inline-block' }}
            repeat={Infinity}
        />
        </div>
    </div>
  )
}
