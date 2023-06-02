import Question from "./Question"

const Questions = ({data, getId, questionSelected}) => {
  
    return (
    <section className="container">
      <h1>Questions</h1>
        {data.map(e=>{
          return  <Question {...e} key={e.id} getId={getId} questionSelected={questionSelected}/>
        })}
    </section>
  )
}
export default Questions