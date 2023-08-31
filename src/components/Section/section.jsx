import { SectionTitle, SectionWrap } from './section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionWrap>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionWrap>
  );
};
