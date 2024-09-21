import Container from "./Container"

const Hero = () => {
  return (
    <Container >
        <div className="absolute w-[30rem] h-[34rem] bg-acc/30 rounded-full blur-3xl -top-[20%] -left-[7%]"></div>
        <div className="absolute w-[8rem] h-screen bg-acc/20 blur-xl top-0 right-[10%]"></div>
        <div className="absolute w-[4rem] h-screen bg-acc/20 blur-xl top-0 right-[30%]"></div>
        <div className="absolute w-[4rem] h-screen bg-acc/20 blur-xl top-0 right-[40%]"></div>
        {/* <div className="absolute w-[30rem] h-screen bg-acc/30 blur-xl -top-[20%] right-20"></div> */}
        <div>
            hero
        </div>
    </Container>
  )
}

export default Hero