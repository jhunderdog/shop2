import { Checkbox, Col, Collapse } from 'antd'
import React from 'react'

const { Panel } = Collapse;


function CheckBox(props) {

    const renderCheckboxLists = () => props.list && props.list.map((value,index)=> (
        <div key={index}>
            <Checkbox onChange>
                <span>{value.name}</span>
            </Checkbox>
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
