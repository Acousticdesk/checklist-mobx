// @ts-ignore
const Checklist = ({ checklist }) => (
  <form>
    <p>{checklist.topic}</p>
    <ul>
      {/*@ts-ignore*/}
      {checklist.questionnaire.map(({ question, answers }, index) => (
        <li key={index}>
          <p>{question}</p>
          {/*@ts-ignore*/}
          {answers.map(({ label }) => (
            <label key={label}>
              <input name={question} type="radio" value={label}/>
              {label}
            </label>
          ))}
        </li>
      ))}
    </ul>
  </form>
)

export default Checklist
