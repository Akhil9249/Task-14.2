import React from 'react'
import callLogo from '../../../public/call-communication-device-svgrepo-com.svg'
import notificationLogo from '../../../public/notification-svgrepo-com.svg'
import chatLogo from '../../../public/chat-chatting-communication-svgrepo-com.svg'

const MainContainer = () => {
  return (
    <div className="LandPage-right-top-main">
                    <div className="LandPage-right-top-sub-left">
                        <div className="LandPage-right-top-input">
                            <input type="text" placeholder="Search Product" className="Search-input" />
                        </div>
                    </div>
                    <div className="LandPage-right-top-sub-right">
                        <div className="LandPage-right-top-sub-right-first-sub">
                            <img src={callLogo} alt="" />
                        </div>
                        <div className="LandPage-right-top-sub-right-first-sub">
                            <img src={chatLogo} alt="" />
                        </div>
                        <div className="LandPage-right-top-sub-right-first-sub">
                            <img src={notificationLogo} alt="" />
                        </div>
                        <div className="LandPage-right-top-sub-right-second-sub">
                            <h3>welcome</h3>
                        </div>
                    </div>
                </div>
  )
}

export default MainContainer
