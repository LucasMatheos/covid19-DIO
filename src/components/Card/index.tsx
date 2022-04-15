import {Card as CardUI} from '../materialUi'
import {LabelStyle,ValueStyle,CardContentStyled} from './styles'

interface CardProps {
  value: number | any;
  label: string;
  color: string;
}

export function Card({value,label,color}:CardProps){
  return(
<CardUI>
  <CardContentStyled color={color}>
    <ValueStyle>{value}</ValueStyle>
    <LabelStyle>{label}</LabelStyle>
  </CardContentStyled>
</CardUI>
  )
}