(function(){

  // App
  function App() {
    const [size, setSize] = React.useState(9)
    const [sizes, setSizes] = React.useState(window.data.allSize)
    const [color, setColor] = React.useState("green")
    const [colors, setColors] = React.useState(window.data.allColor)

    function hSizeChange(selectSize){
      const ableColors = window.data.bySize[selectSize]
      setColors(ableColors)
      setSize(selectSize)
    }
  
    function hColorChange(selectColor){
      const ableSizes = window.data.byColor[selectColor]
      setSizes(ableSizes)
      setColor(selectColor)
    }

    return (
      <div className="custom">
        <div className="pic">
          <ProImg color={color}/>
        </div>
        <div className="selector">
          <ProSize size={size} sizes={sizes} hSizeChange={hSizeChange}/>
          <ProColor color={color} colors={colors} hColorChange={hColorChange}/>
        </div>
      </div>
    )
  }

  // ProSize
  function ProSize(props) {
    function optionSize() {
      return props.sizes.map((item, index)=>{return (<option key={index} value={item}>{item}</option>)})
    }
    function onSizeChange(e) {
      props.hSizeChange(e.target.value)
    }

    return (
      <p className="field">
        <label htmlFor="size">size:</label>
        <select id="size" defaultValue={props.size} onChange={onSizeChange}>
          {optionSize()}
        </select>
      </p>
    )
  }
  
  // ProColor
  function ProColor(props) {
    function optionColor() {
      return props.colors.map((item, index) => {return <option key={index} value={item}>{item}</option>})
    }
    function onColorChange(e) {
      props.hColorChange(e.target.value)
    }

    return (
      <p className="field">
        <label htmlFor="color">color:</label>
        <select id="color" defaultValue={props.color} onChange={onColorChange}>
          {optionColor()}
        </select>
      </p>
    )
  }

  // ProImg
  function ProImg(props) {
    return(      
      <img src={`../images/${props.color}.jpg`} alt="상세이미지" />
    )
  }

  // export
  const root = document.querySelector('#root')
  ReactDOM.render(
    <App/>, root
  )
})()

