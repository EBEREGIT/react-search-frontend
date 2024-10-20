import top100Films from "./assets/data";
import Btn from "./components/btn";
import Heading from "./components/heading";
import Input from "./components/input";
import Result from "./components/result";

function App() {
  return (
    <main>
      <Heading label={"Search Form"} />
      <Input type={"text"} placeholder={"Enter Name"} name={"Name"} />
      <Input type={"number"} placeholder={"Enter Year"} name={"Year"} />

      <br />

      <Btn label={"Search (OR)"} />
      <Btn label={"Search (AND)"} />

      <Heading label={"Search Results"} />

      <section style={{height:400, overflow:"scroll"}}>
        {top100Films.map(({ label, year }) => (
          <Result name={label} year={year} key={label + year} />
        ))}
      </section>
    </main>
  );
}

export default App;
