//Зебра для таблицы, используя styled-component

const coloredZebra = (amountRow: number) => {
  let styles = '';
  let diff = 0.12 / amountRow;
  let transparent = 0.12 - diff;

  for (let i = 1; i <= amountRow; i += 1) {
    transparent = transparent + diff;

    styles += `
      &:nth-child(${i}) {
         background: linear-gradient(0deg, rgba(84, 97, 220, ${transparent}), rgba(84, 97, 220, ${transparent})), #FFFFFF;
      }
    `;
  }

  return css`${styles}`;
};

export const Content = styled.div`  
  ${({amountRow}:IContent) => amountRow && css`
    ${Row} {
      ${coloredZebra(amountRow)}
    }
  `}
`;
