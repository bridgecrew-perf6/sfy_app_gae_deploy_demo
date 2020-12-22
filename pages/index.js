import useSWR from "swr";
import axios from "axios";

const fetcher = async (url) => {
  const data = await axios.get(url);
  // const data = await response.json()
  data && console.log(data);
  return data.data;
};

// Testing the map via hardcoded array
// const ta = [
//   { demo_txt: "This has been a test of the Cloud SQL integration system." },
// ];

const Index = () => {
  const {data} = useSWR("/test", fetcher)
  data && console.log("something to test with: ", data)
  return (
    <div>
      this is a test y'all...
      <br />
      <ul>
        {data && data.map((obj) => {
          return <li>{obj.demo_txt}</li>;
        })}
      </ul>
    </div>
  );
};

export default Index;
