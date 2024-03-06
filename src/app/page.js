import Image from "next/image";

const Home = () => {
  return (
    <div className="w-full justify-between h-full flex items-center pt-20">
      <div className="w-1/2">
        <h1>Creative Thoughts Agency.</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          blanditiis adipisci minima reiciendis a autem assumenda dolore.
        </p>
        <div>
          <button>Learn More</button>
          <button>Contact</button>
        </div>
      </div>
      <div className="w-1/2">
        <Image src="/hero.gif" alt="" width={500} height={500} />
      </div>
    </div>
  );
};

export default Home;
