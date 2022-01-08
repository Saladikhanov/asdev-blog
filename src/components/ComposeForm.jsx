import {useState, useEffect, useContext} from 'react'
import { nanoid } from 'nanoid';
import AppContext from "../context/AppContext";

const ComposeForm = (props) => {
  const appContext = useContext(AppContext);
  const [composeInput, setComposeInput] = useState("");
  
  const [msgArr, setMsgArr] = useState([]);
  const [enableButton, setEnableButton] = useState(true)

  useEffect(() => {
  const storedMsg = JSON.parse(localStorage.getItem("msgArr"));
  if (storedMsg) setMsgArr(storedMsg);
  
  }, [])


useEffect(() => {
  if (msgArr.length > 0)
  localStorage.setItem("msgArr", JSON.stringify(msgArr))
}, [msgArr]);
  
    const handleClick = (e) => {
      e.preventDefault();
      
      const newMsgObj = {
          id: nanoid(),
          userName: "Arsen",
          date: new Date(),
          content: composeInput,
            
      };
      setMsgArr((prevState) => {
        return [newMsgObj, ...prevState];
      })
      
      setComposeInput("");  
      appContext.updateMsgLine();
      
      fetch(appContext.msgUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMsgObj),
      })
      .then((response) => response.json())
      
      .then((data) => {
        console.log('Success:', data);
      })
      
      .catch((error) => {
        console.error('Error:', error);
      });
      
      
      
    };
 

  const handleChange = (e) => {
    setComposeInput(e.target.value);
    
    if (`${composeInput.length}` >= 140) {
      setEnableButton(false)
      
      
      
    }
    if (`${composeInput.length}` < 140) {
      setEnableButton(true)
      
    }
      
  };
  
  


  return (
      <form className="compose-form">
          <div className="compose-form-container">
              <textarea onChange={handleChange} className="compose-from-area"
              placeholder="What you have in mind..." value={composeInput}/>
          </div>
          <div className="compose-footer">
            <div className={"error-" + (enableButton)}>The tweet can't contain more then 140 chars.</div>
            <button className={"compose-from-submit-" + (enableButton)} onClick={handleClick} disabled={!enableButton} >Send</button>
          </div>
          
      </form>
  )
}

export default ComposeForm;