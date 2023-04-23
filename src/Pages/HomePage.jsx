import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Counter from "../Components/Counter";

export default function Home() {
    const name = "Dhyan Shah"
    const age = 18
    const adress ="165,Aiya Nagar"
  console.log(name)
    return (
        <div>
            <Navbar />

            <h1> My name is {name}</h1>
            <h1> My age is {age} </h1>
            <h1> I live at {adress}.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut maxime illo unde alias harum quis assumenda, dolore sed, culpa odio officia aliquam nobis voluptatum repudiandae itaque accusamus magni doloribus pariatur saepe quaerat perspiciatis libero repellendus? Cum culpa aspernatur sit obcaecati repellat harum cupiditate, reprehenderit maiores assumenda dolorum dolor, architecto sunt?</p>
            <Footer />
            <Counter />
        </div>
    )
}