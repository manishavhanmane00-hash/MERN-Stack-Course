import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button } from 'bootstrap';

function App() {

  return (
    <>
      <div className='gmail-container'>
        {/* header */}
        <header className='gmail-header border-bottom'>
          <div className='d-flex'>
            <button className="btn">
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path
                  fill="#5f6368"
                  d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
                />
              </svg>
            </button>

            <img
              src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png"
              alt="gmail-img"
            />
          </div>
          <InputGroup className="header-search mx-auto">
            <InputGroup.Text id="basic-addon1" className='bg-transparent border-0'>
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path
                  fill="#5f6368"
                  d="M20.49,19l-5.73-5.73C15.53,12.2,16,10.91,16,9.5C16,5.91,13.09,3,9.5,3S3,5.91,3,9.5C3,13.09,5.91,16,9.5,16c1.41,0,2.7-0.47,3.77-1.24L19,20.49L20.49,19z M5,9.5C5,7.01,7.01,5,9.5,5S14,7.01,14,9.5S11.99,14,9.5,14S5,11.99,5,9.5z"
                />
              </svg>
            </InputGroup.Text>
            <Form.Control
              className='bg-transparent border-0'
            />

            <InputGroup.Text id="basic-addon1" className='bg-transparent border-0'>
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path
                  fill="#5f6368"
                  d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"
                />
              </svg>
            </InputGroup.Text>
          </InputGroup>




          <div className='d-flex align-items-center'>
            <button className='btn'>
              <svg viewBox="0 0 24 24" width="30" height="25">
                <path
                  fill="#5f6368"
                  d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"
                />
              </svg>
            </button>

            <button className='btn'>
              <svg viewBox="0 0 24 24" width="30" height="25">
                <path
                  fill="#5f6368"
                  d="M13.85 22.25h-3.7c-.74 0-1.36-.54-1.45-1.27l-.27-1.89c-.27-.14-.53-.29-.79-.46l-1.8.72c-.7.26-1.47-.03-1.81-.65L2.2 15.53c-.35-.66-.2-1.44.36-1.88l1.53-1.19c-.01-.15-.02-.3-.02-.46 0-.15.01-.31.02-.46l-1.52-1.19c-.59-.45-.74-1.26-.37-1.88l1.85-3.19c.34-.62 1.11-.9 1.79-.63l1.81.73c.26-.17.52-.32.78-.46l.27-1.91c.09-.7.71-1.25 1.44-1.25h3.7c.74 0 1.36.54 1.45 1.27l.27 1.89c.27.14.53.29.79.46l1.8-.72c.71-.26 1.48.03 1.82.65l1.84 3.18c.36.66.2 1.44-.36 1.88l-1.52 1.19c.01.15.02.3.02.46s-.01.31-.02.46l1.52 1.19c.56.45.72 1.23.37 1.86l-1.86 3.22c-.34.62-1.11.9-1.8.63l-1.8-.72c-.26.17-.52.32-.78.46l-.27 1.91c-.1.68-.72 1.22-1.46 1.22zm-3.23-2h2.76l.37-2.55.53-.22c.44-.18.88-.44 1.34-.78l.45-.34 2.38.96 1.38-2.4-2.03-1.58.07-.56c.03-.26.06-.51.06-.78s-.03-.53-.06-.78l-.07-.56 2.03-1.58-1.39-2.4-2.39.96-.45-.35c-.42-.32-.87-.58-1.33-.77l-.52-.22-.37-2.55h-2.76l-.37 2.55-.53.21c-.44.19-.88.44-1.34.79l-.45.33-2.38-.95-1.39 2.39 2.03 1.58-.07.56a7 7 0 0 0-.06.79c0 .26.02.53.06.78l.07.56-2.03 1.58 1.38 2.4 2.39-.96.45.35c.43.33.86.58 1.33.77l.53.22.38 2.55z"
                />
                <circle fill="#5f6368" cx="12" cy="12" r="3.5" />
              </svg>
            </button>

            <button className='btn'>
              <svg viewBox="0 0 24 24" width="30" height="25">
                <path
                  fill="#5f6368"
                  d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                />
              </svg>
            </button>

            <div className='profile-icon rounded-circle bg-danger text-white d-flex align-items-center justify-content-center'
              style={{
                width: '32px',
                height: '32px',
                fontSize: '14px',
                fontWeight: '500',
              }}
            >
              M
            </div>

          </div>


        </header>

        <div className='container-fluid'>
          <div className='row h-100'>

            {/* side bar */}
            <div className='col-md-2 sidebar'>

              <button className="btn compose-btn d-flex gap-3 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="black"
                  className="bi bi-pencil"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                </svg>
                Compose
              </button>



              <ul className='flex-column sidebar-nav'>
                <li className='nav-item'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-inbox-fill" viewBox="0 0 16 16">
                    <path d="M4.98 4a.5.5 0 0 0-.39.188L1.54 8H6a.5.5 0 0 1 .5.5 1.5 1.5 0 1 0 3 0A.5.5 0 0 1 10 8h4.46l-3.05-3.812A.5.5 0 0 0 11.02 4zm-1.17-.437A1.5 1.5 0 0 1 4.98 3h6.04a1.5 1.5 0 0 1 1.17.563l3.7 4.625a.5.5 0 0 1 .106.374l-.39 3.124A1.5 1.5 0 0 1 14.117 13H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .106-.374z" />
                  </svg>
                  Inbox</li>
                <li className='nav-item'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                  </svg>
                  Starred</li>
                <li className='nav-item'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                  </svg>
                  Snoozed</li>
                <li className='nav-item'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                    <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
                  </svg>
                  Sent</li>
                <li className='nav-item'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-file-earmark" viewBox="0 0 16 16">
                    <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z" />
                  </svg>
                  Drafts</li>
                <li className='nav-item'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                  </svg>
                  Purchases</li>
                <li className='nav-item'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z" />
                  </svg>
                  Less</li>
                <li className='nav-item'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-inbox" viewBox="0 0 16 16">
                    <path d="M4.98 4a.5.5 0 0 0-.39.188L1.54 8H6a.5.5 0 0 1 .5.5 1.5 1.5 0 1 0 3 0A.5.5 0 0 1 10 8h4.46l-3.05-3.812A.5.5 0 0 0 11.02 4zm9.954 5H10.45a2.5 2.5 0 0 1-4.9 0H1.066l.32 2.562a.5.5 0 0 0 .497.438h12.234a.5.5 0 0 0 .496-.438zM3.809 3.563A1.5 1.5 0 0 1 4.981 3h6.038a1.5 1.5 0 0 1 1.172.563l3.7 4.625a.5.5 0 0 1 .105.374l-.39 3.124A1.5 1.5 0 0 1 14.117 13H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .106-.374z" />
                  </svg>
                  Important</li>
                <li className='nav-item'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-send-check" viewBox="0 0 16 16">
                    <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855a.75.75 0 0 0-.124 1.329l4.995 3.178 1.531 2.406a.5.5 0 0 0 .844-.536L6.637 10.07l7.494-7.494-1.895 4.738a.5.5 0 1 0 .928.372zm-2.54 1.183L5.93 9.363 1.591 6.602z" />
                    <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686" />
                  </svg>
                  Schedule</li>
                <li className='nav-item'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-envelope-plus" viewBox="0 0 16 16">
                    <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z" />
                    <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 0 0-.5-.5" />
                  </svg>
                  All Mail</li>
                <li className='nav-item'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-octagon" viewBox="0 0 16 16">
                    <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1z" />
                    <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
                  </svg>
                  Spam</li>
                <li className='nav-item'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                  </svg>
                  Trash</li>
                <li className='nav-item'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-inbox" viewBox="0 0 16 16">
                    <path d="M4.98 4a.5.5 0 0 0-.39.188L1.54 8H6a.5.5 0 0 1 .5.5 1.5 1.5 0 1 0 3 0A.5.5 0 0 1 10 8h4.46l-3.05-3.812A.5.5 0 0 0 11.02 4zm9.954 5H10.45a2.5 2.5 0 0 1-4.9 0H1.066l.32 2.562a.5.5 0 0 0 .497.438h12.234a.5.5 0 0 0 .496-.438zM3.809 3.563A1.5 1.5 0 0 1 4.981 3h6.038a1.5 1.5 0 0 1 1.172.563l3.7 4.625a.5.5 0 0 1 .105.374l-.39 3.124A1.5 1.5 0 0 1 14.117 13H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .106-.374z" />
                  </svg>
                  Manage </li>
                <li className='nav-item'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-inbox" viewBox="0 0 16 16">
                    <path d="M4.98 4a.5.5 0 0 0-.39.188L1.54 8H6a.5.5 0 0 1 .5.5 1.5 1.5 0 1 0 3 0A.5.5 0 0 1 10 8h4.46l-3.05-3.812A.5.5 0 0 0 11.02 4zm9.954 5H10.45a2.5 2.5 0 0 1-4.9 0H1.066l.32 2.562a.5.5 0 0 0 .497.438h12.234a.5.5 0 0 0 .496-.438zM3.809 3.563A1.5 1.5 0 0 1 4.981 3h6.038a1.5 1.5 0 0 1 1.172.563l3.7 4.625a.5.5 0 0 1 .105.374l-.39 3.124A1.5 1.5 0 0 1 14.117 13H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .106-.374z" />
                  </svg>
                  Subscriptions</li>
                <li className='nav-item'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-inbox" viewBox="0 0 16 16">
                    <path d="M4.98 4a.5.5 0 0 0-.39.188L1.54 8H6a.5.5 0 0 1 .5.5 1.5 1.5 0 1 0 3 0A.5.5 0 0 1 10 8h4.46l-3.05-3.812A.5.5 0 0 0 11.02 4zm9.954 5H10.45a2.5 2.5 0 0 1-4.9 0H1.066l.32 2.562a.5.5 0 0 0 .497.438h12.234a.5.5 0 0 0 .496-.438zM3.809 3.563A1.5 1.5 0 0 1 4.981 3h6.038a1.5 1.5 0 0 1 1.172.563l3.7 4.625a.5.5 0 0 1 .105.374l-.39 3.124A1.5 1.5 0 0 1 14.117 13H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .106-.374z" />
                  </svg>
                  Manage Lables</li>
                <li className='nav-item'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-inbox" viewBox="0 0 16 16">
                    <path d="M4.98 4a.5.5 0 0 0-.39.188L1.54 8H6a.5.5 0 0 1 .5.5 1.5 1.5 0 1 0 3 0A.5.5 0 0 1 10 8h4.46l-3.05-3.812A.5.5 0 0 0 11.02 4zm9.954 5H10.45a2.5 2.5 0 0 1-4.9 0H1.066l.32 2.562a.5.5 0 0 0 .497.438h12.234a.5.5 0 0 0 .496-.438zM3.809 3.563A1.5 1.5 0 0 1 4.981 3h6.038a1.5 1.5 0 0 1 1.172.563l3.7 4.625a.5.5 0 0 1 .105.374l-.39 3.124A1.5 1.5 0 0 1 14.117 13H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .106-.374z" />
                  </svg>
                  Create new lable</li>
              </ul>

            </div>

            {/* Main Content */}
            <div className='col-md-10 main-content'>
              <div className='email-list'>
                <div className='email-row d-flex align-items-center border-bottom read'>
                  <Form.Check type='checkbox' className='email-checkbox p-2' />
                  <button varient='link' className='star-btn p-0 btn p-2'>
                    ☆
                  </button>

                  <span className='sender p-2'>Google Security</span>
                  <span className='subject flex-grow-1 p-2'>
                    Security Alert: New sign-in detected{" "}
                    <span className='snippet p-2'>
                      We noticed a new login to your account on Windows.
                    </span>
                  </span>
                  <span className='time p-2'> 9:42 AM</span>
                </div>

                <div className='email-row d-flex align-items-center border-bottom unread'>
                  <Form.Check type='checkbox' className='email-checkbox p-2' />
                  <button varient='link' className='star-btn p-0 btn p-2'>
                    ☆
                  </button>

                  <span className='sender p-2'>Google Security</span>
                  <span className='subject flex-grow-1 p-2'>
                    Security Alert: New sign-in detected{" "}
                    <span className='snippet p-2'>
                      We noticed a new login to your account on Windows.
                    </span>
                  </span>
                  <span className='time p-2'> 9:42 AM</span>
                </div>

                <div className='email-row d-flex align-items-center border-bottom unread'>
                  <Form.Check type='checkbox' className='email-checkbox p-2' />
                  <button varient='link' className='star-btn p-0 btn p-2'>
                    ☆
                  </button>

                  <span className='sender p-2'>Google Security</span>
                  <span className='subject flex-grow-1 p-2'>
                    Security Alert: New sign-in detected{" "}
                    <span className='snippet p-2'>
                      We noticed a new login to your account on Windows.
                    </span>
                  </span>
                  <span className='time p-2'> 9:42 AM</span>
                </div>

                <div className='email-row d-flex align-items-center border-bottom read'>
                  <Form.Check type='checkbox' className='email-checkbox p-2' />
                  <button varient='link' className='star-btn p-0 btn p-2'>
                    ☆
                  </button>

                  <span className='sender p-2'>Google Security</span>
                  <span className='subject flex-grow-1 p-2'>
                    Security Alert: New sign-in detected{" "}
                    <span className='snippet p-2'>
                      We noticed a new login to your account on Windows.
                    </span>
                  </span>
                  <span className='time p-2'> 9:42 AM</span>
                </div>

                <div className='email-row d-flex align-items-center border-bottom unread'>
                  <Form.Check type='checkbox' className='email-checkbox p-2' />
                  <button varient='link' className='star-btn p-0 btn p-2'>
                    ☆
                  </button>

                  <span className='sender p-2'>Google Security</span>
                  <span className='subject flex-grow-1 p-2'>
                    Security Alert: New sign-in detected{" "}
                    <span className='snippet p-2'>
                      We noticed a new login to your account on Windows.
                    </span>
                  </span>
                  <span className='time p-2'> 9:42 AM</span>
                </div>

                <div className='email-row d-flex align-items-center border-bottom read'>
                  <Form.Check type='checkbox' className='email-checkbox p-2' />
                  <button varient='link' className='star-btn p-0 btn p-2'>
                    ☆
                  </button>

                  <span className='sender p-2'>Google Security</span>
                  <span className='subject flex-grow-1 p-2'>
                    Security Alert: New sign-in detected{" "}
                    <span className='snippet p-2'>
                      We noticed a new login to your account on Windows.
                    </span>
                  </span>
                  <span className='time p-2'> 9:42 AM</span>
                </div>

                <div className='email-row d-flex align-items-center border-bottom unread'>
                  <Form.Check type='checkbox' className='email-checkbox p-2' />
                  <button varient='link' className='star-btn p-0 btn p-2'>
                    ☆
                  </button>

                  <span className='sender p-2'>Google Security</span>
                  <span className='subject flex-grow-1 p-2'>
                    Security Alert: New sign-in detected{" "}
                    <span className='snippet p-2'>
                      We noticed a new login to your account on Windows.
                    </span>
                  </span>
                  <span className='time p-2'> 9:42 AM</span>
                </div>

                <div className='email-row d-flex align-items-center border-bottom read'>
                  <Form.Check type='checkbox' className='email-checkbox p-2' />
                  <button varient='link' className='star-btn p-0 btn p-2'>
                    ☆
                  </button>

                  <span className='sender p-2'>Google Security</span>
                  <span className='subject flex-grow-1 p-2'>
                    Security Alert: New sign-in detected{" "}
                    <span className='snippet p-2'>
                      We noticed a new login to your account on Windows.
                    </span>
                  </span>
                  <span className='time p-2'> 9:42 AM</span>
                </div>

                <div className='email-row d-flex align-items-center border-bottom read'>
                  <Form.Check type='checkbox' className='email-checkbox p-2' />
                  <button varient='link' className='star-btn p-0 btn p-2'>
                    ☆
                  </button>

                  <span className='sender p-2'>Google Security</span>
                  <span className='subject flex-grow-1 p-2'>
                    Security Alert: New sign-in detected{" "}
                    <span className='snippet p-2'>
                      We noticed a new login to your account on Windows.
                    </span>
                  </span>
                  <span className='time p-2'> 9:42 AM</span>
                </div>

                <div className='email-row d-flex align-items-center border-bottom read'>
                  <Form.Check type='checkbox' className='email-checkbox p-2' />
                  <button varient='link' className='star-btn p-0 btn p-2'>
                    ☆
                  </button>

                  <span className='sender p-2'>Google Security</span>
                  <span className='subject flex-grow-1 p-2'>
                    Security Alert: New sign-in detected{" "}
                    <span className='snippet p-2'>
                      We noticed a new login to your account on Windows.
                    </span>
                  </span>
                  <span className='time p-2'> 9:42 AM</span>
                </div>

                <div className='email-row d-flex align-items-center border-bottom unread'>
                  <Form.Check type='checkbox' className='email-checkbox p-2' />
                  <button varient='link' className='star-btn p-0 btn p-2'>
                    ☆
                  </button>

                  <span className='sender p-2'>Google Security</span>
                  <span className='subject flex-grow-1 p-2'>
                    Security Alert: New sign-in detected{" "}
                    <span className='snippet p-2'>
                      We noticed a new login to your account on Windows.
                    </span>
                  </span>
                  <span className='time p-2'> 9:42 AM</span>
                </div>

                <div className='email-row d-flex align-items-center border-bottom read'>
                  <Form.Check type='checkbox' className='email-checkbox p-2' />
                  <button varient='link' className='star-btn p-0 btn p-2'>
                    ☆
                  </button>

                  <span className='sender p-2'>Google Security</span>
                  <span className='subject flex-grow-1 p-2'>
                    Security Alert: New sign-in detected{" "}
                    <span className='snippet p-2'>
                      We noticed a new login to your account on Windows.
                    </span>
                  </span>
                  <span className='time p-2'> 9:42 AM</span>
                </div>

                <div className='email-row d-flex align-items-center border-bottom read'>
                  <Form.Check type='checkbox' className='email-checkbox p-2' />
                  <button varient='link' className='star-btn p-0 btn p-2'>
                    ☆
                  </button>

                  <span className='sender p-2'>Google Security</span>
                  <span className='subject flex-grow-1 p-2'>
                    Security Alert: New sign-in detected{" "}
                    <span className='snippet p-2'>
                      We noticed a new login to your account on Windows.
                    </span>
                  </span>
                  <span className='time p-2'> 9:42 AM</span>
                </div>

                <div className='email-row d-flex align-items-center border-bottom unread'>
                  <Form.Check type='checkbox' className='email-checkbox p-2' />
                  <button varient='link' className='star-btn p-0 btn p-2'>
                    ☆
                  </button>

                  <span className='sender p-2'>Google Security</span>
                  <span className='subject flex-grow-1 p-2'>
                    Security Alert: New sign-in detected{" "}
                    <span className='snippet p-2'>
                      We noticed a new login to your account on Windows.
                    </span>
                  </span>
                  <span className='time p-2'> 9:42 AM</span>
                </div>

                <div className='email-row d-flex align-items-center border-bottom read'>
                  <Form.Check type='checkbox' className='email-checkbox p-2' />
                  <button varient='link' className='star-btn p-0 btn p-2'>
                    ☆
                  </button>

                  <span className='sender p-2'>Google Security</span>
                  <span className='subject flex-grow-1 p-2'>
                    Security Alert: New sign-in detected{" "}
                    <span className='snippet p-2'>
                      We noticed a new login to your account on Windows.
                    </span>
                  </span>
                  <span className='time p-2'> 9:42 AM</span>
                </div>

                <div className='email-row d-flex align-items-center border-bottom read'>
                  <Form.Check type='checkbox' className='email-checkbox p-2' />
                  <button varient='link' className='star-btn p-0 btn p-2'>
                    ☆
                  </button>

                  <span className='sender p-2'>Google Security</span>
                  <span className='subject flex-grow-1 p-2'>
                    Security Alert: New sign-in detected{" "}
                    <span className='snippet p-2'>
                      We noticed a new login to your account on Windows.
                    </span>
                  </span>
                  <span className='time p-2'> 9:42 AM</span>
                </div>

                <div className='email-row d-flex align-items-center border-bottom unread'>
                  <Form.Check type='checkbox' className='email-checkbox p-2' />
                  <button varient='link' className='star-btn p-0 btn p-2'>
                    ☆
                  </button>

                  <span className='sender p-2'>Google Security</span>
                  <span className='subject flex-grow-1 p-2'>
                    Security Alert: New sign-in detected{" "}
                    <span className='snippet p-2'>
                      We noticed a new login to your account on Windows.
                    </span>
                  </span>
                  <span className='time p-2'> 9:42 AM</span>
                </div>

                <div className='email-row d-flex align-items-center border-bottom read'>
                  <Form.Check type='checkbox' className='email-checkbox p-2' />
                  <button varient='link' className='star-btn p-0 btn p-2'>
                    ☆
                  </button>

                  <span className='sender p-2'>Google Security</span>
                  <span className='subject flex-grow-1 p-2'>
                    Security Alert: New sign-in detected{" "}
                    <span className='snippet p-2'>
                      We noticed a new login to your account on Windows.
                    </span>
                  </span>
                  <span className='time p-2'> 9:42 AM</span>
                </div>

                <div className='email-row d-flex align-items-center border-bottom read'>
                  <Form.Check type='checkbox' className='email-checkbox p-2' />
                  <button varient='link' className='star-btn p-0 btn p-2'>
                    ☆
                  </button>

                  <span className='sender p-2'>Google Security</span>
                  <span className='subject flex-grow-1 p-2'>
                    Security Alert: New sign-in detected{" "}
                    <span className='snippet p-2'>
                      We noticed a new login to your account on Windows.
                    </span>
                  </span>
                  <span className='time p-2'> 9:42 AM</span>
                </div>

                <div className='email-row d-flex align-items-center border-bottom unread'>
                  <Form.Check type='checkbox' className='email-checkbox p-2' />
                  <button varient='link' className='star-btn p-0 btn p-2'>
                    ☆
                  </button>

                  <span className='sender p-2'>Google Security</span>
                  <span className='subject flex-grow-1 p-2'>
                    Security Alert: New sign-in detected{" "}
                    <span className='snippet p-2'>
                      We noticed a new login to your account on Windows.
                    </span>
                  </span>
                  <span className='time p-2'> 9:42 AM</span>
                </div>

                <div className='email-row d-flex align-items-center border-bottom unread'>
                  <Form.Check type='checkbox' className='email-checkbox p-2' />
                  <button varient='link' className='star-btn p-0 btn p-2'>
                    ☆
                  </button>

                  <span className='sender p-2'>Google Security</span>
                  <span className='subject flex-grow-1 p-2'>
                    Security Alert: New sign-in detected{" "}
                    <span className='snippet p-2'>
                      We noticed a new login to your account on Windows.
                    </span>
                  </span>
                  <span className='time p-2'> 9:42 AM</span>
                </div>

                <div className='email-row d-flex align-items-center border-bottom read'>
                  <Form.Check type='checkbox' className='email-checkbox p-2' />
                  <button varient='link' className='star-btn p-0 btn p-2'>
                    ☆
                  </button>

                  <span className='sender p-2'>Google Security</span>
                  <span className='subject flex-grow-1 p-2'>
                    Security Alert: New sign-in detected{" "}
                    <span className='snippet p-2'>
                      We noticed a new login to your account on Windows.
                    </span>
                  </span>
                  <span className='time p-2'> 9:42 AM</span>
                </div>

                <div className='email-row d-flex align-items-center border-bottom read'>
                  <Form.Check type='checkbox' className='email-checkbox p-2' />
                  <button varient='link' className='star-btn p-0 btn p-2'>
                    ☆
                  </button>

                  <span className='sender p-2'>Google Security</span>
                  <span className='subject flex-grow-1 p-2'>
                    Security Alert: New sign-in detected{" "}
                    <span className='snippet p-2'>
                      We noticed a new login to your account on Windows.
                    </span>
                  </span>
                  <span className='time p-2'> 9:42 AM</span>
                </div>

                <div className='email-row d-flex align-items-center border-bottom'>
                  <Form.Check type='checkbox' className='email-checkbox p-2' />
                  <button varient='link' className='star-btn p-0 btn p-2'>
                    ☆
                  </button>

                  <span className='sender p-2'>Google Security</span>
                  <span className='subject flex-grow-1 p-2'>
                    Security Alert: New sign-in detected{" "}
                    <span className='snippet p-2'>
                      We noticed a new login to your account on Windows.
                    </span>
                  </span>
                  <span className='time p-2'> 9:42 AM</span>
                </div>

                <div className='email-row d-flex align-items-center border-bottom unread'>
                  <Form.Check type='checkbox' className='email-checkbox p-2' />
                  <button varient='link' className='star-btn p-0 btn p-2'>
                    ☆
                  </button>

                  <span className='sender p-2'>Google Security</span>
                  <span className='subject flex-grow-1 p-2'>
                    Security Alert: New sign-in detected{" "}
                    <span className='snippet p-2'>
                      We noticed a new login to your account on Windows.
                    </span>
                  </span>
                  <span className='time p-2'> 9:42 AM</span>
                </div>

                <div className='email-row d-flex align-items-center border-bottom'>
                  <Form.Check type='checkbox' className='email-checkbox p-2' />
                  <button varient='link' className='star-btn p-0 btn p-2'>
                    ☆
                  </button>

                  <span className='sender p-2'>Google Security</span>
                  <span className='subject flex-grow-1 p-2'>
                    Security Alert: New sign-in detected{" "}
                    <span className='snippet p-2'>
                      We noticed a new login to your account on Windows.
                    </span>
                  </span>
                  <span className='time p-2'> 9:42 AM</span>
                </div>

                <div className='email-row d-flex align-items-center border-bottom unread'>
                  <Form.Check type='checkbox' className='email-checkbox p-2' />
                  <button varient='link' className='star-btn p-0 btn p-2'>
                    ☆
                  </button>

                  <span className='sender p-2'>Google Security</span>
                  <span className='subject flex-grow-1 p-2'>
                    Security Alert: New sign-in detected{" "}
                    <span className='snippet p-2'>
                      We noticed a new login to your account on Windows.
                    </span>
                  </span>
                  <span className='time p-2'> 9:42 AM</span>
                </div>

                <div className='email-row d-flex align-items-center border-bottom read'>
                  <Form.Check type='checkbox' className='email-checkbox p-2' />
                  <button varient='link' className='star-btn p-0 btn p-2'>
                    ☆
                  </button>

                  <span className='sender p-2'>Google Security</span>
                  <span className='subject flex-grow-1 p-2'>
                    Security Alert: New sign-in detected{" "}
                    <span className='snippet p-2'>
                      We noticed a new login to your account on Windows.
                    </span>
                  </span>
                  <span className='time p-2'> 9:42 AM</span>
                </div>

                <div className='email-row d-flex align-items-center border-bottom unread'>
                  <Form.Check type='checkbox' className='email-checkbox p-2' />
                  <button varient='link' className='star-btn p-0 btn p-2'>
                    ☆
                  </button>

                  <span className='sender p-2'>Google Security</span>
                  <span className='subject flex-grow-1 p-2'>
                    Security Alert: New sign-in detected{" "}
                    <span className='snippet p-2'>
                      We noticed a new login to your account on Windows.
                    </span>
                  </span>
                  <span className='time p-2'> 9:42 AM</span>
                </div>
              </div>
            </div>












          </div>
        </div>
      </div>
    </>
  )
}

export default App;