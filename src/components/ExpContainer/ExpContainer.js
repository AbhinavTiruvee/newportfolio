import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ExpContainer.css'

const ExpContainer = ({ exp }) => (
  <div className='exp'>
    <h3>{exp.name}</h3>
    <h4>{exp.position}</h4>
    <h6>{exp.dates}</h6>
    <p className='exp__description'>{exp.description}</p>
    {exp.stack && (
      <ul className='exp__stack'>
        {exp.stack.map((item) => (
          <li key={uniqid()} className='exp__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {exp.sourceCode && (
      <a
        href={exp.sourceCode}
        aria-label='source code'
        className='link link--icon'
      >
        <GitHubIcon />
      </a>
    )}

    {exp.livePreview && (
      <a
        href={exp.livePreview}
        aria-label='live preview'
        className='link link--icon'
      >
        <LaunchIcon />
      </a>
    )}
  </div>
)

export default ExpContainer
