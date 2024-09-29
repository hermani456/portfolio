const Container = ({id, children, className}) => {
  return (
    <div id={id} className={`max-w-screen-2xl px-5 mx-auto ${className}`}>
      {children}
    </div>
  )
}

export default Container
