function Button({type, children}) {

  const styles = {
    primary: {
        color: "white",
        background: "black",
        borderRadius: "40px",
        border: "solid black 3px",
        padding: "9px"
    },
    secondary: {
        //! A finir demain
    }
  }

  const buttonStyle = styles[type]

  return (
    <button style={buttonStyle}>{children}</button>
  )
}

export default Button