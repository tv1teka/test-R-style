import { observer } from 'mobx-react-lite';
import React from 'react';
import Clients from '../store/Clients'
import Policies from '../store/Policies'

const InputForm = observer(() => {
  return (
    <div>
        <form onSubmit={e=>Clients.formSubmit(e)}>
            <label>
                Рост:
                <input type="text" value={Clients.height} onChange={e=>Clients.heightChange(e)}/>
            </label><br/>
            <label>
                Вес:
                <input type="text" value={Clients.weight} onChange={e=>Clients.weightChange(e)}/>
            </label><br/>
            <label>           
                <input type="radio" id="contactChoice1"
                name="contact" value="male" onChange={e=>Clients.sexChange(e)}/>
                Male
            </label>
            <label>
                <input type="radio" id="contactChoice2"
                name="contact" value="female" onChange={e=>Clients.sexChange(e)}/>    
                Female
            </label><br/>
            <label>
                Дата рождения: 
                <input id="date" type="date" value={Clients.birthday_date} onChange={e=>Clients.dateChange(e)}/>
            </label><br/>

            <input type="submit" value="Отправить"/>
        </form>
        <div>
        <table>
            <tbody>
                {Clients.calculate ? Policies.sortPolicies(Clients.calculateBmi, Clients.calculateAge).map(item =>
                    <tr className="Policies" key={item.id}>
                        <td className="TableCell"><input type="checkbox" name="" id="" /></td>
                        <td className="TableCell">{item.name}</td>
                        <td className="TableCell">{item.premia}</td>
                        <td className="TableCell">{item.sum}</td>
                    </tr>
                ) : null}
            </tbody>
        </table>
        <textarea name="" id="" cols="30" rows="10">

        </textarea>
    </div>
    </div>
  );
  
})

export default InputForm;