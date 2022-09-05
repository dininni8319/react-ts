interface ChildProp {
  color:string;
  onClick: () => void;
  children: JSX.Element
}

//this are two ways to define a child component
// export const Child = ({ color, onClick}: ChildProp) => {
//   return <div>
//     <h3>{ color }</h3>
//     <button onClick={onClick}>Click me</button>
//   </div>
// }

//Here Typescript knows that is a React Component
//so that we can access to additional properties
//FC = FunctionalComponent
export const ChildAsFC: React.FC<ChildProp> = ({ color, onClick, children}) => {
  return <div>{ color }
        {children}
        <button onClick={onClick}>Click me</button>
  </div>
}

