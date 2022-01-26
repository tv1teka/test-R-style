import { observer } from 'mobx-react-lite';
import React from 'react';
import Clients from '../store/Clients'
import Policies from '../store/Policies'

const InputForm = observer(() => {

    const changeFlagCalculate = (event) => {
        event.preventDefault();
        Clients.changeFlagCalculate()
        Clients.changeFlagSelected()
    }

  return (
    <div>
        <form onSubmit={e=>changeFlagCalculate(e)}>
            <label>
                Рост:
                <input type="text" required value={Clients.height} onChange={e=>Clients.heightChange(e)}/>
            </label><br/>
            <label>
                Вес:
                <input type="text" required value={Clients.weight} onChange={e=>Clients.weightChange(e)}/>
            </label><br/>
            <label>           
                <input type="radio" required id="contactChoice1"
                name="contact" value="male" onChange={e=>Clients.sexChange(e)}/>
                Male
            </label>
            <label>
                <input type="radio" required id="contactChoice2"
                name="contact" value="female" onChange={e=>Clients.sexChange(e)}/>    
                Female
            </label><br/>
            <label>
                Дата рождения: 
                <input id="date" type="date" required value={Clients.birthday_date} onChange={e=>Clients.dateChange(e)}/>
            </label><br/>

            <input type="submit" value="Подобрать страховой полис"/>
        </form>
        <div>
        <table>
            <tbody>
                {Clients.calculate ? Policies.filterPoliciesByBmiAndAge(Clients.calculateBmi, Clients.calculateAge).map(item =>
                    <tr className="policy" key={item.id}>
                        <td className="table-cell"><input type="checkbox" value = {item.id} onChange={() => Clients.selectedPolice(item)}/></td>
                        <td className="table-cell">{item.name}</td>
                        <td className="table-cell">{item.premia}</td>
                        <td className="table-cell">{item.sum}</td>
                    </tr>
                ) : null}
            </tbody>
        </table>
        {Clients.policySelected ? Policies.filterPoliciesById(Clients.policeId).map(item => 
        <div className="registration" key={item.id}>
            <textarea className="textarea" value={item.risks} readOnly/>
            <p>Полис длительностью {Clients.duration} месяцев</p>
            <input type="range" min={item.min} max={item.max} step="1" value={Clients.duration} onChange={e=> Clients.durationChange(e)}/> 
            <label>{item.min + "     " + item.max}</label><br/>
            <div>            
                <label>
                    Дата начала: 
                    <input id="date" type="date" required onChange={e=> Clients.startDateChange(e)}/>
                </label><br/><br/>
                <label>
                    Дата окончания: 
                    <input type="date" value={Clients.calculateEndingDate} required readOnly/>
                </label><br/>
                <h4>Полная страховая премия - {Clients.calculateFullPremium}</h4>
                {console.log(Clients.calculateEndingDate)}
                {Clients.complete ? 
                <button onClick={()=>alert('Страховка оформлена успешно!')}>Оформить страховку</button>
                : null}
            </div>
        </div>
        ): null}

    </div>
    </div>
  );
  
})

export default InputForm;