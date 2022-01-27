import { observer } from 'mobx-react-lite';
import React from 'react';
import InsuranceDataStorage from '../store/InsuranceDataStorage'
import InsurancePoliciesStorage from '../store/InsurancePoliciesStorage'

const InputForm = observer(() => {

    const changeFlagCalculate = (event) => {
        event.preventDefault();
        if(InsurancePoliciesStorage.filterPoliciesByBmiAndAge(InsuranceDataStorage.calculateBmi, InsuranceDataStorage.calculateAge).length > 0) {
            InsuranceDataStorage.changeCalculateFlag()
        } else {alert('По введенным данным не подобрано ни одного полиса')}
    }

    const setInsuranceData = () => {
        InsuranceDataStorage.setInsurancePremiumAndEndingDate()
        alert('Вы оформили страховой полиc - ' + InsuranceDataStorage.data.policyName);
        //Вывод для наглядного представления итоговых данных
        console.log("Название полиса: " + InsuranceDataStorage.data.policyName);
        console.log("Длительность полиса: " + InsuranceDataStorage.data.policyDuration);
        console.log("Страховая премия в месяц: " + InsuranceDataStorage.data.policyPremium);
        console.log("Страховая сумма: " + InsuranceDataStorage.data.policyInsuredSum);
        console.log("Общая страховая премия: " + InsuranceDataStorage.data.fullInsurancePremium);
        console.log("Дата начала действия полиса: " + InsuranceDataStorage.data.policyStartDate);
        console.log("Дата окончания действия полиса: " + InsuranceDataStorage.data.policyEndingDate);
    }

    return (
        <React.Fragment>
            <h3>Введите параметры для подбора страховки:</h3>
            <form onSubmit={e=>changeFlagCalculate(e)}>
                <label>
                    Рост(см):
                    <input type="number" required onChange={e=>InsuranceDataStorage.setHeight(e.target.value)}/>
                </label><br/>
                <label>
                    Вес(кг):
                    <input type="number" name="contact" required onChange={e=>InsuranceDataStorage.setWeight(e.target.value)}/>
                    </label><br/>
                <label>    
                    Пол:
                    <label>
                        <input type="radio"name="contact"  required value="male" onChange={e=>InsuranceDataStorage.setGender(e.target.value)}/>
                        Мужской
                    </label>
                    <label>
                        <input type="radio" name="contact" required value="female" onChange={e=>InsuranceDataStorage.setGender(e.target.value)}/>    
                        Женский
                    </label>
                </label><br/>
                <label>
                    Дата рождения:
                    <input id="date" type="date" required 
                           value={InsuranceDataStorage.birthday_date}
                           onChange={e=>InsuranceDataStorage.setBirthdayDate(e.target.value)}/><br/>
                </label>
                <input type="submit" className='button' value="Подобрать страховой полис" />
            </form>
            <div className='policies'>
                {InsuranceDataStorage.calculate && 
                <div className='policies__table'>
                    <h3>Подходящие страховые полисы:</h3>
                    <table className='policies__table-body'>
                        <tbody>
                            <tr>
                                <th className="policies__table-cell"></th>
                                <th className="policies__table-cell">Название полиса</th>
                                <th className="policies__table-cell">Страховая премия</th>
                                <th className="policies__table-cell">Страховое покрытие</th>
                            </tr>
                            {InsurancePoliciesStorage.filterPoliciesByBmiAndAge(InsuranceDataStorage.calculateBmi, InsuranceDataStorage.calculateAge)
                            .map(item =>
                                <tr key={item.id}>
                                    <td className="policies__table-cell">
                                        <input type="checkbox" 
                                               value = {item.id} 
                                               checked={InsuranceDataStorage.policySelected(item.id)}
                                               onChange={() => InsuranceDataStorage.setPolicy(item)}/>
                                    </td>
                                    <td className="policies__table-cell">{item.name}</td>
                                    <td className="policies__table-cell">{item.premium}</td>
                                    <td className="policies__table-cell">{item.insuredSum}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>}
                
                {!!InsuranceDataStorage.data.policyId && 
                InsurancePoliciesStorage.filterPoliciesById(InsuranceDataStorage.data.policyId).map(item => 
                    <div className="policies__calculations" key={item.id}>
                        <h3>Покрываемые риски:</h3>
                        <textarea className="policies__calculations-risks" value={item.risks} readOnly/>

                        <h3>Выберите длительность и дату начала страхового полиса</h3>
                        <input type="range" className="policies__calculations-duration" 
                               min={item.minMonth} max={item.maxMonth} step="1"
                               value={InsuranceDataStorage.data.policyDuration} 
                               onChange={e=> InsuranceDataStorage.setDuration(e.target.value)}/> 
                        
                        <p>Полис длительностью <b>{InsuranceDataStorage.data.policyDuration}</b> месяцев</p>

                        <div className='policies__calculations-date'>            
                            <label>
                                Дата начала:
                                <input id="date" type="date" min={InsuranceDataStorage.calculateCurrentDate} required 
                                       onChange={e=> InsuranceDataStorage.setStartDate(e.target.value)}/>
                            </label><br/>
                            <label>
                                Дата окончания:
                                <input type="date" value={InsuranceDataStorage.calculateEndingDate} disabled/>
                            </label> 
                        </div>

                        <h4>Полная страховая премия - {InsuranceDataStorage.calculateFullPremium}</h4>
                        
                        <button className='policies__calculations-button button' disabled={!InsuranceDataStorage.fullnessСheck} 
                                onClick={()=>setInsuranceData()}>
                            Оформить страховку
                        </button>
                    </div>
                )}
            </div>
        </React.Fragment>
  );
})

export default InputForm;