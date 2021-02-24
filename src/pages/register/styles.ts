import styled from "styled-components"

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #f1f1f1;
    display: flex;
    justify-content: center;
    align-items: center;

    .form{
        width: 30%;
        height: 60%;
        background-color: #FFF;
        border-radius: 15px;
        box-shadow: 0px 0px 10px rgba(0,0,0,0.08);
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        padding: 0px 10px;
        

        .header{
            width: 100%;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            

            h2{
                font-size: 2.2rem;
                margin-bottom: 10px;
            }
            h3{
                font-size: 1.5rem;
            }
        }
        .names{
            width: 100%;
            input{
                width: 48%;
            }
            input:focus{
                outline: none;
            }
            
            input:nth-child(2){
                margin-left: 10px;
            }
        }
        .email{
            width: 100%;
            input{
                width: 98%;
                
            }
        }
        .passwords{
            width: 100%;
            input{
                width: 48%;
            }
            input:nth-child(2){
                margin-left: 10px;
            }
        }
        .sex-checkbox{
            width: 100%;
            display:flex;
            justify-content:space-around;
            align-items: center;
            .male{
                font-size: 17px;
                display: flex;
                justify-content: center;
                align-items: center;
                input{
                    width: 15px;
                    margin-right: 10px;
                }
            }
            .female{
                font-size: 17px;
                display: flex;
                justify-content: center;
                align-items: center;
                input{
                    width: 15px;
                    margin-right: 10px;
                }
            }
        }

        .birthday {
                width:100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-direction:column;
            
            .times{
                display:flex;
                justify-content:space-between;
                width: 100%;
                height: 50px;
                flex-direction: row;
                input{
                    width: 30%;
                    border-radius: .5rem;
                }
            }
        }

        .btn{
            background-color: #0066FF;
            width: 80%;
            height: 50px;
            display:flex;
            justify-content:center;
            align-items: center;
            border-radius: 10px;
            transition: background-color .2s ease;
            span{
                color:#FFF;
                font-size: 1.8rem;
            }
            &:hover{
                cursor:pointer;
                background-color: #0055FF;
            }
        }

        
       
        
    }

    .form input{
        height: 50px;
        border-radius: 10px;
        border: 1px solid #d5d5d5;
        padding: 0px 10px;
    }
    .form input:hover{
        border: 1px solid #0066FF;
    }
    .form input:focus{
        outline: none;
    }
   
`