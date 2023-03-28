import { createSlice } from "@reduxjs/toolkit";

 const initialState={
    todos:[
        {id:1, title:"deneme1", done:false},
        {id:2, title:"deneme2", done:true},
        {id:3, title:"deneme3", done:false},
        {id:4, title:"deneme4", done:true},
       
    ]
 }
 
 export const todoSlice = createSlice({
    name: 'todoSlice',
    initialState,
    reducers:{
      addTodo:(state, action)=>{
         console.log('ADD Todo params', state, action)

         //action.payload.done property'sinin her zaman boolean türünde olduğu garanti edilir.
         
         if(!action.payload.done){
            action.payload.done=false
         }else {action.payload.done=  true}

         // maximum id'yi bulup bir fazlasını  yeni objeye ekliyoruz.

         
         //ternary operator ile maximum id'yi bulma
         const  maxid = state.todos.reduce((maxid, item)=> item.id>maxid ? item.id: maxid,0)
         action.payload.id =maxid+1
         state.todos.push(action.payload)
      },
      
      deleteTodo: (state,action)=>{
         console.log('>>Delete Todo params', state,action)
         //belirtilen index'ten itibaren sadece 1 tane item silincecek.
         state.todos.splice(action.payload, 1)
      },

      updateTodo:(state, action) =>{
         //Düzenle butonu eklenecek
         //farklı sayfa üzerinden veya modal window kullanarak düzenleme formunu aç.
      }
    }
 })

 export const {
   addTodo,
   deleteTodo
 } =todoSlice.actions

 export default todoSlice.reducer