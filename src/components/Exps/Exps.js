import uniqid from 'uniqid'
import { exps }  from '../../portfolio'
import ExpContainer from '../ExpContainer/ExpContainer'
import './Exps.css'

const Exps = () => {
  if (!exps.length) return null

  return (
    <section id='exps' className='section exps'>
      <h2 className='section__title'>Experience</h2>

      <div className='exps__grid'>
        {exps.map((exp) => (
          <ExpContainer key={uniqid()} exp={exp} />
        ))}
      </div>
    </section>
  )
}

export default Exps
