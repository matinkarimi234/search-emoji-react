import React,{useState,useRef,useEffect} from "react";
import './Container.css';
import InputBox from'../InputBox/InputBox';
import ListPanel from'../ListPanel/ListPanel';
import ListItem from'../ListItem/ListItem';
const Container = ({children}) => {
    const [data,setData] = useState([]);
    const containerRef = useRef(null);
    useEffect(() => {
        containerRef.current.classList.add('visible')
    },[])
    const callback = (arg) => {
        setData(arg);
    }
    return(
        <div className="col-container mt-5">
            <div className="row d-flex justify-content-center ">
                <div className="col-md-6">
                    <div className="card" ref={containerRef}>
                    <InputBox parentCallback={callback}>
                    </InputBox>
                    <ListPanel>
                        <ListItem data={data}>
                        </ListItem>
                    </ListPanel>
                        {children}
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Container;