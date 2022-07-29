import styled from 'styled-components'
import imgs from './pexels-4.jpg'
import fondo from './fondo.png'
import fondoTwo from './pexels-5.jpg'
import fondoDiet from './fondo2.png'
import food from './food.png'


export const themesC = {
    green_Dark: '#2b4116',
    green_Ligth: '#708a2a',
    cream: '#d0af59',
    brown: '#5a4a11',
    board: '#2c1f09',
    dark: '#050504',
    white: '#bababa',
    orange: '#854b0a',
    grey_Ligth: '#747c6c',
    grey_Dark: '#393a2c'
}

////////////////////////////////////////////////////
//                  loading
////////////////////////////////////////////////////

export const DivLoadingBack = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #050504;
    display: flex;
    align-items: center;
    justify-content: center;
    ` 
export const ImageLoading = styled.img`
        width: 500px;
        height: 500px;
        background-color: #050504;
        border-radius: 250px;
        transition: 0.3s;
        position: relative;
        z-index: 10;
        :hover{
            width: 480px;
            height: 480px;
            border-radius: 300px;
        }
`
export const DivLoadingBox = styled.div`
    width: 520px;
    height: 520px;
    border-radius: 490px;
    position: absolute;
    overflow: hidden;
    display: flex;
    align-items: center;
