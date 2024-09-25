const Container = ({id, children}) => {
  return (
    <div id={id} className="max-w-screen-2xl px-5 mx-auto">
      {children}
    </div>
  )
}

export default Container
