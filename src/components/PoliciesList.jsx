import { observer } from 'mobx-react-lite';
import React from 'react';
import Policies from '../store/Policies'

const PoliciesList = observer(() => {
  return (
    <div>
        <table>
            <tbody>
                {Policies.Data.map(item => 
                    <tr className="Policies" key={item.id}>
                        <td className="TableCell">{item.name}</td>
                        <td className="TableCell">{item.premia}</td>
                        <td className="TableCell">{item.sum}</td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
  );
  
})

export default PoliciesList;