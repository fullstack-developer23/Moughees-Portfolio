import  './App.css';
import { IconContext } from "react-icons";
import { IoIosMail } from "react-icons/io";
import { TfiGoogle } from "react-icons/tfi";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import moughees from './moughees.jpeg';

const First = () => {
    return(
        <div>
        <div class="profile-image">
        <img src={moughees} width="300px" height="400px" alt='' />
        </div>

        <div className='name-social'>
        
        <h1>Moughees</h1>
        <div className='social-links'>
        <IconContext.Provider
      value={{ color: 'blue', size: '30px' }}>
      <IoIosMail />
      <TfiGoogle />
      <FaTwitter />
      <FaGithub />
    </IconContext.Provider>
        </div>

        </div>

        <p>
        Looking for (part-time) AI research roles at startups - interested in discovering new knowledge using LLMs, improving core learning algorithms, on-device inference of mid-sized models, and bioML <br/><br/>

        <b>Bio:</b> I am Moughees, born and raised in Pakistan.<br/><br/>
<b>Twitter:</b> I am super super active on X.<br/><br/>
<b>ML Research:</b> I spent two years (before the hype) leading cutting-edge TTS/ASR models for low-resource languages at an NLP lab in Pakistan funded by Facebook. My work was covered by Voice of America (Urdu).
First Startup Experience: Realizing the lack of resources in Pakistan, I convinced a New York startup to sponsor me to Toronto over a cold DM on Twitter. (Sent 300 embarrassing msgs to succeed)
I was engineer #1 at Column and helped build the team; Column went on to join Techstars. For over a year, I did my research job during the day and helped Column at nights whilst still in Pakistan.<br/><br/>
<b>Current Role:</b> After leaving Column, I joined Loop, a leading fintech in Toronto, where I am a senior engineer. Loop has raised <b>5M+</b> and has grown over 400 percent since I joined.
At Loop, I have worked on products that have moved millions of dollars helping small businesses.
I have led many end-to-end projects like 2FA Auth, cross border money movement, Banking as a Service, cross-currency conversions, multi-user support and many more.<br/><br/>
<b>BioML Research:</b> I convinced a post-doc at an infectious disease lab to let me assist on his genomics project remotely. I trained models on read-level DNA to predict presence of specific genes before fully sequencing a gene. We were able to get 90 percent + accuracy. Sadly, we could not publish since a different lab published a similar method in Nature. My interest in bioML has grown immensely since.<br/><br/>
<b>Hackathons:</b> Jealous of SF, I decided to throw my own builders hackathon with sponsorships from Chroma, Replit and Cohere - gave away 5K in cash prizes <br/><br/><hr/>
        </p>

<h1>Previous Experience</h1>
        <div className='worklist'>
        <ol>
            
            <li><p>Sep 2022 - Present</p>
                <h4>Senior Engineer #4 (Raised 5M+), Loop Financial<br/><br/></h4></li>

            <li><p>Jan 2021 - Sep 2022</p>
                <h4>Founding Engineer (Raised 2M), Column<br/><br/></h4></li>

            <li><p>Jun 2020 - Dec 2021</p>
                <h4>Generative AI Research (Speech/Deepfakes), CSALT (NLP Research Lab)<br/><br/></h4></li>

        </ol>
        </div>
        <hr/>
        <h1>Occasional Writings</h1>
        <div className='worklist'>
        <ul>
            
            <li><p>Canada needs to be more competent </p><br/></li>

            <li><p>Generative Audio Using GANs (Publ 2020)</p></li>

        </ul>
        </div>
        

        </div>
    )
}

export default First;