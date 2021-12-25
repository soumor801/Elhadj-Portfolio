import '../../intro/about/About.css'
const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src="https://i.imgur.com/xaIePZh.jpg" alt='img' className='a-img'/>
        </div>
      </div>
      <div className="a-right">
        <h1 className='a-title'>About Me</h1>
        <p className='a-sub'>Proficent Languages: Javascript, React, Node.js, MongoDB, Ruby, Ruby on Rails, HTML, CSS</p>
        <p className='a-desc'>A born and raised New Yorker with passion for problem solving. Finding creative means to solve life’s recurring problems have been a running theme in my life. Teaching me dedication, adaptability and resilience. Taking these 	new values and applying them in my software engineer/developer role is what will make me a stand out from 		other developers.</p>
        <div className="a-award">
          <img src='https://i.imgur.com/yCaNmSA.jpg' className='a-award-img'
          alt='general assembly'
          />
          <div className='a-award-texts'>
            <h4 className='a-award-title'>General Assembly Software Engineer Immersive Graduate - 3 month long intensive training in React, Node.js, MongoDB, Ruby and Ruby on Rails</h4>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default About
