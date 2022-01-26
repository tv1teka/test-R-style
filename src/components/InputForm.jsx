import { observer } from 'mobx-react-lite';
import React from 'react';
import Clients from '../store/Clients'
import Policies from '../store/Policies'

const InputForm = observer(() => {

    const changeFlagCalculate = (event) => {
        event.preventDefault();
        if(Policies.filterPoliciesByBmiAndAge(Clients.calculateBmi, Clients.calculateAge).length > 0) {
            Clients.changeCalculateFlag()
        } else {alert('По введенным данным не подобрано ни одного полиса')}
    }

    const checkout = () => {
        Clients.setInsuranceData()
        alert('Вы оформили страховой полиc - ' + Clients.data.policyName);
    }

  return (
    <div>
        <h3>Введите параметры для подбора страховки:</h3>
        <form onSubmit={e=>changeFlagCalculate(e)}>
                Рост(см):
                <input type="number" required onChange={e=>Clients.setHeight(e.target.value)}/><br/>
                Вес(кг):
                <input type="number" required onChange={e=>Clients.setWeight(e.target.value)}/><br/>
                Пол:      
                <input type="radio" required value="male" onChange={e=>Clients.setGender(e.target.value)}/>
                Мужской
                <input type="radio" required value="female" onChange={e=>Clients.setGender(e.target.value)}/>    
                Женский<br/>
                Дата рождения:
                <input id="date" type="date" required value={Clients.birthday_date} onChange={e=>Clients.setBirthdayDate(e.target.value)}/><br/>
                <input type="submit" value="Подобрать страховой полис"/>
        </form>
    <div>
        {Clients.calculate && 
        <div>
            <h3>Подходящие страховые полисы:</h3>
            <table>
                <tbody>
                    <tr className="policy">
                            <th className="table-cell"></th>
                            <th className="table-cell">Название полиса</th>
                            <th className="table-cell">Страховая премия</th>
                            <th className="table-cell">Страховое покрытие</th>
                    </tr>
                    {Policies.filterPoliciesByBmiAndAge(Clients.calculateBmi, Clients.calculateAge).map(item =>
                        <tr className="policy" key={item.id}>
                            <td className="table-cell">
                                <input type="checkbox" 
                                value = {item.id} 
                                checked={Clients.changeCheckedFlag(item.id)}
                                onChange={e => Clients.setPolicy(e,item)}/>
                            </td>
                            <td className="table-cell">{item.name}</td>
                            <td className="table-cell">{item.premium}</td>
                            <td className="table-cell">{item.sum}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>}
        
        {Clients.policySelected && 
        Policies.filterPoliciesById(Clients.policyId).map(item => 
        <div className="registration" key={item.id}>
            <textarea className="textarea" value={item.risks} readOnly/>
            <p>Полис длительностью {Clients.duration} месяцев</p>

            <input type="range" min={item.min} max={item.max} step="1"
            value={Clients.duration} 
            onChange={e=> Clients.setDuration(e.target.value)}/> 
            
            <label>{item.min + "     " + item.max}</label><br/>
            <div>            
                    Дата начала: 
                    <input id="date" type="date" required onChange={e=> Clients.setStartDate(e.target.value)}/>
                    Дата окончания: 
                    <input type="date" value={Clients.calculateEndingDate} required readOnly/>
                <h4>Полная страховая премия - {Clients.calculateFullPremium}</h4>
                {Clients.complete && 
                    <button onClick={()=>checkout()}>Оформить страховку</button>
                }
            </div>
        </div>
        )}

    </div>
    </div>
  );
  
})

export default InputForm;