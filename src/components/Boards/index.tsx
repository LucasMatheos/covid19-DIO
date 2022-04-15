import { Grid, Skeleton } from "../materialUi";
import { Card } from "../Card";
interface BoardProps {
  data:{

    cases: number;
    todayDeaths: number;
    recovered: number;
    deaths: number;
    todayCases: number;
    casesPerOneMillion: number;
    totalTests:number;
    testsPerOneMillion:number;
  }
}
export function Board(data: BoardProps) {
  const { cases, todayDeaths, recovered, deaths, todayCases,casesPerOneMillion ,totalTests,testsPerOneMillion} = data.data;

  const getValue = (value: number) =>
    value ? value : <Skeleton variant="text" width={182} height={60} />;
  
    return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={3}>
        <Card value={getValue(cases)} label='Total de Casos' color="#5d78ff"/>
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(casesPerOneMillion)} label='Casos Por Milhão' color="#808080"/>
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(todayCases)} label='Casos Hoje' color="#ff5d5d"/>
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(testsPerOneMillion)} label='Testes por Milão' color="#fff45d"/>
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(totalTests)} label='Total de Testes' color="#00b7ff"/>
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(recovered)} label='Recuperados' color="#5dff5d"/>
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(deaths)} label='Óbitos' color="#000000"/>
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(todayDeaths)} label='Óbitos Hoje' color="#963535"/>
      </Grid>


    </Grid>
  );
}
