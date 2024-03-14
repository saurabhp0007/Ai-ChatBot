"use client";
import { createContext, useState } from "react";
import runChat from "../Config/gemini";

export const Context = createContext({});



const ContextProvider = (props:any) => {
    const [loading, setLoading] = useState(false);
    const[resultData, setResultData] = useState("");
    const [input , setInput] = useState("")
    const[prevPrompt , setPrevPrompt] = useState<string[]>([])
    const [recentPrompt, setRecentPrompt] = useState("")
    const [showResult, setShowResult] = useState(false)

    const delayPara = (index :any,nextWord :any) => {
        setTimeout(function(){
            setResultData(prev => prev + nextWord)
        },75*index)
    }
    const newChat = () => {
        setLoading(false)
        setShowResult(false)
    }
    const onSentMessage = async (prompt:any) => {
        setResultData("")
        setLoading(true)
        setShowResult(true)
        let response = "";
        if(prompt!==undefined){
           
          response= await runChat(prompt)
          setRecentPrompt(prompt)
        }else{
            setPrevPrompt(prev=>[...prev,input])
            setRecentPrompt(input)
            response = await runChat(input)
        }
        
      let responseArray = response?.split("**")
      let newArray:any = "";
      for(let i=0;i<responseArray.length;i++){
        if(i%2!==1 || i===0){
            newArray += responseArray[i] 
        }else{
            newArray += "<b>"+responseArray[i]+"</b>"
        }
      }
      let newResponse2 = newArray?.split("*").join("</br>")

      let newResponseArray = newResponse2?.split(" ")
      for(let i=0;i<newResponseArray.length;i++){
        const nextWord = newResponseArray[i]
        delayPara(i,nextWord+" ")
      }
      setLoading(false)
      setInput("")
    }
  
 const contextValue = {
     loading,
     setLoading,
     resultData,
     setResultData,
     input,
     setInput,
     prevPrompt,
     setPrevPrompt,
     recentPrompt,
     setRecentPrompt,
     showResult,
     setShowResult,
     onSentMessage,
     newChat
     
 }
    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider