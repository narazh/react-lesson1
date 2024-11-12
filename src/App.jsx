

// JSX elements
// component - App - (css, js, jsx)
function App() {

  const number = 33

const text = <h1>Hello {number}</h1>
return (
    <div style={{
      // background:'green'
    }}>
      {text} world
      <Button text="no" className="green-btn"/>
      <Button text="ok" className="black-btn"/>
      <Button  text="send" className="green-btn"/>
      <Button text="DELETE" className="red-btn"></Button>
      <Button text="DELETE" className="red-btn"></Button>
      <Button text="Dark" className="black-btn"/>
      <Button text="Primary" className="blue-btn"></Button>
      <Button text="secondary" className="gray-btn"></Button>
      <Button text="Danger" className="red-btn"></Button>
      <Button text="Warning" className="yellow-btn"></Button>
      <Button text="Info" className="aqua-btn"></Button>
      <Button text="Light" className="white-btn"></Button>
      <Button text="Link" className="transparent-btn"></Button>

    </div> 
        
  )
}

export default App

// props
// component - Button -
const Button = (props) => {
  return <button className={props.className}>{props.text}</button>
}
