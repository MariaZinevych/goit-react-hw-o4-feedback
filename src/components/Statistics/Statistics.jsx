import { Container } from './Statistics.styled';

export const Statictics = ({ good, neutral, bad, onTotal, onGoodfeedback }) => {
  return (
    <Container>
      <ul>
        <li>Good {good} </li>
        <li>Neutral {neutral}</li>
        <li>Bad {bad}</li>
        <li>Total {onTotal()}</li>
        <li>PositivePercentage {onGoodfeedback()} % </li>
      </ul>
    </Container>
  );
};
