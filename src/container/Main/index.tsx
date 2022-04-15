import { memo, useCallback, useEffect, useState } from "react";
import { Board } from "../../components/Boards";
import { Panel } from "../../components/Panel";
import { api } from "../../services/api";
import { ContainerStyle } from "./styles";
interface DataProps {
  cases: number;
  todayDeaths: number;
  recovered: number;
  deaths: number;
  todayCases: number;
  casesPerOneMillion: number;
  totalTests:number;
  testsPerOneMillion:number;
}
function Main() {
  const [country, setCountry] = useState("brazil");
  const [data, setData] = useState<DataProps>({} as DataProps);
   const updatedAt = new Date().toLocaleString();

  const getCovidData = useCallback((country: string) => {
    api.get(`/${country}`).then((data: any) => {
      setData(data.data);
      });
  }, []);

  const handleChange = ({ target} : any) => {
    const country = target.value
    setCountry(country)
  }

  useEffect(() => {
    getCovidData(country);
  }, [getCovidData, country]);

  return (
    <ContainerStyle>
      <div className="mb-2">
      <Panel
          data={data}
          updateAt={updatedAt}
          onChange={handleChange}
          country={country}
          getCovidData={getCovidData}
        />
      </div>
       <Board data={data} />
    </ContainerStyle>
  );
}

export default memo(Main);
