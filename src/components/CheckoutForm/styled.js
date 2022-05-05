import styled from 'styled-components';
import device from '../../utils/scss/mediaQueries';

export const StyledForm = styled.form`
  display: flex;
  column-gap: 20px;
  flex-flow: row wrap;
  grid-area: checkoutForm;
  margin-bottom: 50px;
  row-gap: 20px;
  width: 100%;

  h3 {
    margin: 0;
  }

  @media ${device.tablet} {
    border-left: 1px solid ${(props) => props.theme.main};
    padding-left: 30px;
  }
`;

export const StyledInputsWrapper = styled.div`
  display: flex;
  column-gap: 20px;
  flex-flow: row wrap;
  grid-area: checkoutForm;
  row-gap: 25px;
  width: 100%;

  label {
    flex-grow: 1;
  }

  label:nth-child(3) {
    max-width: 100px;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
`;

export const StyledActionsWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  column-gap: 20px;
  width: 100%;

  * {
    margin: 0;
    font-size: 15px;
    text-align: center;
  }
`;
