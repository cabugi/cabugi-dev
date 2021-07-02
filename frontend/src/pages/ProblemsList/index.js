import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import Navbar from '../resources/Navbar';

export default function Problemas() {

    return (
        <div className="problem-page">
            <Navbar />
            <div className="problems">
                <table className = "problem-table">
                    <colgroup>
                        <col style={{width:'125px',minWidth:'125px'}} />
                        <col style={{width:'350px',minWidth:'350px'}} />
                        <col style={{width:'125px',minWidth:'125px'}} />
                        <col style={{width:'125px',minWidth:'125px'}} />
                    </colgroup>
                    <thead>
                        <tr>
                            <th>Status</th>
                            <th>Problema</th>
                            <th>Aceitação</th>
                            <th>Solução</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><p className = "status status-accepted">AC</p></td>
                            <td className = "title"><Link to="/problemas/Arthur">problem1</Link></td>
                            <td className = "acceptance">89.7%</td>
                            <td className = "solution solution-found"><Link to="/problemas/Arthur/Editorial">link</Link></td>
                        </tr>
                        <tr>
                            <td><p className = "status status-wrong">WA</p></td>
                            <td className = "title"><Link to="/problemas/Bile">problem2cutofftestaaaaaaaaaaaaaaaaaaaaaaa</Link></td>
                            <td className = "acceptance">13.7%</td>
                            <td className = "solution solution-found"><Link to="/problemas/Bile/Editorial">link</Link></td>
                        </tr> 
                        <tr>
                            <td><p className = "status status-unsolved">??</p></td>
                            <td className = "title"><Link to="/problemas/Vaporeon">problem3</Link></td>
                            <td className = "acceptance">2.4%</td>
                            <td className = "solution solution-notfound">:(</td>
                        </tr> 
                    </tbody>
                </table>
            </div>
        </div>
    );

}
