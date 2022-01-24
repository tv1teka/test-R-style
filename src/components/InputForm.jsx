import { observer } from 'mobx-react-lite';
import React from 'react';
import Clients from '../store/Clients'

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
            <input type="text" value={Clients.weight}  onChange={e=>Clients.weightChange(e)}/>
            </label><br/>

            <input type="radio" id="contactChoice1"
            name="contact" value="male" onChange={e=>Clients.sexChange(e)}/>
            <label>Male</label>

            <input type="radio" id="contactChoice2"
            name="contact" value="female" onChange={e=>Clients.sexChange(e)}/>
            <label>Female</label><br/>

            <label>
            Дата рождения: 
            <input id="date" type="date" value={Clients.birthday_date} onChange={e=>Clients.dateChange(e)}/>
            </label><br />


            <input type="submit" value="Отправить"/>
        </form>
    </div>
  );
  
})

export default InputForm;