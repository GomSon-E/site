(function() {
  function App() {
    return (
      <div classname="custom">
        <div classname="pic">
          <img src="../images/blue.jpg" alt="상세이미지" />
        </div>
        <div classname="selector">
          <p classname="field">
            <label>size:</label>
            <select>
              {ProSize()}
            </select>
          </p>
          <p classname="field">
            <label>color:</label>
            <select>
              {ProColor()}
            </select>
          </p>
        </div>
      </div>
    )
  }

  function ProSize() {
    let sizes = []
    for (let i = 7; i <= 13; i++) {
      sizes.push(i)
    }
    return sizes.map((item, index)=>{return (<option key={index} value={item}>{item}</option>)})
  }
  
  function ProColor() {
    const allColor = ['red','blue','green','purple','brown']
    return allColor.map((item, index) => {return <option key={index} value={item}>{item}</option>})
  }
  

  // export
  const root = document.querySelector('#root')
  ReactDOM.render(
    <App/>, root
  )
})()

