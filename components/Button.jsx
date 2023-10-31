import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

function Button({type, children, urlPath}) {

  const router = useRouter()

  const styles = {
    primary: {
        color: "white",
        background: "#3273a8",
        borderRadius: "40px",
        border: "solid black 3px",
        padding: "9px",
        border: "none",
        boxShadow: "inset -1px 3px 8px 5px #1F87FF, 2px 5px 16px 0px #0B325E, 5px 5px 15px 5px rgba(0,0,0,0)"
    },
    secondary: {
        color: "white",
        background: "black",
        borderRadius: "40px",
        border: "solid black 3px",
        padding: "9px",
        border: "none"
    }
  }

  const buttonStyle = styles[type]

  return (
    <motion.button style={buttonStyle} onClick={() => router.push(urlPath)} whileHover={{scale: 1.1}}>{children}</motion.button>
  )
}

export default Button