import './intro.css'

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-left">
        <div className='intro-left-wrapper'>
        <h2 className='i-intro'>Hello, My name is</h2>
          <h1 className='i-name'>Elhadj Soumahoro</h1>
          <div className='i-title'>
          <div className='i-title-wrapper'>
            <div className='i-title-item'>Web Developer</div>
            <div className='i-title-item'>Software Engineer</div>
            <div className='i-title-item'>Front End Engineer</div>
            <div className='i-title-item'>Full Stack Engineer</div>
              <div className='i-title-item'>Content Creator</div>
              </div>
          </div>
          <div className='i-desc'>
          Expertise in programming, testing, and delivering products.  
          </div>
        </div>  
      </div>
      <div className="intro-right">
        <div className='i-bg'></div>
        <img src='https://i.imgur.com/jCKMVs6.png' alt='elhadj soumahoro' className='i-img'/>
      </div>
    </div>
  )
}

export default Intro
