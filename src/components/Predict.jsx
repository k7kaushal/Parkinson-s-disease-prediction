import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './css/main.css';    
import loadText from './js/javascript.js';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

export default function Predict() {
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
      } = useSpeechRecognition();
    
      if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }
  return (
    <Container className='align-center'>
        <div className="row mt-5">
            <div className="col-md-3 col-12 bg-image">
                <h3 className='heading'>Use vocal frequency for prediction</h3>
                <p>Microphone: {listening ? 'on' : 'off'}</p>
            </div>
            <div className="col-md-1 col-0"></div>
            <div className="col-md-8 col-12">
            <FloatingLabel controlId="floatingTextarea" label="Read the paragraph below, refresh to generate text">
            <Form.Control
            id='textgenerate'
            as="textarea"
            style={{ height: '170px' }}
            ></Form.Control>
            </FloatingLabel>
            <Row className='align-center'>
                <Button className='button btn-success col-12 col-md-4' onClick={SpeechRecognition.startListening}>Start recording</Button>
                <Button className='button btn-danger col-12 col-md-4' onClick={SpeechRecognition.stopListening}>Stop recording</Button>
                <Button className='button btn col-12 col-md-4' onClick={() => loadText()}>Refresh</Button>
                <Button className='button btn col-12 col-md-4' onClick={SpeechRecognition.resetTranscript}>Reset transcript</Button>
            </Row>
            <br></br>
            <br></br>
            </div>
        </div>
        <p><i>Transcript: {transcript}</i></p>
    </Container>
  )
}
