import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discover And Share
            <br className="max-md:hidden"/>
            <span className="orange_gradient text-center">AI-Powered Prompts</span>
        </h1>
        <p className="desc text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas eum quasi est totam error doloribus. Magni reiciendis maiores aspernatur enim?
        </p>
        <Feed/>
    </section>
  )
}

export default Home