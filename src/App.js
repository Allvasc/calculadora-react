import React,{useState} from 'react';
import './App.css';


function App() {

  const [valorTela,setValorTela]=useState('')
  const [resultado,setResultado]=useState(0)
  const [acumulador,setAcumulador]=useState(0)
  const [operado,setOperado]=useState(false)


// COMPONENTES
  const Tela=(valor,res)=>{
    return(
      <div className="telaValor">
        <span className='telaOper'>{valor}</span>
        <span className='telaRes'>{res}</span>
      </div>
    )
  }

  const Btn=(label,onClick)=>{
    return(
      <button className='' onClick={onClick}>{label}</button>
    )
  }

  //FUNÇÕES

  const addDigitoTela=(d)=>{
    if((d==='+' || d==='-' || d==='*' || d==='/') && operado){
      console.log('+-*/')
      setOperado(false)
      setValorTela(resultado+d)
      return
    }
    if(operado){
      setValorTela(d)
      setOperado(false)
      return
    }

    const valorDigitadoNaTela=valorTela+d
    setValorTela(valorDigitadoNaTela)
  }
    const limparMemoria=()=>{
      setOperado(false)
      setValorTela('')
      setResultado(0)
      setAcumulador(0)
      return
    }

    const Operacao=(oper)=>{
      if(oper == 'bs'){
        let vtela=valorTela
        vtela=vtela.substring(0,(vtela.length-1))
        setValorTela(vtela)
        setOperado(false)
        return
      }
      try{
        const r=eval(valorTela) //CALCULO
        setResultado(r)
        setAcumulador(r)
        setOperado(true)
      }catch{
        setResultado('ERRO')
      }
    }

    return(
      <div className='App'>
      <div className='container'>
          {Tela(valorTela,resultado)}
          <div className='btn'>
            {Btn('AC', limparMemoria)}
            {Btn('(',()=>addDigitoTela('('))}
            {Btn(')',()=>addDigitoTela(')'))}
            {Btn('/',()=>addDigitoTela('/'))}
            {Btn('7',()=>addDigitoTela('7'))}
            {Btn('8',()=>addDigitoTela('8'))}
            {Btn('9',()=>addDigitoTela('9'))}
            {Btn('*',()=>addDigitoTela('*'))}
            {Btn('4',()=>addDigitoTela('4'))}
            {Btn('5',()=>addDigitoTela('5'))}
            {Btn('6',()=>addDigitoTela('6'))}
            {Btn('-',()=>addDigitoTela('-'))}
            {Btn('1',()=>addDigitoTela('1'))}
            {Btn('2',()=>addDigitoTela('2'))}
            {Btn('3',()=>addDigitoTela('3'))}
            {Btn('+',()=>addDigitoTela('+'))}
            {Btn('0',()=>addDigitoTela('0'))}
            {Btn('.',()=>addDigitoTela('.'))}
            {Btn('<-',()=>Operacao('bs'))}
            {Btn('=',()=>Operacao('='))}

          </div>
      </div>
      </div>
    )

}

export default App;
