import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

import './App.css'
import '../../Reset.css';
import {Item} from '../../Components/Item'
import {Dev} from '../Dev/Dev'

import { FiBookOpen } from "react-icons/fi";
import { FiHome } from "react-icons/fi";
import { FiMoreVertical } from "react-icons/fi";
import { FiSun } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { FiX } from "react-icons/fi";

import LVendor from '../../Style/LVendor.png'
import DVendor from '../../Style/DVendor.png'

export const Context = React.createContext();

function App() {

  const Limit = 24
  const [page, setPage] = useState(1)

  const [GDDashed, setGDDashed] = useState(false)

  const [INome, setINome] = useState('')
  const [IImg, setIImg] = useState('')
  const [IDesc, setIDesc] = useState('')

  const [IDelTxt, setIDelTxt] = useState('')

  const [Srch, setSrch] = useState('')

  const [items, setItems] = useState([
    {
      iname:'pingucho', 
      isrc: 'https://i5.walmartimages.com/seo/Penguin-Plush-Cute-Plush-Baby-Penguin-Stuffed-Animal-Doll-Stuffed-Penguin-Plush_4792bcd5-0d4e-48d6-a37d-6f79c8f1c767.dcb05e40920aad2dcde99a3a53e56d80.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
      idescription: 'Pinguim de pelucia amigável'
    },
    {
      iname:'Arremesso de Pikachu', 
      isrc: 'https://media.giphy.com/media/AGPBj8UmV5YyI/giphy.gif',
      idescription: 'Pikachu sendo arremessado'
    },
    {
      iname:'Kirbo Armado', 
      isrc: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/40584008-3cd7-4d4e-8b02-9ab58f97d28a/ddfdurb-3f68479a-e3ff-4cab-9b95-6ba8ece3e140.png/v1/fit/w_750,h_737/oh_my_god_kirby_has_a_gun___________by_arthur2016287_ddfdurb-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzM3IiwicGF0aCI6IlwvZlwvNDA1ODQwMDgtM2NkNy00ZDRlLThiMDItOWFiNThmOTdkMjhhXC9kZGZkdXJiLTNmNjg0NzlhLWUzZmYtNGNhYi05Yjk1LTZiYThlY2UzZTE0MC5wbmciLCJ3aWR0aCI6Ijw9NzUwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.l1QTyCHV3zje2-ZAM19qUBlj887CbWZbnIQjCmwRDfo',
      idescription: 'Não tão amigável.'
    },
    {
      iname:'Sommie de Cartola', 
      isrc: 'https://cdn.segmentnextimages.com/wp-content/uploads/2023/03/Sommie-in-Fire-Emblem-Engage.jpg',
      idescription: 'Seu novo melhor amigo.'
    },
    {
      iname:'Hum???', 
      isrc: 'https://pbs.twimg.com/media/EdRNQk3WsAAWQfQ.jpg',
      idescription: 'Também não faço ideia do que é isso.'
    },
    {
      iname:'Bernie Plush', 
      isrc: 'https://media.tenor.com/V7Yt2QyjBPAAAAAM/berniechi-berniewave.gif',
      idescription: 'Ela é bem tímida.'
    },
    {
      iname:'Yoshi Rosa', 
      isrc: 'https://a-static.mlcdn.com.br/450x450/pelucia-yoshi-super-mario-bros-18cm-rosa-claro-nintendo/geekboyscolecionaveisltda/595215d4950a11ecafa14201ac185055/8d6eb667a0143a930251050ddb14e1fd.jpeg',
      idescription: 'Pelúcia rosa de um Yoshi.'
    },
    {
      iname:'Yoshi Raro', 
      isrc: 'https://pbs.twimg.com/media/FwqmC9-WwAIBYjN.jpg:large',
      idescription: 'Pelúcia rara de Yoshi do ano de 1999.'
    },
    {
      iname:'Blåhaj', 
      isrc: 'https://www.nordicchill.co.nz/cdn/shop/products/Screenshot2023-03-07at1.33.28PM.png?v=1678149242&width=1946',
      idescription: 'Tubarão mais gentil do mundo.'
    },
    {
      iname:'Yoshi Jazz', 
      isrc: 'https://pbs.twimg.com/profile_images/1275099410247147521/mu61ScjG_400x400.jpg',
      idescription: 'Yoshi que adora tocar Jazz.'
    },
    {
      iname:'Enchiridion', 
      isrc: 'https://m.media-amazon.com/images/I/71M81VquBfL._AC_UF350,350_QL80_.jpg',
      idescription: 'Livro dos hérois, poucos sabem o que está escrito em suas páginas.'
    },
    {
      iname:'Mighty', 
      isrc: 'https://media.karousell.com/media/photos/products/2019/06/07/kamen_rider_exaid_stuffed_toy_premium_bandai_1559877813_7dc9e089.jpg',
      idescription: 'Altamente perigoso, mantenha-o dentro da embalagem sempre.'
    },
    {
      iname:'Moais', 
      isrc: 'https://earth.esa.int/web/earth-watching/content/documents/257246/3797506/Easter-Island.jpg',
      idescription: 'Estátuas da ilha de Pascoa.'
    },
    {
      iname:'Conejito', 
      isrc: 'https://www.peachymart.com/cdn/shop/products/IMG_3278.jpg?v=1645514291',
      idescription: 'Coelho elegante e bem vestido.'
    },
    {
      iname:'Bloco de Interrogação', 
      isrc: 'https://http2.mlstatic.com/D_NQ_NP_646629-MLB54937561789_042023-O.webp',
      idescription: 'O que será que está dentro dele?'
    },
    {
      iname:'Lobo Camuflado', 
      isrc: 'https://m.media-amazon.com/images/I/714I-BL7mDL._AC_UF894,1000_QL80_.jpg',
      idescription: 'Ele jura que é uma ovelha.'
    },
    {
      iname:'Esfera do Dragão de 4 Estrelas', 
      isrc: 'https://64.media.tumblr.com/3aa24e8e17e517c561690dfc6f82d8dd/tumblr_inline_pfohh4DALG1qkowfo_640.png',
      idescription: 'Junte mais 6 e tenha uma surpresa.'
    },
    {
      iname:'Anel Dourado', 
      isrc: 'https://steamuserimages-a.akamaihd.net/ugc/858354616142808703/AB7BC1BB4E4951124F9D23304887241651CACCF7/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
      idescription: 'Junte 100 e ganhe uma vida.'
    },
  ])

  const [NMode, setNMode] = useState(false)

  function NewItem(){
    
    const iname = INome
    const isrc = IImg
    const idescription = IDesc

    const item = {
      iname,
      isrc,
      idescription
    }

    return item

  }
  function AddItem(){
    const Itemm = [NewItem(), ...items]
    setItems(Itemm)
  }
  function IsEmptyA(){
    
    if(INome === '' && IImg === '' && IDesc === ''){
      return true
    }
    {return false}
  }
  function IsEmptyD(){
    
    if(IDelTxt === ''){
      return true
    }
    {return false}
  }

  function DeleteItem(){
    const Temp = [...items].filter( item => !item.iname.toLocaleLowerCase().includes(IDelTxt.toLocaleLowerCase()))
    setItems(Temp)
  }

  function nextPage(){

    setPage(page+1)
  }
  function prevPage(){
    setPage(page-1)
  }
  function GDDash(){ GDDashed ? setGDDashed(false) : setGDDashed(true); }


  function CanGoBack(){

    if(page !== 1){
      return true
    }
    {
      return false
    }

  }
  function CanGoNext(){
    const Ilength = items.length
    const IFI = page * Limit

    if(Ilength > IFI){
      return true
    }
    {return false}
  }

  return (
    <Router>
      <div className={`wrapper ${NMode ? 'NWrapper' : ''}`}>

        <header>

          <div className={`Apr ${NMode ? 'NApr' : ''}`}>

            <ul className='Basics'>
              <li>                
                <Link to='/Dev'>
                  <button name='Menu' className={NMode ? 'WTB' : ''} title='Sobre'>
                    <FiBookOpen/>
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <button name='Casa' title='Principal' className={NMode ? 'WTB' : ''}>
                    <FiHome/>
                  </button>
                </Link>
              </li>
              <li>
                <img src={NMode? DVendor : LVendor} alt='Vendor' height={40}/>
              </li>
            </ul>

            <ul className='Busca'>
              <li>
                <input name='Search' type='search' placeholder='Buscar itens...' autoFocus value={Srch} onChange={ E => {setSrch(E.target.value); setPage(1)}}></input>
              </li>
              <li>
                <button name='BGenDel' title='Adicionar/Deletar' className={NMode ? 'WTB' : ''} onClick={ GDDash }>
                  <FiMoreVertical/>
                </button>
              </li>
              <li>
                <button name='ChMode' title={NMode? 'Modo Claro' : 'Modo Escuro'} className={NMode ? 'BTW' : ''} onClick={ () => {NMode ? setNMode(false) : setNMode(true)}}>
                {NMode ? <FiMoon/> : <FiSun/>}
                </button>
              </li>
            </ul>
          
          </div>

          <div className={`GenDel ${GDDashed ? 'GDDashed' : ''} ${NMode ? 'NGenDel' : ''}`}>
                <form id="IGen">
                  <fieldset name="IComp" form="IGen">
                        <legend>Adicione um item</legend>
                          <div>
                          <input name="INome" type="text" form="Igen" value={INome} placeholder="Nome do item" onChange={ E => {setINome(E.target.value)}}/>
                          <br/>
                          <br/>
                          <input name="IImg" type="url" value={IImg} placeholder="URL da imagem" onChange={ E => {setIImg(E.target.value)}}/>
                          <br/>
                          <br/>
                          <textarea name="IDesc" cols="21" rows="5" wrap="hard" max-maxLength={255} value={IDesc} onChange={ E => {setIDesc(E.target.value)}}/>
                          </div>
                          <button name='AddItem' className={NMode ? 'BTW' : ''} onClick={ E => {E.preventDefault(); AddItem(); setIImg(''); setINome(''); setIDesc('')}} disabled={IsEmptyA() === true}>
                            <FiPlus/>  
                          </button>
                  </fieldset>
                </form>
                <form id='IDel'>
                  <fieldset name='IDelField' form='IDel'>
                      <legend>Delete um item</legend>
                      <input name='IDelTxt' tipe='text' form='IDel' placeholder='Que item deseja deletar?' value={IDelTxt} onChange={ E => {setIDelTxt(E.target.value)}}/>
                      <button name='DeleteItem' className={NMode ? 'BTW' : ''} onClick={ E => {E.preventDefault(); DeleteItem(); setIDelTxt('')}} disabled={IsEmptyD() === true}>
                        <FiX/>
                      </button>
                  </fieldset>
                </form>
          </div>

        </header>

        <main className='Vendor'>
          <Routes>

            <Route path='/' element={<>
              <section>
                <div className='Produtos'>
                {items.filter( item => item.iname.toLocaleLowerCase().includes(Srch.toLocaleLowerCase())).map( (item, Index) => {

                  const Min = (page - 1) * Limit
                  const Max = (page * Limit) - 1

                  if(Index >= Min && Index <= Max){

                    return (
                      <Context.Provider value={[NMode, setNMode]}>
                      <Item iname={item.iname} isrc={item.isrc} idescription={item.idescription}/>
                      </Context.Provider>
                    )

                  }

                  return undefined
                  
                  })}
                </div>
              </section>
            
              <div className='NAVPointer'>
                <button className={`LFTPointer ${NMode ? 'BTW' : ''}`} onClick={prevPage} disabled={CanGoBack() === false}>
                  <FiChevronLeft/>
                </button>
                <button className={`RGTPointer ${NMode ? 'BTW' : ''}`} onClick={nextPage} disabled={CanGoNext() === false}>
                <FiChevronRight/>
                </button>
              </div>
            </>}/>

            <Route path='/Dev' element={
              <Context.Provider value={[NMode, setNMode]}>
                <Dev></Dev>
              </Context.Provider>
            }/>
            
          </Routes>
        </main>

        <footer className={NMode ? 'NFooter' : ''}>
          <dl>
            <dt>Desenvolvedor:</dt>
            <dd>Gustavo Gabriel Moraes da Costa</dd>
          </dl>
          <dl>
            <dt>Contatos:</dt>
            <dd>Tel/WhatsApp: (85)999390305</dd>
            <dd>Gmail: <a href='mailto:gustavogabrielcomercial@gmail.com'>gustavogabrielcomercial@gmail.com</a></dd>
          </dl>
        </footer>
      </div>
    </Router>
  );
}

export default App;
