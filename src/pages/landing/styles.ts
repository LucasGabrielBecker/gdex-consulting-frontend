import styled from 'styled-components';

export const Container = styled.div`
  padding:0;
  margin:0;
  box-sizing:border-box;
  background-color: #d1d1d1;
  width: 100vw;
  height: 100vh;

`;

export const Header = styled.div`
    width: 100%;
    height: 10%;
    min-height:70px;
    padding: 2rem 3rem;
    background-color:#FFF;
    display:grid;
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-areas: 'logo infos button';
    align-items: center;
    justify-content:center;
    

    img{
        grid-area: logo;
        display:flex;
        justify-content:center;
        align-self:center;
    }

    ul{
        height: 100%;
        grid-area:infos;
        display:flex;
        list-style-type:none;
        justify-self: flex-start;

        li{
            margin-right: 8rem;
            font-size: 1.4rem;
        }
        li:hover{
            border-bottom: 3px solid #000000;
        }
        
    }

    .hovered{
        border-bottom: 2px solid #000000;
    }

    
    
    .button-entrar{
        height: 100%;
        grid-area:button;
        display:flex;
        justify-content:center;
        align-items:center;
        justify-self:center;
        align-self:center;

        border: 1px solid #ec38bc;
        width: 15rem;
        height: 5rem;

        font-size: 1.6rem;
        color:#3d3d3d;
        transition: all .25s ease;
        :hover{
            background-color:#fc90f0;
            border:none;
            color:#000000;
        }
    }


`;

export const MainContent = styled.div`
    width: 100%;
    height: 90%;
    background-color:#FFF;
    z-index: -3;
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'text workers';
    justify-content:center;
    align-items: center;

    .text-content{
        grid-area: text;
        max-width: 60rem;
        min-width: 400px;
        color:#3F3D56;
        justify-self: center;

        p{
            font-size: 5rem;
            font-weight: 600;
            margin-bottom: 1rem;
        }
        span{
            font-size:2.2rem;
        }
        .solicitacao{
            width: 30rem;
            min-height: 4rem;
            background-color: #000000;
            color:#FFF;
            display: flex;
            justify-content: center;
            align-items:center;
            margin-top: 3rem;
            font-size: 1.6rem;
            border-radius: 1rem;
            transition: background-color .2s ease;

            :hover{
                background-color: #1e1f1e;
            }
        }
    }

    .workers img{
        max-width: 100%;
        min-width: 550px;
        justify-self: center;
    }


`;