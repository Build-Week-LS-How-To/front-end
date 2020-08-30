import React ,{useState}from 'react';
//STYLES
import '../../styles/edithack.scss';
import {
    Form,
    Input,
    FormGroup,
    Button,
    Label,
} from 'reactstrap';
import {axiosWithAuth} from '../../utils/axiosWithAuth';
import { useParams, useHistory } from "react-router-dom";
import axios from 'axios';
export default function EditHackForm() {
// const {id} = useParams();
// const { push } = useHistory();
// const [item, setItem] = useState({
//         title:'',
//         description:'',
//         id:Date.now()
//     })  
// useEffect(()=>{
//         axiosWithAuth()
//         .get(`https://how-to-1.herokuapp.com/api/howTo/${id}`)
//         .then(res=>{console.log('update',res);
//       setItem(res.data)})
//         .catch(err=>console.log(err))
// },[id])
// const changeHandler = e =>{
//     setItem({...item, [e.target.name]:e.target.value})

// }
// const submitPost = (e) =>{
//     e.preventDefault();
//     axiosWithAuth()
//     .put(`https://how-to-1.herokuapp.com/api/howTo/${id}`,item)
//     .then(res=>{
//         const newItems = props.movieList.map(newItm => {
//             if (newItm.id === item.id) {
//               return item;
//             }
//             return newItm;
//           });
//        props.setMovieList(newItems);
//        push('/');
//     })

// }
//     return (
//         <div>
//             <Form onSubmit={submitPost}>
//                 <FormGroup>
//                     <Label>Title</Label>
//                     <Input value={item.title} className='editinput' type="text" name="title" onChange={changeHandler}/>
//                 </FormGroup>
//                 <FormGroup>
//                     <Label>Description</Label>
//                     <Input value={item.description} className='editinput' type="text" name="description" onChange={changeHandler}/>
//                 </FormGroup>
//                 <Button>Save</Button>
//             </Form>
//         </div>
//     )
}
