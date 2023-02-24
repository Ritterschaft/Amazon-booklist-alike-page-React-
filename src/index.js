import React from "react";
import ReactDom from 'react-dom';


// CSS importation entry
import './index.css'

function BookList() {
   return (
      <section className="booklist">
         <Book/>
         <Book/>
         <Book/>
         <Book/>
         <Book/>
         <Book/>
         <Book/>
         <Book/>
         <Book/>
      </section>
   );
}

const Book = () => {
   return <article className="book">
      <Image></Image>
      <Title/>
      <Author/>
   </article>
};

const Image = () => (
<img 
src="https://encrypted-tbn0.gstatic.com/
images?q=tbn:ANd9GcRlJyNnsZKVEpYKzpscnI69EwpDDxaqB9lWgMYBvpXhZ3DaULgTz8VVY_5fy2mL1DrdfC4&usqp=CAU" 
alt="" />
);

const Author = () => <h4 style={{color:'#617d98',fontSize:'0.75rem',margin:'0.25rem'}} >Amelia Hepworth</h4>
const Title = () => <h1>JavaScript Tutorial by Admin</h1>
ReactDom.render(<BookList/>,document.getElementById('root'));
