import React from 'react'

const Footer = () => {
  return (
    <React.Fragment>
      <nav
        className="navbar navbar-expand-sm bg-light mb-0 footer"
        style={{ height: '7vh' }}
      >
        <div className="text-center text-light w-100">
          <p className="mb-0">
            Designed Inspired from
            <a
              href="https://dribbble.com/shots/11893332-Dark-Theme-Chat-App"
              className="px-2"
              target={'_blank'}
              rel="noopener noreferrer"
            >
              Muhammad Hunain
            </a>
            Find code in
            <a
              href="https://github.com/nam-nguyen17/realtime-chat-app"
              className="px-2"
              target={'_blank'}
              rel="noopener noreferrer"
            >
              Github
            </a>
            Developed By
            <a
              href="https://github.com/nam-nguyen17"
              className="px-2"
              target={'_blank'}
              rel="noopener noreferrer"
            >
              NamNguyen and Tuyt.
            </a>
          </p>
        </div>
      </nav>
    </React.Fragment>
  )
}

export default Footer
