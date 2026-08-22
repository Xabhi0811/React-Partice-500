import Q2 from './Partice/Q2'
import Nameadd from './Partice/Nameadd'
import List from './Partice/List'
import Html from './Partice/Html'
import Combined from './Partice/Combined'
import Adult from './Partice/Adult'
import Even from './Partice/Even'
import NameMap from './Partice/NameMap'
import NumberMap from './Partice/NumberMap'
import Users from './Partice/User'
import Props from './Partice/Props'
import PropsNumber from './Partice/PropsNumber'
import StringProps from './Partice/StringProps'
import Array from './Partice/Array'
import ObjectProps from './Partice/ObjectProps'
import DestrictureProps from './Partice/DestrictureProps'
import UserDestructuring from './Partice/UserDestructuring'
import ButtonProps from './Partice/ButtonProps'
import Button from './Partice/Button'
import ButttonLog from './Partice/ButttonLog'
import NestedLopp from './Partice/NestedLopp'
import ArrayLength from './Partice/ArrayLength'
import Value from './Partice/Value'
import Mult from './Partice/Mult'
import Boolean from './Partice/Boolean'
import Statement from './Partice/Statement'
import And from './Partice/And'
import NestedCondition from './Partice/NestedCondition'


const App = () => {
  const fruits = ["Apple", "Banana", "Mango", "Orange"]

  return (
    <div>
      <Q2/>
      <Nameadd/>
      <List/>
      <Html/>
      <Combined/>
      <Adult/>
      <Even/>
      <NameMap/>
      <NumberMap/>
      <Users/>
      <Props/>
      <PropsNumber/>
      <StringProps/>
      <Array/>
      <ObjectProps/>
      <DestrictureProps/>
      <UserDestructuring/>
      <ButtonProps/>
      <Button/>
      <ButttonLog/>
      <NestedLopp/>
      <ArrayLength items={fruits}/>
      <Value/>
      <Mult/>
      <Boolean/>
      <Statement/>
      <And/>
      <NestedCondition/>
    </div>
    
  )
}

export default App
