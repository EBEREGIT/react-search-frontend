import { useState } from "react";
import top100Films from "./assets/data";
import Btn from "./components/btn";
import Heading from "./components/heading";
import Input from "./components/input";
import Result from "./components/result";

function App() {
  const [label, setLabel] = useState("");
  const [year, setYear] = useState(null);
  const [results, setResults] = useState([]);

  // regular search
  const searchItems = (searchTerm) => {
    const regex = /\s+/g;

    const normalizeTerm = searchTerm.toLowerCase().replace(regex, "");

    const output = top100Films.filter((film) =>
      film.label.toLowerCase().replace(regex, "").includes(normalizeTerm)
    );

    setResults(output);
  };

  // search using OR (||) operator
  const searchItemsOR = (label, year) => {
    const regex = /\s+/g;

    const normalizeTerm = label.toLowerCase().replace(regex, "");

    const output = top100Films.filter(
      (film) =>
        film.label.toLowerCase().replace(regex, "").includes(normalizeTerm) ||
        film.year.toString().includes(year)
    );

    setResults(output);
  };

  // search using AND (&&) operator
  const searchItemsAND = (label, year) => {
    const regex = /\s+/g;

    const normalizeTerm = label.toLowerCase().replace(regex, "");

    const output = top100Films.filter(
      (film) =>
        film.label.toLowerCase().replace(regex, "").includes(normalizeTerm) &&
        film.year.toString().includes(year)
    );

    setResults(output);
  };

  return (
    <main>
      {/* form */}
      <Heading label={"Search Form"} />

      {/* input boxes */}
      <Input
        type={"text"}
        placeholder={"Enter Name"}
        name={"Name"}
        value={label}
        setter={setLabel}
      />
      <Input
        type={"number"}
        placeholder={"Enter Year"}
        name={"Year"}
        value={year}
        setter={setYear}
      />

      <br />

      {/* buttons */}
      <Btn label={"Search"} handleClick={() => searchItems(label)} />
      <Btn
        label={"Search (OR)"}
        handleClick={() => searchItemsOR(label, year)}
      />
      <Btn
        label={"Search (AND)"}
        handleClick={() => searchItemsAND(label, year)}
      />

      {/* results */}
      <Heading label={"Search Results"} />
      <section style={{ height: 400, overflow: "scroll" }}>
        {results.map(({ label, year }) => (
          <Result name={label} year={year} key={label + year} />
        ))}
      </section>
    </main>
  );
}

export default App;
