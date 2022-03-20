import React from 'react';
import './ListPanel.css';

const ListPanel = ({children}) => {

    return(
        <div className="panel panel-primary" id="result_panel">
            <div className="panel-body">
                <ul className="list-group">
                    {children}
                </ul>
            </div>
        </div>
    );
}
export default ListPanel;