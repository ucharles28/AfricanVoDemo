import Menu from './components/navbar'
import Footer from './components/footer'
import Button from 'react-bootstrap/Button'

function Signup () {
    return (
    <div>
        <Menu />
        <div>
            <div className="desktop575447976-desktop575447976">
                <div className="desktop575447976-frame15447977">
                <div className="desktop575447976-frame4465448058">
                    <div className="desktop575447976-frame4475448064">
                    <span className="desktop575447976-text displaylgBold">
                        I want to:
                    </span>
                    <span className="desktop575447976-text1">
                        Select what type of user you want to be on Africanvo
                    </span>
                    </div>
                    <div className="desktop575447976-frame4495448066">
                    <div className="desktop575447976-frame4485448065">
                        <button className="desktop575447976-button5448049">
                        <button className="desktop575447976-frame-buttonbase5448050">
                            <span className="desktop575447976-text2">
                            Hire a voice talent/translator
                            </span>
                        </button>
                        </button>
                        <button className="desktop575447976-button5448052">
                            <button className="desktop575447976-frame-buttonbase5448053">
                                <span className="desktop575447976-text3">
                                    Work as voice talent/translator
                                </span>
                            </button>
                        </button>
                    </div>
                    </div>
                </div>
                <button className="desktop575447976-button5448055">
                    <button className="desktop575447976-frame-buttonbase5448056">
                        <span className="desktop575447976-text4 bodymdSemiBold">
                            Continue
                        </span>
                    </button>
                </button>
                {/* <Button className='w-96 flex text-center text-sm bg-black border-transparent justify-center h-12vh'>Continue</Button>/> */}
                </div>
            </div>
            {/* <div className='signup'>
                <span className='signup-title'>I want to:</span>
            </div> */}
        </div>
        <Footer />
    </div>
    )
}

export default Signup