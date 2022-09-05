import { ChildAsFC } from './Child';

const Parent = () => {

  return (
    <div>
        <ChildAsFC color={'red'} onClick={() => console.log('hi there!')
        }>
          <h3>Hello</h3>
        </ChildAsFC>
    </div>
    

  )
}

export default Parent;
