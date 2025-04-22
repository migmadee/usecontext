import {useContext} from 'react'
import { Typography, Select } from 'antd'
import AppContext from '../hook/AppContext'

const{ Title } = Typography
const { Option } = Select
const Greeting = () => {
    const { users, language, setLanguage, translations } = useContext(AppContext)
  return (
    <>
    <Title level={2}>
        {translations[language]},{users}!
    </Title>
<Select style ={{ width:200}} value={language} onChange={setLanguage}>
    < Option value='en'>English</Option>  
    < Option value='es'>Spanish</Option>  
    < Option value='fr'>French</Option>  
    </Select>
    </>
  )
}

export default Greeting