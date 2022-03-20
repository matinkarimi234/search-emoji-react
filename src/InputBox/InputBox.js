import React from 'react';
import './InputBox.css';
import emojiList from './emojiList.json'
const InputBox = ({parentCallback}) => {
    var result = []
    const handleInputChange = (event) => {
        
        //  console.log(emojiList[0].title)
        // let result =  emojiList.findIndex(emoji => emoji.title.toLowerCase() === event.target.value.toLowerCase());

        // // if(result !== -1){
        // //     console.log(emojiList[result].symbol)
        // // }
        // (result !== -1 && console.log(emojiList[result].symbol))
        
        if(event.target.value.length >= 3)
        {
            emojiList.forEach(emoji => {
                if(emoji.keywords.includes(event.target.value.toLowerCase()))
                {
                    result.push(emoji)
                }
            })
        }
        parentCallback(result)
        // setEmojiData(...result)
        // console.log(emojiData)
    }





    return(
        <div className="input-box">
            <input onChange={handleInputChange} type="text" className="form-control"></input>
            <i className="fa fa-search"></i>
        </div>
    );
}

export default InputBox;