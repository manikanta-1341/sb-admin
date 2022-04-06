import React from 'react';
import './App.css'
import TagFacesIcon from '@mui/icons-material/TagFaces';
export default function Side_bar (){
    return (
        <div className="side_bar_div">
            <ul type="none">
                <li className="sb_admin_li"><span className="sb_admin_face"><TagFacesIcon fontSize="large"/></span> &nbsp; &nbsp;<span className="sb_admin_text"> SB ADMIN &nbsp;<sup>2</sup></span></li>
                <hr/>
                <li className="dashboard_text_li"><span className="dashboard_text">Dashboard</span></li>
                <hr/>
                <li className="interface_text_li"><span className="interface_text">INTERFACE</span></li>
                <li><span className="same_props">Components</span></li>
                <li><span className="same_props">Utilites</span></li>
                <hr/>
                <li><span className="addons_text">ADDONS</span></li>
                <li><span className="same_props">Pages</span></li>
                <li><span className="same_props">Charts</span></li>
                <li><span className="same_props">Tables</span></li>
            </ul>
        </div>
    );
}