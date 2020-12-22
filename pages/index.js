import useSWR from "swr";
import axios from "axios";

const fetcher = async (url) => {
  const data = await axios.get(url);
  data && console.log(data);
  return data.data;
};

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
