import CoreConcepts from './CoreConcepts';
import componentsImg from '../../assets/components.png'
import stateImg from '../../assets/state-mgmt.png'
import jsxImg from '../../assets/jsx-ui.png'
import propsImg from '../../assets/config.png'
import reactImg from '../../assets/react-core-concepts.png';
import TabButton from './TabButton';
import { EXAMPLES } from './data';
import {useState} from  'react';

const reactDescriptions = ['Fundamentals', 'Crucial', 'Core']

function getRandomWord(){
    return Math.floor(Math.random() * 3);
}

export default function Header(){
  const[info, setInfo] = useState();

  function handleSelect(selector){
   setInfo(selector)
   console.log(info)
  }
   return(
    < div>
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {`${reactDescriptions[getRandomWord()]}`} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      <main>
      <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
            <CoreConcepts 
                title = "Components"
                description ="The core UI building block"
                image= {componentsImg}
            />
            <CoreConcepts 
                title = "JSX"
                description ="The core UI building block"
                image= {jsxImg}
            />
            <CoreConcepts
                title = "State"
                description ="The core UI building block"
                image= {stateImg} 
                />
            <CoreConcepts 
                title = "Props"
                description ="The core UI building block"
                image= {propsImg}
            />
        </ul>
      </section>
      
      <section id="examples">
      <br />
        <h2>Time to get started!</h2>
        <menu>
          <TabButton isSelected={info === 'components'} onSelect={()=>handleSelect('components')}>Component</TabButton>
          <TabButton  isSelected={info === 'jsx'} onSelect={()=>handleSelect('jsx')}>JSX</TabButton>
          <TabButton  isSelected={info === 'props'} onSelect={()=>handleSelect('props')}>Props</TabButton>
          <TabButton  isSelected={info === 'state'} onSelect={()=>handleSelect('state')}>State</TabButton>
        </menu>
        { info == undefined ? <p>Please Select A Topic</p>
        :
        <div id="tab-content">
          <h3>{EXAMPLES[info].title}</h3>
          <p>{EXAMPLES[info].description}</p>
          <pre>
            <code>
            {EXAMPLES[info].code}
            </code>
          </pre>
        </div>
        }
      </section>

      </main>
    </div>);
}