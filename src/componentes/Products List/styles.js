import styled from "styled-components";


export const Container = styled.main`
  max-width: 1100px;
  height: 100%;
  margin: 6rem auto 3rem auto;
  padding: 0 2rem;

  display: flex;
  justify-content: space-between;
  align-items: stretch;
  //Para o atributo flex abaixo funcionar, eu uso flex-wrap
  flex-wrap: wrap;
  gap: 2rem;

  //O '&' eu referencio o mesmo elemento que estou dentro, que nesse caso é o 'Container', e pego tudo o que estiver aninhado dentro dele
  & > * {
    //Quero que o elemento estiquem o maximo possivel ('1'), com no minimo 30rem
    flex: 1 30rem;
  }
` 