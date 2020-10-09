import { Checkbox, Collapse } from 'antd'
import React, { useState } from 'react'

const { Panel } = Collapse;


function CheckBox(props) {
    const [Checked, setChecked] = useState([])
    const handleToggle = (value) => {
        const currentIndex = Checked.indexOf(value)
        const newChecked = [...Checked]
        if (currentIndex == -1){
            newChecked.push(value)
        } else {
            newChecked.splice(currentIndex, 1)
        }
        setChecked(newChecked)
        props.handleFilters(newChecked)
    }
    const renderCheckboxLists = () => props.list && props.list.map((value,index)=> (
        <div key={index}>
            <Checkbox onChange={() => handleToggle(value._id)} checked={Checked.indexOf(value._id) === -1 ? false : true}/>
                <span>{value.name}</span>
        </div>
    ))

    return (
        <div>
            <Collapse defaultActiveKey={['1']} >
                <Panel header="This is panel header 1 " key="1">
                    {renderCheckboxLists()}
                </Panel>
            </Collapse>
        </div>
    )
}

export default CheckBox
