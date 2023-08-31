import { ContainerButton } from './FeedbackOptions.styled';

export const Feedbacks = ({ onClick, options }) => {
  return (
    <ContainerButton>
      {options.map(option => (
        <button key={option} type="button" onClick={() => onClick(option)}>
          {option}
        </button>
      ))}
    </ContainerButton>
  );
};