`

export const BoxLoading = styled.div`
    width: 600px;
    height: 200px;
    background: linear-gradient(#0288a7,#019131);
    content: '';
    position: absolute;
    @keyframes animate {
        0%{
                transform: rotate(0deg);
            }
        100%{
                transform: rotate(350deg);
        }
    }
    animation: animate 4s linear infinite;
    :after{
        content: '';
        position: absolute;
        inset: 100px;
        background: #1a3035;
    }
`

////////////////////////////////////////////////////
//                  Cards
////////////////////////////////////////////////////

export const DivImaCards = styled.div`
    background: linear-gradient(rgba(5, 5, 4, 0.6), 
    rgba(5, 5, 4, 0.6)), 
    url(${imgs});
    background-attachment: fixed;
    background-size: cover;
    background-repeat: repeat;
    padding: 20px 0px;
    z-index: -1;
`

export const DivCards = styled.div`
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    align-content: space-around;
    grid-gap: 10px;
    align-items: center;
    justify-items: center;
`

export const DivCard = styled.div`
    background-image: url(${fondo});
    width: 285px;
    border: 0.1px solid ${themesC.green_Dark};
    border-radius: 6px;
    color: ${themesC.dark};
    font-weight: bold;
    font-family: none;
    height: 400px;
    display: grid;
    grid-template-rows: 10% 50% 32% auto;
    grid-template-columns: 1fr;
    justify-items: center;
`

export const DivCardDiets = styled.div`
    display: grid;
    grid-gap: 6px;
    align-items: baseline;
    grid-template-columns: 80px 80px 80px;
    grid-template-rows: auto;
    padding: 10px;

`
export const ImgCard = styled.img`
    width: 200px;
    height: 200px;
    background-size: cover;
    box-shadow: 0px 0px 9px #000000;
    border-radius: 770px;
    position: relative;
`

export const HR = styled.div`
    border: 0;
    width: 400px;
    border-top: 1.5px dotted ${themesC.orange};
    border-bottom: 1.5px solid ${themesC.dark};
    margin-top: 100px;
    display: none;
    z-index: 8;
`

export const H5 = styled.h5`
    margin: 0;
`
export const ButtonCard = styled.button`
    width: 250px;
    height: 30px;
    margin-bottom: 6px;
    border-radius: 30px;
    background-color: transparent;
    color: ${themesC.dark};
    font-size: medium;
    font-weight: bold;
    font-family: none;
    :hover {
        background-color: ${themesC.green_Ligth};
        box-shadow: 0px 0px 4px ${themesC.green_Dark};
    }
`
////////////////////////////////////////////////////
//                  Detail
////////////////////////////////////////////////////

export const DivDetailBack = styled.div`
    background-image: url(${fondoTwo}); 
    background-size: cover;
    background-repeat: no-repeat; 
    height: 100vh;
`

export const DivDetail = styled.div`
    background-color: rgb(5, 5, 4, 0.9);
    border: 10px solid #000000;
    color: ${themesC.white};
    border-radius: 20px;
    margin: 30px 50px;
    height: auto;
    font-family: none;
    position: relative;
`
export const DetailRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const DivColumns = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
`

export const ImgDetail = styled.img`
    width: 250px;
    height: 250px;
    z-index: 0;
    background-size: cover;
    box-shadow: 0px 0px 9px #000000;
    border-radius: 770px;
    position: relative;
`

export const ButHomeDetail = styled.button`
    background-color: transparent;
    box-shadow: 0px 0px 3px #000000;
    color: ${themesC.dark};
    font-weight: bold;
    font-family: none;
    margin-top: 20px;
    width: 120px;
    height: 40px;
    border: 1px solid ${themesC.dark};
    border-radius: 30px;
    :hover {
        background-color: ${themesC.green_Ligth};
        box-shadow: 0px 0px 4px ${themesC.green_Dark};
    }
    & > span {
        font-size: medium;
    }
` 

////////////////////////////////////////////////////
//                  Create
////////////////////////////////////////////////////

export const DivCreateBack = styled.div`
    background-image: url(${fondoTwo}); 
    background-size: cover;
    background-repeat: no-repeat; 
    height: 100vh;
    display: flex; 
    align-items: center;
    justify-content: center;
`

export const ButtonCreate = styled.button`
    background-color: transparent;
    box-shadow: 0px 0px 3px #000000;
    color: ${themesC.dark};
    font-weight: bold;
    font-family: none;
    position: absolute;
    top: 30px;
    left: 50px;
    width: 100px;
    height: 50px;
    border: 1px solid ${themesC.dark};
    border-radius: 30px;
    :hover {
        background-color: ${themesC.green_Ligth};
        box-shadow: 0px 0px 4px ${themesC.green_Dark};
    }
    & > span {
        font-size: medium;
    }
` 
export const DivCreate = styled.div`
    background-color: rgb(5, 5, 4, 0.9);
    border: 10px solid #000000;
    color: ${themesC.white};
    border-radius: 20px;
    margin: 0px;
    height: auto;
    width: 800px;
    font-family: none;
    position: relative;
    padding-bottom: 20px;
`

export const DivCreateDiets = styled.div`
    display:grid;
    width: 650px;
    grid-template-columns: repeat(4, 1fr);
    align-content: space-around;
    align-items: center;
    justify-items: center;
    padding: 20px;
`

export const DivInputsC= styled.div`
    margin-top: 15px;
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    align-content: space-around;
    align-items: center;
    justify-items: center;
    font-weight: bold;
`

export const DivInputC= styled.div`
    width: 100%;
    display:grid;
    grid-template-rows: repeat(2, 1fr);
    align-items: center;
    justify-items: center;
`

export const DivInputBC= styled.input`
    background-color: transparent;
    box-shadow: 0px 0px 3px ${themesC.white};
    color: ${themesC.white};
    width: 50%;
    height: 30px;
    margin-bottom: 10px;
    border: 1px solid ${themesC.white};
    font-weight: bold;
    font-family: none;
    border-radius: 30px;
    :hover {
        background-color: ${themesC.green_Ligth};
        box-shadow: 0px 0px 4px ${themesC.green_Dark};
    }
`

export const InputC = styled.input`
    color: ${themesC.white};
    width: 90%;
    height: 35px;
    border-radius: 30px;
    background-color: transparent;
    border: 1px solid ${({isRigth}) => isRigth ? '#6e1e1e' : themesC.white};
    ::placeholder{
        color: ${themesC.white};
        font-weight: bold;
        font-family: none;
    };
    text-indent: 4%;
    ::-webkit-inner-spin-button, 
    ::-webkit-outer-spin-button { 
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none; 
    }
`

////////////////////////////////////////////////////
//                  Footer
////////////////////////////////////////////////////

export const Footer = styled.div`
    border-top: 2px solid ${themesC.grey_Dark};
    background-image: url(${fondo});
    font-family: none;
    font-weight: bold;
    padding: 10px 0px;
`

export const DivButtons = styled.div`
    display: flex;
    justify-content: space-evenly; 
    margin: 10px;
`

export const ButtonFooter = styled.button`
    background-color: transparent;
    box-shadow: 0px 0px 3px #000000;
    color: ${themesC.dark};
    font-weight: bold;
    font-family: none;
    width: 100px;
    height: 30px;
    border: 1px solid ${themesC.dark};
    border-radius: 30px;
    :hover {
        background-color: ${themesC.green_Ligth};
        box-shadow: 0px 0px 4px ${themesC.green_Dark};
    }
    & > span {
        font-size: medium;
    }
` 

////////////////////////////////////////////////////
//                  Filters
////////////////////////////////////////////////////

export const DivFiltersBack = styled.div`
    justify-content: center; 
    background-color: ${themesC.dark};
    padding: 10px;
`

export const DivFilters = styled.div`
    width: 900px;
    margin: auto;
    padding: 10px 0px;
    border-radius: 30px;
    flex-direction: row;
    display: flex;
    justify-content: space-around;
    background-color: ${themesC.green_Ligth};
`
export const SelectFilters = styled.select`
    width: 150px;
    background: ${themesC.dark};
    color: ${themesC.white};
    font-family: none;
    font-weight: bold;
    padding: 6px 15px;
    border-radius: 20px;
`

////////////////////////////////////////////////////
//                  NavBar
////////////////////////////////////////////////////

export const DivNav = styled.div`
    background-image: url(${fondo});
    height: 80px;
    background-attachment: fixed;
    z-index: -1;
    flex-direction: row;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const ImgNav = styled.img`
    width: 80px; 
    height: auto;
    border-radius: 40px;
`

export const InputB = styled.input`
    width: 70px;
    height: 30px;
    border-radius: 30px;
    background-color: transparent;
    border: 1px solid ${themesC.dark};
    color: ${themesC.dark};
    font-weight: bold;
    font-family: none;
    :hover{
        background-color: ${themesC.green_Ligth};
        box-shadow: 0px 0px 4px ${themesC.green_Dark};
    }
`

export const InputS = styled.input`
    margin-right: 5px;
    width: 180px;
    height: 25px;
    border-radius: 30px;
    background-color: transparent;
    border: 1px solid ${themesC.dark};
    text-indent: 4%;
    ::placeholder{
        color: ${themesC.dark};
        font-weight: bold;
        font-family: none;
    }
`
export const Span = styled.span`
    color: ${themesC.dark};
    font-weight: bold;
    font-family: none;
    font-size: larger;
    padding: 2px;
    border-bottom: 1.5px solid ${themesC.dark};
    border-top: 1.5px solid ${themesC.dark};
    :hover{
        text-shadow: 0px 0px 10px ${themesC.green_Ligth};
    }
`

////////////////////////////////////////////////////
//                  Diets
////////////////////////////////////////////////////

export const DivDietsBack = styled.div`
    background-image: url(${fondoDiet}); 
    width: 1fr;
    height: 100%;
    padding: 4% 4%;
`

export const DivDiet = styled.div`
    background-color: rgb(5, 5, 4, 0.9);
    border: 10px solid #000000;
    color: ${themesC.white};
    border-radius: 20px;
    font-family: none;
`
export const DivIndDiet = styled.div`
    display: grid;
    grid-template-columns: 20% auto 2%;
`
export const H3Diet = styled.h3`
    font-size: larger;
    :hover{
        text-shadow: 0px 0px 10px ${themesC.green_Ligth};
        color: ${themesC.green_Ligth};
    }
`

export const DivFood = styled.div`
    background-image: url(${food});
    background-repeat: no-repeat;
    display: flex;
    align-self: center;
    width: 105px;
    height: 100px;
    margin: 20px 47%;
    animation: sprite 5s steps(8)
    infinite;
    @keyframes sprite {
        0%{
            background-position-x: 0;
        }
        100%{
            background-position-x: -860px;
        }
    }
`