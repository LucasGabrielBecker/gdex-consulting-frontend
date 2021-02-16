import styled from "styled-components"

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display:grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 
            "header header"
            "leftside rightside"
            "leftside rightside"
            "leftside rightside";

    .header{
        width: 100%;
        height: 100%;
        grid-area: header;
        display:flex;
        justify-content:center;
        align-items:center;
    }

    .leftside{
        grid-area:leftside;
        width: 100%;
        height: 100%;
        display:flex;
        justify-content:center;
        align-items:center;

        img{
            min-width: 500px;
            width: 80em;
        }
    }

    .rightside{
        grid-area:rightside;
        width: 100%;
        height: 100%;
        display:flex;
        justify-content:center;
        align-items:center;
        

        .main-content{
            width: 90%;
            height: 90%;
            background-color: #eeeeef;
            border-radius: 1rem;
            padding: 30px;
            box-shadow: 0px 0px 20px rgba(0,0,0,.25);

            display:grid;
            grid-template-rows: 70px 1fr 1fr;
            grid-template-columns: 1fr;
            grid-template-areas: 
                    "header"
                    "main"
                    "footer";

        .header{
            span{
                font-size: 3rem;
                font-weight: 600;
            }
        }

        .main{
            grid-area: main;
            display:flex;
            justify-content: space-around;
            align-items:center;
            
            span{
                font-size: 2.4rem; 
                font-weight:500;
                color: #3F3D56;
                margin-left:20px;
                max-width:300px;
            }
            img{
                width: 30em;
                min-width: 300px;
            }
        }

        .footer{
            grid-area: footer;
            display:flex;
            justify-content: space-around;
            align-items:center;
            
            span{
                font-size: 2.4em;
                font-weight:500;
                color: #3F3D56;
                margin-left:20px;
                max-width:30em
            }
            img{
                width: 30em;
                min-width: 300px;
            }
        }
        
    }
   
`;